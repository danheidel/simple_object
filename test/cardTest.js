'use strict';

var PlayingCard = require('../card').PlayingCard;
var Deck = require('../deck').Deck;
var expect = require('chai').expect;

describe('PlayingCard', function(){
  describe('constructor', function(){
    it('should have default values', function(){
      var newCard = new PlayingCard();

      expect(newCard.getSuite()).to.equal('no suite');
      expect(newCard.getRank()).to.equal('no rank');
      expect(newCard.isValid()).to.equal(false);
    });
    it('should set suite and rank if provided', function(){
      var suite = 'spade',
        rank = 'king',
        newCard = new PlayingCard(suite, rank);

      expect(newCard.getSuite()).to.equal(suite);
      expect(newCard.getRank()).to.equal(rank);
      expect(newCard.isValid()).to.equal(true);
    });
    it('should detect improper suite', function(){
      var suite = 'barry',
        rank = 'king',
        newCard = new PlayingCard(suite, rank);

      expect(newCard.getSuite()).to.equal('no suite');
      expect(newCard.getRank()).to.equal(rank);
      expect(newCard.isValid()).to.equal(false);
    });
    it('should detect improper rank', function(){
      var suite = 'spade',
        rank = 11,
        newCard = new PlayingCard(suite, rank);

      expect(newCard.getSuite()).equal(suite);
      expect(newCard.getRank()).equal('no rank');
      expect(newCard.isValid()).equal(false);
    });
  });
});

describe('Deck', function(){
  describe('constructor', function(){
    it('should have a valid card set', function(){
      var newDeck = new Deck();
      expect(newDeck.validateDeck()).equal(true);
    });
    it('should have a valid card set with multiple decks', function(){
      var newDeck = new Deck(6);
      expect(newDeck.validateDeck()).equal(true);
    });
  });
});