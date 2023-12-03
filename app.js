/*for rules button*/
const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

openModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal")
    closeModal(modal)
  })
})


function openModal(modal) {
  if (modal == null) return
  modal.classList.add("active")
  overlay.classList.add("active")
}
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove("active")
  overlay.classList.remove("active")
}


/* for hiding the game screen and showing result screen when i click on buttons*/


/*making visible and hidden layers*/
var hideScreen = document.querySelector('.hands');
var showResultScreen = document.querySelector('.rslt');
var glowLeft = document.querySelector(".winnerGlow-left");
var glowRight = document.querySelector(".winnerGlow-right");
var winnerText = document.getElementById("winner_text");
const imageChanger = document.getElementById('computerSelectImageResult');
const computerBorderColor = document.getElementById("imgHolderComputer");
var scoreText = document.getElementById("yourResultNumber");
let count = 0;

/*for game*/
document.getElementById("paperBtn").addEventListener('click', function () {
  var you = "paper";
  var options = ["paper", "rock", "scissors"];
  var computerSelect = Math.floor(Math.random() * options.length);
  var computer = options[computerSelect];
  
  /*hide game screen*/
  hideScreen.classList.add('hidden');

  /*show result Screen*/
  showResultScreen.classList.add('visible');
  

  switch (computer) {
    case "paper":
      winnerText.textContent= "EQUAL";
      console.log("Equal");
      imageChanger.src = "/images/icon-paper.svg";
      imgHolderComputer.style.borderColor = 'blue';
      break;
    case "rock":
      winnerText.textContent= "YOU WON";
      console.log("You won");
      /*glowLeft.classList.add('winnerGlowVisiblity');*/
      imageChanger.src = "/images/icon-rock.svg";
      imgHolderComputer.style.borderColor = 'red';
      count++;
      scoreText.textContent = count;
      break;
    case "scissors":
      winnerText.textContent= "YOU LOSE";
      console.log("You lose");
      /*glowRight.classList.add('winnerGlowVisiblity');*/
      imageChanger.src = "/images/icon-scissors.svg";
      imgHolderComputer.style.borderColor = 'orange';
      count--;
      scoreText.textContent = count;
      break;
  }
});

document.getElementById("scissorsBtn").addEventListener('click', function () {
  var you = "scissors";
  var options = ["paper", "rock", "scissors"];
  var computerSelect = Math.floor(Math.random() * options.length);
  var computer = options[computerSelect];

  /*hide screen*/
  hideScreen.classList.add('hidden');

  /*show result Screen*/
  showResultScreen.classList.add('visible');

  switch (computer) {
    case "paper":
      winnerText.textContent= "YOU WON";
      console.log("You won");
      /*glowLeft.classList.add('winnerGlowVisiblity');*/
      imageChanger.src = "/images/icon-paper.svg";
      imgHolderComputer.style.borderColor = 'blue';
      count++;
      scoreText.textContent = count;
      break;
    case "rock":
      winnerText.textContent= "YOU LOSE";
      console.log("You lose");
      /*glowRight.classList.add('winnerGlowVisiblity');*/
      imageChanger.src = "/images/icon-rock.svg";
      imgHolderComputer.style.borderColor = 'red';
      count--;
      scoreText.textContent = count;
      break;      
    case "scissors":
      winnerText.textContent= "EQUAL";
      console.log("Equal");
      imageChanger.src = "/images/icon-scissors.svg";
      imgHolderComputer.style.borderColor = 'orange';
      break;
  }
});

document.getElementById("rockBtn").addEventListener('click', function () {
  var you = "rock";
  var options = ["paper", "rock", "scissors"];
  var computerSelect = Math.floor(Math.random() * options.length);
  var computer = options[computerSelect];

  /*hide screen*/
  hideScreen.classList.add('hidden');

  /*show result Screen*/
  showResultScreen.classList.add('visible');

  switch (computer) {
    case "paper":
      winnerText.textContent= "YOU LOSE";
      console.log("You lose");
      /*glowRight.classList.add('winnerGlowVisiblity');*/
      imageChanger.src = "/images/icon-paper.svg";
      imgHolderComputer.style.borderColor = 'blue';
      count--;
      scoreText.textContent = count;
      break;
    case "rock":
      winnerText.textContent= "EQUAL";
      console.log("Equal");
      imageChanger.src = "/images/icon-rock.svg";
      imgHolderComputer.style.borderColor = 'red';
      break;
    case "scissors":
      winnerText.textContent= "YOU WON";
      console.log("You won");
      /*glowLeft.classList.add('winnerGlowVisiblity');*/
      imageChanger.src = "/images/icon-scissors.svg";
      imgHolderComputer.style.borderColor = 'orange';
      count++;
      scoreText.textContent = count;
      break;
  }
});


/* Play again button and show the game and hiding the result */
document.getElementById('playAgain').addEventListener('click' , function(){
  hideScreen.classList.remove('hidden');
  showResultScreen.classList.remove('visible');

})