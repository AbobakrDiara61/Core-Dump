let duration = 1000;
let boardContainer = document.querySelector(".board");
let cards = Array.from(boardContainer.children);
// console.log(cards);
console.log(cards.length);
let orderRange = Array.from(Array(cards.length).keys());
shuffle(orderRange);
// console.log(orderRange);
cards.forEach((card, index) => {
    card.style.order = orderRange[index];
    card.addEventListener('click', function () {
        flip(card);
    });
});
function flip(selectedCard) {
    selectedCard.classList.add('flipped');
    let selectedArray = cards.filter(card => card.classList.contains('flipped'));
    if(selectedArray.length === 2) {
        stopClicking(); 
        checkAns(selectedArray[0], selectedArray[1]);
    }
    canSelect = true;

}
function checkAns(firstCard, secondCard) {
    let cardOneType = firstCard.querySelector('.front-face').getAttribute('card');
    let cardTwoType = secondCard.querySelector('.front-face').getAttribute('card');
    if(cardOneType === cardTwoType) {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
        }, duration);
    }
}
function stopClicking() {
    boardContainer.classList.add("no-clicking");
    setTimeout(() => {
        boardContainer.classList.remove("no-clicking");
    }, duration);
    // canSelect = false;
}
function shuffle(array) {
    // Vars
    let current = array.length, 
    temp,
    random;
    while(current > 0) {
        random = Math.floor(Math.random() * current);

        current--;

        temp = array[current];
        array[current] = array[random];
        array[random] = temp
    }
};
