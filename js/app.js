const player = {
  currentChoice: null
};
const computer = {
  currentChoice: null
};
const choices = ["Lapis", "Papyrus", "Scalpellus"];

//computer choice
function computerChooses(){
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
};
//player choice
player.currentChoice = choices[2];
//Comparing choices
function compareChoices(){
  computerChooses();
  if(computer.currentChoice === player.currentChoice){
    displayResult("It's a tie! The computer and player both chose " + computer.currentChoice);
  }else if(computer.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){
      displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[1]){
    if(player.currentChoice === choices[2]){
      displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
      displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }
};
//displaying result
function displayResult(result){ 
  const resultText = document.createElement('p');
  resultText.innerText = result;
  document.body.appendChild(resultText);
}
compareChoices();
//event listener
document.querySelector('#L').addEventListener('click', compareChoices);
document.querySelector('#P').addEventListener('click', compareChoices);
document.querySelector('#S').addEventListener('click', compareChoices);
//