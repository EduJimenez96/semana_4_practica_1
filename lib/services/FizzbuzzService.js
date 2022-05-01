class FizzbuzzService {
  static applyValidationInExplorer(explorer) {

    if (explorer.score % 3 == 0 && explorer.score % 5 == 0) {
      explorer.trick = "FizzBuzz";
    } else if (explorer.score % 3 == 0) {
      explorer.trick = "Fizz";
    } else if (explorer.score % 5 == 0) {
      explorer.trick = "Buzz";
    } else {
      explorer.trick = explorer.score;
    }

    return explorer;
  }
}

module.exports = FizzbuzzService;
