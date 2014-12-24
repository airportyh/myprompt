`myprompt`
==========

A synchronous prompt function for Node, in the tradition of `prompt()` in the browser. Based on [sync-prompt](https://github.com/shovon/sync-prompt).

## Install

`npm install myprompt`

## Usage

```js
var prompt = require('myprompt')

var name = prompt('What\'s your name?')

console.log('Hello, ' + name + '!')
var age = Number(prompt('How old are you?'))
console.log('Next year, you\'ll be ' + (age + 1) + ' years old!')
```