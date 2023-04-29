const myFizzBuzz =  require('./myFizzBuzz');

test('fuzz and buzz', () => {
  expect(myFizzBuzz(15)).toBe("fizzbuzz");
  expect(myFizzBuzz(6)).toBe("fizz");
  expect(myFizzBuzz(10)).toBe("buzz");
  expect(myFizzBuzz(13)).toBe(13);
  expect(myFizzBuzz('D')).toBe(false);
}) 