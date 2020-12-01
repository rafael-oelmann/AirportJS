const { Weather } = require('./weather.js')

class Airport {

  constructor(capacity = 5) {
    this.planeArray = [];
    this.capacity = capacity;
  }

  land(plane){
    if (this.stormy()) {
      throw('Weather too stormy to land')
    }
    if (this.full()) {
      throw('Airport is full');
    } 
    this.planeArray.push(plane);
  }

  takeOff() {
    this.planeArray.shift();
  }

  full() {

    return this.planeArray.length === this.capacity

  }

  stormy() {
    new Weather().weather() === 'stormy';
  }

}

module.exports = { Airport }