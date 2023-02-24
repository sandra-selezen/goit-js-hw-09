import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
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
