const { Airport } = require('../src/airport.js')

describe('airport', () => {
  let airport;
  let plane;

  beforeEach(() => {

    airport = new Airport();
    plane = jasmine.createSpy('plane');

  });

  describe('land', () => {

    it('adds a plane to the airport plane array', () => {

      airport.land(plane);
      expect(airport.planeArray.length).toEqual(1);

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


