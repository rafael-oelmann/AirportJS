const { Weather } = require('../src/weather.js')

describe('weather', () => {

  // todaysWeather = new Weather

  it('returns sunny or stormy at random', () => { 
    let todaysWeather = new Weather().weather();
    expect(['sunny', 'stormy']).toContain(todaysWeather);
  });


});