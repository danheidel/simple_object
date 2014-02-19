'use strict';

var playingCard = require('../object').playingCard;
var expect = require('chai').expect;

describe('playingCard', function(){
  describe('constructor', function(){
    it('should have default values', function(){
      var newCard = new playingCard();

      expect(newCard.getSuite()).to.equal('no suite');
      expect(newCard.getRank()).to.equal('no rank');
      expect(newCard.isValid()).to.equal(false);
    });
    it('should set suite and rank if provided', function(){
      var suite = 'spade',
        rank = 'king',
        newCard = new playingCard(suite, rank);

      expect(newCard.getSuite()).to.equal(suite);
      expect(newCard.getRank()).to.equal(rank);
      expect(newCard.isValid()).to.equal(true);
    });
    it('should detect improper suite', function(){
      var suite = 'barry',
        rank = 'king',
        newCard = new playingCard(suite, rank);

      expect(newCard.getSuite()).to.equal('no suite');
      expect(newCard.getRank()).to.equal(rank);
      expect(newCard.isValid()).to.equal(false);
    });
    it('should detect improper rank', function(){
      var suite = 'spade',
        rank = 11,
        newCard = new playingCard(suite, rank);

      expect(newCard.getSuite()).equal(suite);
      expect(newCard.getRank()).equal('no rank');
      expect(newCard.isValid()).equal(false);
    })
  });
});