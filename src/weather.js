class Weather {

  weather() {
    let randIndex = Math.floor(Math.random() * this.outlooks().length)
    return this.outlooks()[randIndex];
  }

  outlooks() {
    let sunnies = new Array(19).fill('sunny');
    let stormies = ['stormy'];
    let outlooks = sunnies.concat(stormies);
    return outlooks;
  }

}

module.exports = { Weather }