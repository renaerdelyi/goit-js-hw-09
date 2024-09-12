import Notiflix from "notiflix";

function createPromise(position, delay) {
 return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
setTimeout(() => {
  if (shouldResolve) {
    resolve({position,delay})
  } else {
    reject({position,delay})
  }
},delay);
});
}

document.querySelector(".form").addEventListener("submit",event => {
  event.preventDefault();
  
const delay = parseInt(event.target.delay.value);
const step = parseInt(event.target.step.value);
const amount = parseInt(event.target.amount.value);

console.log(delay,step,amount);

for(let i = 0 ; i < amount; i++){
  const currentDelay = delay + i * step ;
  createPromise(i + 1, currentDelay)
  .then(value => {
    console.log(`✅ Fulfilled promise ${value.position} in ${value.delay}ms`);
  })
  .catch(error => {
     console.log(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
  });
}
});

