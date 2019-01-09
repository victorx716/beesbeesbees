var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.makeHoney = function(value) {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function(value) {
  this.honeyPot--;
}

HoneyMakerBee.prototype.constructor = HoneyMakerBee;