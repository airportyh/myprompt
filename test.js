var prompt = require('./index')

var name = prompt('What\'s your name?')

console.log('Hello, ' + name + '!')
var age = Number(prompt('How old are you?'))
console.log('Next year, you\'ll be ' + (age + 1) + ' years old!')