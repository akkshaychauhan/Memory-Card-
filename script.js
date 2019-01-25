 const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

 function flipCard() {
 	if(lockBoard) return;
    if(this === firstCard) return;

  this.classList.toggle('flip');

  if(!hasFlippedCard) {
  	//first click
  	hasFlippedCard = true; 
  	firstCard = this;
    
    return; 
  }
  	// second click
  	    secondCard = this;
  	    console.log({firstCard, secondCard});

  	   checkForMatch();

 }
 function checkForMatch() {
 	 //do card match?
        if(firstCard.dataset.framework === 
        	secondCard.dataset.framework){
        disableCard();
        } else {
              unflipCard();
        }
 }
 function disableCard() {
        //it's a match
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
 }
 function unflipCard() {
 	  lockBoard = true;
        	//not a match
        	setTimeout( () => {
        	firstCard.classList.remove('flip');
        	secondCard.classList.remove('flip');

        	resetBoard();
        }, 1500);
 }
 function resetBoard() {
 	[hasFlippedCard, lockBoard] = [false, false];
 	[firstCard, lockBoard] = [null, null]; 
 }
 (function shuffel() {
 	 cards.forEach( card => {
 	 	let randomPos = Math.floor(Math.random() * 12);
 	 	card.style.order = randomPos;
 	 });
 	 	})();
 cards.forEach(card => card.addEventListener('click', flipCard));