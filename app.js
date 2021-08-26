import validator from 'validator'
import { getNotes } from './notes.js'

const msg = getNotes()

console.log(msg)

console.log(validator.isURL('www.imdb.com'))


// const add = require('./utils')
// const sum = add(4, -2)
// console.log(sum)