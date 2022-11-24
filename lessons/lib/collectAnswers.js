const readline = require("readline");
const { EventEmitter } = require("events")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


module.exports = (questions, done) => {
    const answers = [];

    const emitter = new EventEmitter();

    const questionsAnswered = (answer) => {
        emitter.emit('answer', answer)
        answers.push(answer.trim());

        answers.length < questions.length? rl.question(questions[answers.length], questionsAnswered): done(answers);
 
    }
    rl.question(questions[0], questionsAnswered);
    return emitter;
}