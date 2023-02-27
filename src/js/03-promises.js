import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // console.log(event.currentTarget.elements);
  const { 
    elements: { delay, step, amount }
  } = event.currentTarget;

  const dataForm = {
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value)
  };

  for (let i = 1; i <= dataForm.amount; i += 1) {
    createPromise(i, dataForm.delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    dataForm.delay += dataForm.step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
});
}

/*
Write a script that, when submitting the form, 
calls the createPromise(position, delay) function as many times as you entered 
in the amount field. On each call, pass it the number of the promise
to be created (position) and the delay given the first delay (delay) 
and step (step) entered by the user.

Supplement the code of the createPromise function so that it returns one promise
that will be fulfilled or rejected after delay time. 
The value of the promise must be an object containing the position and 
delay properties with the values of these parameters. 
Use the initial function code to choose whether to fulfill or reject the promise.
*/
