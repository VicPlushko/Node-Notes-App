import chalk from 'chalk'
import { getNotes } from './notes.js'

const msg = getNotes()

console.log(msg)

console.log(chalk.bold.bgGreen.white('success'))


// const add = require('./utils')
// const sum = add(4, -2)
// console.log(sum)