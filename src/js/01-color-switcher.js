
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let colorChange;

  //functia start btn

startBtn.addEventListener('click',() => {
    pushStart();
    startBtn.disabled = false;
});

function pushStart(){
    colorChange = setInterval(()=>{
        document.body.style.backgroundColor = getRandomHexColor();
    },1000);
  }
  // functia stop btn

stopBtn.addEventListener('click',()  => {
    pushStop(); 
 });

function pushStop(){
    clearInterval(colorChange)
}
 
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }