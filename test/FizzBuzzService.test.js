const FizzBuzzService = require("../lib/services/FizzBuzzService")

describe("Unit test for FizzBuzzServce class", () => {
  test('Test Fizz', () => {
    var explorer = {name: "Explorer", score: 3}
    const fizzExplorer = FizzBuzzService.applyValidationInExplorer(explorer);    
    expect(explorer.trick).toBe("Fizz");    
  });

  test('Test Buzz', () => {
    var explorer = {name: "Explorer", score: 5}
    const fizzExplorer = FizzBuzzService.applyValidationInExplorer(explorer);    
    expect(explorer.trick).toBe("Buzz");    
  });

  test('Test FizzBuzz', () => {
    var explorer = {name: "Explorer", score: 15}
    const fizzExplorer = FizzBuzzService.applyValidationInExplorer(explorer);    
    expect(explorer.trick).toBe("FizzBuzz");    
  });

  test('Test score', () => {
    var explorer = {name: "Explorer", score: 22}
    const fizzExplorer = FizzBuzzService.applyValidationInExplorer(explorer);    
    expect(explorer.trick).toBe(22); 
  });
})