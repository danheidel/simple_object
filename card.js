'use strict';

var PlayingCard = function(suite, rank){
  var checkSuite = function(iSuite){
    var goodSuite = ['club', 'spade', 'heart', 'diamond'];
    for(var rep=0;rep<goodSuite.length;rep++){
      if(goodSuite[rep] === iSuite){return true;}
    }
    return false;
  };

  var checkRank = function(iRank){
    var goodRank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    for(var rep=0;rep<goodRank.length;rep++){
      if(goodRank[rep] == iRank){return true;}
    }
    return false;
  };

  suite = checkSuite(suite) ? suite : 'no suite';
  rank = checkRank(rank) ? rank : 'no rank';

  var Constructor = function(){};
  Constructor.prototype.getCard = function(){
    return {
      'suite': suite,
      'rank': rank
    };
  };
  Constructor.prototype.getSuite = function(){return suite;};
  Constructor.prototype.getRank = function(){return rank;};
  Constructor.prototype.isValid = function(){
    return (suite != 'no suite' && rank != 'no rank') ? true : false;
  };

  return new Constructor();
};

exports.PlayingCard = PlayingCard;