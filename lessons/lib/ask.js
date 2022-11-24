const collectAnswers = require("./collectAnswers");


const questions = [
    "What is your name",
    "How old are you?",
    "Where are you from"
]



const answerEvents = collectAnswers(questions, (answers) => {
    console.log("Thank you for your answer!");
    console.log(answers);
    process.exit();
})

answerEvents.on("answer", (answer) => console.log(answer) )
