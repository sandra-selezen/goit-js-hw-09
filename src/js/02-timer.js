import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInput = document.querySelector("#datetime-picker");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  console.log(selectedDates[0]);
  },
};

const selectedDate = flatpickr(dateInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// function addLeadingZero(time) {
  
// }

// pad(value) {
//   return String(value).padStart(2, '0');
// }

// function updateClockface({ days, hours, mins, secs }) {
//   refs.clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
// }

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

Notify.failure("Please choose a date in the future");

/*
Write a timer script that counts down to a specific date. 

When you click on the "Start" button, 
the script must calculate once a second how much time is left until 
the specified date and update the timer interface, showing four numbers: 
days, hours, minutes and seconds in the following format: xx:xx:xx:xx.
*/