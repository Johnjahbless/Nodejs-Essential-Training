

//process.stdout.write("Hello \n \n")

const questions = [
    "What is your name",
    "How old are you?",
    "Where are you from"
]

const answers = [];

const ask = (i = 0) => {
    process.stdout.write(`\n \n \n ${questions[i]}`);
    process.stdout.write(" > ");
}
ask();

process.stdin.on("data", (data) => {
    answers.push(data.toString().trim());

    answers.length < questions.length? ask(answers.length) : process.exit();
})

process.on("exit", data => {
    process.stdout.write("\n\n\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]} You can finish writing ${answers[2]} later`)
})


// const grab = (flag) => {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1;
//     return process.argv[indexAfterFlag];
// }

// let greeting = grab("--greeting");
// let user = grab("--user");

// console.log(greeting);
// console.log(user);