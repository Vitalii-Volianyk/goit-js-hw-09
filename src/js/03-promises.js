import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delay = document.querySelector("[name=delay]");
const step = document.querySelector("[name=step]");
const amount = document.querySelector("[name=amount]");
const create = document.querySelector("button");

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position:position,delay:delay});
      } else {
        reject({position:position,delay:delay});
      }
    }, delay);
  });
}

create.addEventListener("click", () => {
  event.preventDefault();
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, (Number(delay.value)+step.value*(i-1)))
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
})

