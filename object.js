playingCard = function(suite, rank){
  function checkSuite(iSuite){
    var goodSuite = ['club', 'spade', 'heart', 'diamond'];
    for(var rep=0;rep<goodSuite.length;rep++){
      if(goodSuite[rep] === iSuite){return true;}
    }
    return false;
  }

  function checkRank(iRank){
    var goodRank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    for(var rep=0;rep<goodRank.length;rep++){
      if(goodRank[rep] == iRank){return true;}
    }
    return false;
  }

  this.suite = checkSuite(suite) ? suite : 'no suite';
  this.rank = checkRank(rank) ? rank : 'no rank';
};

playingCard.prototype.getSuite = function(){return this.suite;};
playingCard.prototype.getRank = function(){return this.rank;};
playingCard.prototype.isValid = function(){
  return (this.suite != 'no suite' && this.rank != 'no rank') ? true : false;
};

module.exports.playingCard = playingCard;