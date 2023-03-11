let cards = [];
let sum = 0;
let hasBlackJack = false;
let isalive = false;
let message = '';
let messageEl = document.getElementById('message');
let sumEl = document.getElementById('sum');
let cardEl = document.getElementById('card');

//player object
let player = {
    name : 'Per',
    chips : 145,
}



let playerEl = document.getElementById('player');
playerEl.textContent = player.name + ": $" + player.chips;

//start game function
function startGame(){
    isalive = true;
    let firstCard = getRandomcard();
    let secondCard = getRandomcard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function getRandomcard(){
   randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber === 1){
        return 11;
    }
    else if(randomNumber > 10){
        return 10;
    }
    else{
        return randomNumber;
    }
}

//add new cards
function newCard(){
    if(isalive === true && hasBlackJack === false){
        let card = getRandomcard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
}
document.getElementById('new').addEventListener('click', newCard);



//Render games when we start and add new card
function renderGame(){
    //shows sum
    sumEl.textContent = "Sum: " + sum;


    //shows card
    cardEl.textContent = "Cards: ";
    for(let i=0; i<cards.length; i++){
        cardEl.textContent += " " + cards[i];
    }


    if(sum <= 20){
        message = "Do you want to draw a new card?";
     }
     else if(sum === 21){
        message = "Wohoo! you got a Blackjack!";
        hasBlackJack = true;
     }
     else{
        message = "You're out of the game";
        isalive = false;
     }
     messageEl.textContent = message;
}
document.getElementById('start').addEventListener('click', startGame);
