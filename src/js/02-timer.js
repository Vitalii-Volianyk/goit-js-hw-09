import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let selectedDate;
let startedDate;
let interval=-1;
const start = document.querySelector("[data-start]");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");


flatpickr("input#datetime-picker", {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minDate: "today",
	minuteIncrement: 1,
	onClose(selectedDates) {
		selectedDate = selectedDates[0].getTime();
		if ((selectedDate - Date.now())<0) {
			Notify.failure("Please choose a date in the future");
			start.setAttribute("disabled",true);
		} else {
			start.removeAttribute("disabled");
		}
	},
});

start.addEventListener("click", () => {
	startedDate = selectedDate;
	if (!interval<0) {
		clearInterval(interval);
	}
	Notify.success("Timer started...");
	interval=setInterval(() => {
		const millisecondLeft = startedDate - Date.now();
		if (millisecondLeft>0) {
			const time = convertMs(millisecondLeft);
			days.textContent = addLeadingZero(time.days);
			hours.textContent = addLeadingZero(time.hours);
			minutes.textContent = addLeadingZero(time.minutes);
			seconds.textContent = addLeadingZero(time.seconds);
		} else {
			clearInterval(interval);
			interval=-1
		}

	}, 1000);
});

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
function addLeadingZero(value) {
	return value.toString().padStart(2, "0");
}