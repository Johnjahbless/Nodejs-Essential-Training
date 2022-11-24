const fs = require("fs");

let answerstream;

let questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
];

let answers = [];

process.stdin.once("data", data => {
  let name = data.toString().trim();
  let fileName = `./${name}.md`;
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName)
    
  }

  answerstream = fs.createWriteStream(fileName);
  answerstream.write(`Questions Answers for ${name}\n============\n`);
})
function ask(i) {
  process.stdout.write(`\n\n\n\n  ${questions[i]}`);
  process.stdout.write(`  >  `);
}

process.stdin.on("data", function (data) {
  let answer = data.toString().trim();

  answerstream.write(`Question: ${questions[answers.length]}\n`)

  answerstream.write(`Answer: ${answers}\n`, () => {
    if (answers.length < questions.length) {
      ask(answers.length);
    } else {
      process.exit();
    }
  })


  answers.push(answer);
});

process.on("exit", function () {
  answerstream.close();
  process.stdout.write("\n\n\n\n  ");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later!`
  );
  process.stdout.write("\n\n\n\n");
});

ask(answers.length);
