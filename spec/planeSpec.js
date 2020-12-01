const { Plane } = require('../src/plane.js')


describe('plane', () => {
  let plane;

  beforeEach(() => {

    plane = new Plane();

  });

  it('is docked by default', () => {

    expect(plane.docked).toBeFalse()

  });

});