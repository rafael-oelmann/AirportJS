class Airport {

  constructor() {
    this.planeArray = []; 
  }

  land(plane){
    this.planeArray.push(plane);
  }

  takeOff() {
    this.planeArray.shift();
  }

}

module.exports = { Airport }