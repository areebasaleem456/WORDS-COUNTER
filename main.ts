#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.cyanBright.bold("\n\t\tCode With Areeba - WORDS COUNTER -"))
console.log("=".repeat(75));

let answers=await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a sentence to count words:"
    }
])
let words=answers.sentence.trim().split(" ")

console.log(words)

console.log(`Your words count are: ${words.length}`)

console.log("=".repeat(75));
