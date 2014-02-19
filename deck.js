'use strict';
var PlayingCard = require('./card').PlayingCard;

var Deck = function(iNumDecks){
  var numDecks = iNumDecks || 1;  //if numDecks is not specified, assume 1
  var cardSet = [],
    suiteSet = ['spade', 'heart', 'diamond', 'club'],
    rankSet = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

  var populateDeck = function(numDecks){
    for(var rep = 0;rep < numDecks;rep ++){
      for(var rep2 = 0;rep2 < 4;rep2 ++){
        for(var rep3 = 0;rep3 < 13;rep3 ++){
          cardSet.push(new PlayingCard(suiteSet[rep2], rankSet[rep3]));
        }
      }
    }
  };

  var dumpDeck = function(){
    for(var rep=0;rep<cardSet.length;rep++){
      console.log(cardSet[rep].getCard());
    }
  };

  var Constructor = function(){
    populateDeck(numDecks || 1);
  };

  Constructor.prototype.validateDeck = function(){
    if(cardSet.length == (52 * numDecks)){return true;}
  };

  return new Constructor();
};

exports.Deck = Deck;