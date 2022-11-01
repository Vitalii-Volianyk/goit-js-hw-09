import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
// const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btnPromise = document.querySelector('button');
function createPromise(position, delay) {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			const shouldResolve = Math.random() > 0.3;
			if (shouldResolve) {
				resolve({ position, delay });
			} else {
				reject({ position, delay });
			}
		}, delay);
	});
	return promise;
}
btnPromise.addEventListeren('click', event => {
	event.preventDefault();
	let firstDelay = Number(delay.value);
	let delayStep = Number(step.value);
	// let amount = Number(amount.value);
	for (let i = 0; i < amount.value; i++) {
		createPromise(1 + i, firstDelay + i * delayStep)
			.then(({ position, delay }) => {
				Notiflix.Notify.success(`:white_check_mark: Fulfilled promise ${position} in ${delay}ms`);
			})
			.catch(({ position, delay }) => {
				Notiflix.Notify.failure(`:x: Rejected promise ${position} in ${delay}ms`);
			});
	}
});