// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
  var cards = [];
  var hand = [];

function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Create the arrays for the deck, and shuffled deck
  // Make 52 card objects and store them in the "cards" arra
  for ( var i = 0; i < values.length; i++) {
    var valHalf = values[i];
    for ( var j = 0; j < suits.length; j++){
      var suitHalf = suits[j];
      var newCard = new Card(valHalf, suitHalf);
      cards.push(newCard);
    }
  }
  //console.log(cards.length);

}
function Card(value, suit){
  this.value = value;
  this.suit = suit;
}
deck_o_cards();
  // Shuffle the Deck
shuffle(cards);
  // Pull the top card
var first= cards[0];
  // Console log the results
console.log("This deck has " + cards.length + " cards.");
console.log("The top card is a " +first.value +" of "+ first.suit);
deal()

// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function deal(){
  console.log("Dealing your hand...")
  for(var i=0; i < 5; i++){
    console.log("You have a "+ cards[i].value + " of " + cards[i].suit);
  }
}


