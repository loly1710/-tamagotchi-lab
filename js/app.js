/*-------------------------------- Constants --------------------------------*/
const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};

/*---------------------------- Variables (state) ----------------------------*/
let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector("#boredom-stat");
const playBtnEl = document.querySelector("#play");
const feedBtnEl = document.querySelector("#feed");
const sleepBtnEl = document.querySelector("#sleep");
const sleepinessEl = document.querySelector("#sleepiness-stat");
const hungerEl = document.querySelector("#hunger-stat");

const gameMessageEl = document.querySelector("#message");
const resetBtnEl = document.querySelector("#restart");

/*-------------------------------- Functions --------------------------------*/
function init() {
  resetBtnEl.classList.add("hidden");
  gameMessageEl.classList.add("hidden");

  timer = setInterval(runGame, 2000);
  gameOver = false;
  console.log();
}
init();

function runGame() {
  updateStates();
  checkGameOver();
  render();
}

function render() {
  boredomStatEl.textContent = state.boredom;
  sleepinessEl.textContent = state.sleepiness;
  hungerEl.textContent = state.hunger;
  if (gameOver) {
    clearInterval(timer);
    resetBtnEl.classList.remove("hidden");
    gameMessageEl.classList.remove("hidden");
  }
}

function updateStates() {
  state.boredom += getRandomInt(0, 3);
  state.hunger += getRandomInt(0, 3);
  state.sleepiness += getRandomInt(0, 3);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function checkGameOver() {
  if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
    gameOver = true;
  }
}

function playBtnClick() {
  state.boredom = 0;
  render();
}

function feedBtnClick() {
  state.hunger = 0;
  render();
}

function sleepBtnClick() {
  state.sleepiness = 0;
  render();
}

function reset() {
  state.boredom = 0;
  state.hunger = 0;
  state.sleepiness = 0;
  render();
  init();
}
/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener("click", playBtnClick);
feedBtnEl.addEventListener("click", feedBtnClick);
sleepBtnEl.addEventListener("click", sleepBtnClick);

resetBtnEl.addEventListener("click", reset);
