`myprompt`
==========

A synchronous prompt function for Node, in the tradition for `prompt()` in the browser.

## Install

`npm install myprompt`

## Usage

```js
var prompt = require('./index')

var name = prompt('What\'s your name?')

console.log('Hello, ' + name + '!')
var age = Number(prompt('How old are you?'))
console.log('Next year, you\'ll be ' + (age + 1) + ' years old!')
```