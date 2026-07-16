// Using Global Objects in Node.js

console.log("=== Global Objects ===");

// __filename
console.log("Current File:", __filename);

// __dirname
console.log("Current Directory:", __dirname);

 setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

 console.log("\n=== Command Line Arguments ===");

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No command line arguments provided.");
} else {
    args.forEach((arg, index) => {
        console.log(`Argument ${index + 1}: ${arg}`);
    });
}