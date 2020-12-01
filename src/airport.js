class Airport {

  constructor(capacity = 5) {
    this.planeArray = [];
    this.capacity = capacity;
  }

  land(plane){
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

}

module.exports = { Airport }