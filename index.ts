#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed("\n \t Welcome to the ATM Machine \n"));
let currentBalance = 30000; //Dollar
let myPin = 1020

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your 4 digit code",
        type: "number",
    }
]);

if (pinAnswer.pin === myPin) {
    console.log(chalk.bgBlueBright("correct pin code!!!"));
    let operationAns = await  inquirer.prompt([
        {
    name: "operation",
    message: "Please select option",
    type: "list",
    choices: ["withdraw", "check balance", "fast cash", "exit"]
        }
    ]);

    if (operationAns.operation === "withdraw") {
let amountAns = await inquirer.prompt([
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
])

if(amountAns.amount > currentBalance) {
console.log(chalk.blueBright(`Insufficient balance`));
}
else{
currentBalance -= amountAns.amount;
console.log(chalk.bgGray(`Your Remaining Balance is: ${currentBalance}`));
}
} else if (operationAns.operation === "check balance") {
console.log(chalk.bgGreen(`Your Current Balance is: ${currentBalance}`));
 }

 else if (operationAns.operation === "fast cash"){
    let fastcashAns = await inquirer.prompt([
        {
        name: "fastcash",
        message: "Select the amount which you withdrawal",
        type: "list",
        choices: ["1000", "2000", "5000", "10000", "50000"]
        }
    ]);
    if(fastcashAns.fastcash > currentBalance) {
        console.log(chalk.blueBright(`Insufficient balance`));
        }
        else{
        currentBalance -= fastcashAns.fastcash;
        console.log(chalk.bgGray(`Your Remaining Balance is: ${currentBalance}`));
        }
      }  else if (operationAns.operation === "exit") {
        let exits =await inquirer.prompt(
        {
            name: "exit",
            message: "Are you sure you want to exit?",
            type: "list",
            choices: ["yes", "no"]
        })
        if(exits.exit === "yes"){}
        

        }
    
}
 else{
    console.log(chalk.bgBlackBright("Wrong pin number!!!"));
}
console.log(chalk.bgYellowBright("Thank You for using the ATM Machine!"));