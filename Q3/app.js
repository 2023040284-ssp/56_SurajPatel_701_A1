// app.js

const readline = require("readline");
const chatbot = require("./chatbot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===================================");
console.log(" College Admission Chatbot");
console.log("===================================");
console.log("Ask about:");
console.log("- admission");
console.log("- fees");
console.log("- courses");
console.log("- hostel");
console.log("- library");
console.log("- placement");
console.log("- contact");
console.log("Type 'exit' to quit.\n");

function askQuestion() {

    rl.question("You: ", (input) => {

        const reply = chatbot.getResponse(input);

        console.log("Bot:", reply);

        if (input.toLowerCase() === "exit") {
            rl.close();
        } else {
            askQuestion();
        }
    });

}

askQuestion();