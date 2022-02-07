const {
    yellow,
    green
} = require("colorette");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(yellow(`Send the text of the characters you want to count here ===> `), res => {
    console.log(green(`This text has ${res.length} characters in it`));
    readline.close()
});