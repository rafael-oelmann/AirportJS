const { Airport } = require('../src/airport.js');
const weather = require('../src/weather.js');

describe('airport', () => {
  let airport;
  let plane;

  beforeEach(() => {

    airport = new Airport();
    plane = jasmine.createSpy('plane');

  });

  describe('constructor', () => {

    it('has a defauly capacity of 5', () => {

      expect(airport.capacity).toEqual(5);

    });

    it('allows user to create airport capacity', () => {

      largeAirport = new Airport(50)
      expect(largeAirport.capacity).toEqual(50);

    });

  });

  describe('land', () => {

    it('adds a plane to the airport plane array', () => {

      airport.land(plane);
      expect(airport.planeArray.length).toEqual(1);

    });

    it('prevent landing when the airport is full', () => {
      for (let i = 1; i <= 5; i++) {
        airport.land(plane);
      }

      expect(function() { airport.land(plane) }).toThrow('Airport is full')

    });

    it('prevents landing if the weather is stormy', () => {

      spyOn(airport, 'stormy').and.returnValue(true);

      expect(function() { airport.land(plane) }).toThrow('Weather too stormy to land');

    });

  });

  describe('takeOff', () => {

    it('removes a plane from planeArray once taken off', () => {

      airport.land(plane);
      airport.takeOff();

      expect(airport.planeArray.length).toBe(0);

    });

  });

}); 


