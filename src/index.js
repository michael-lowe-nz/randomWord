import words from './constants/words'
import colorCombinations from './constants/colorCombinations'
import colorContrast from 'font-color-contrast'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function getRandomColor() {
  return colorCombinations[Math.floor(Math.random() * colorCombinations.length)]
}

function getRandomWord(level = 1) {
  var outputWords = words[level];
  return outputWords[randomNumber(0, outputWords.length - 1)]
}

function handleNewWord() {
  var newWord = getRandomWord()
  var color = getRandomColor()
  var colorPair = [colorContrast(color), color]
  var randomBinary = Math.round(Math.random())
  var complementBinary
  if (randomBinary === 0) complementBinary = 1
  else {
    complementBinary = 0
  }
  renderWord(newWord, (colorPair[randomBinary]));
  renderBackground(colorPair[complementBinary])
}

function halfChanceGet(char) {
  if (Math.round(Math.random())) return char
  return ''
}

/**
 * View
 */
var word = document.getElementById('word')
var background = document.querySelector('.background')

function renderWord(str, color) {
  word.innerHTML = str
  var translateX = 'translateX(' + halfChanceGet('-') + randomNumber(0, 15) + 'vw)'
  var translateY = 'translateY(' + halfChanceGet('-') + randomNumber(0, 15) + 'vh)'
  word.style = 'transform: ' + translateX + ' ' + translateY
  word.style.fontSize = randomNumber(10, 25) + 'vw'
  word.style.color = color
}

function renderBackground(color) {
  background.style.backgroundColor = color
}

document.getElementById('newWord').addEventListener('click', handleNewWord)