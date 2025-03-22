// Challenge 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // Register Answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(this.answers);

    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] });
