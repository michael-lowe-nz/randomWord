import words from './constants/words'
import colorCombinations from './constants/colorCombinations'
import colorContrast from 'font-color-contrast'

var word = document.getElementById('word')
var background = document.querySelector('.background')

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function getRandomColorPairing() {
  return colorCombinations[Math.floor(Math.random() * colorCombinations.length)]
}

function getRandomWord(level = 1) {
  var outputWords = words[level];
  return outputWords[randomNumber(0, outputWords.length - 1)]
}

function handleNewWord() {
  var newWord = getRandomWord()
  var colorPairing = getRandomColorPairing()
  var randomBinary = Math.round(Math.random())
  var complementBinary
  if (randomBinary === 0) complementBinary = 1
  else {
    complementBinary = 0
  }
  renderWord(newWord, colorContrast(colorPairing[randomBinary]));
  renderBackground(colorPairing[randomBinary])
}

function renderWord(str, color) {
  word.innerHTML = str
  word.style = 'transform: translateX(' + randomNumber(0, 40) + 'vw) translateY(' + randomNumber(0, 40) + 'vh)'
  word.style.fontSize = randomNumber(20, 45) + 'px'
  word.style.color = color
}

function renderBackground(color) {
  background.style.backgroundColor = color
}

document.getElementById('newWord').addEventListener('click', handleNewWord)