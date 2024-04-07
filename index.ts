#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
let currency:any ={
  USD : 1,
  EUR : 0.91,
  GBP : 0.76,
  INR: 74.75,
  PKR: 280
}

let user = await inquirer.prompt([{
   name: "form",
   type: "list",
   message : "Select your currency",
   choices: ["USD","EUR","GBP" ,"INR","PKR"]
},
{
   name: "to",
   type: "list",
   message : "Select the currency that you want to change in ",
   choices: ["USD","EUR","GBP" ,"INR","PKR"]
},
{
   name: "amount",
   type: "input",
   message: "Enter your amount",
}

])
let fromcurrency:any = currency[user.form];
let tocurrency:any = currency[user.to];
let amount = user.amount
let base = amount/fromcurrency
let total = base * tocurrency
let final = Math.floor(total)
console.log(chalk.green(final+ " " +"is your total amount"))
