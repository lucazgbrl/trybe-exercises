const {
  mapString,
  encode,
  decode
} = require('./encodeDecode');

describe('the function encodeDeoce()', () => {
  it('check if its a function', () => {
    expect(typeof encode && typeof decode).toBe('function') 
  });

  it('check if it gets encoded', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5')
  });

  it('check if it gets decoded', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
  });

  it('check if it alert an error', () => {
    expect(decode('7, 8, 9, 7')).toBe('undefined')
  });

  it('checks if it has the same length', () => {
    expect(encode('a, e, i, o, u').length).toBe('a, e, i, o, u'.length)
  })
});