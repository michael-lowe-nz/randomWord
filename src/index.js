
var word = document.getElementById('word')
var background = document.querySelector('body')

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function getRandomColorPairing() {
  return colorCombinations[Math.floor(Math.random() * colorCombinations.length)]
}

function getRandomWord(level = 1) {
  var words = {
    0: ['tractor', 'plactor'],
    1: ["able","above","afraid","afternoon","again","age","air","airplane","almost","alone","along","already","also","always","animal","another","anything","around","art","aunt","balloon","bark","barn","basket","beach","bear","because","become","began","begin","behind","believe","below","belt","better","birthday","body","bones","born","bought","bread","bright","broke","brought","busy","cabin","cage","camp","can't","care","carry","catch","cattle","cave","children*","class","close*","cloth","coal","color","corner","cotton","cover","dark","desert","didn't","dinner","dishes","does","done","don't","dragon","draw","dream","drink","early","earth","east","eight","","even","ever","every","everyone","everything","eyes","face","family","feeling","felt","few","fight","fishing","flower","flying","follow","forest","forgot","form","found","fourth","free","Friday","friend","front","getting","given","grandmother","great","grew","ground","guess","hair","half","having","head","heard","he's","heat","hello","high","himself","hour","hundred","hurry","hurt","I'd","I'll","I'm","inches","isn't","it's","I've","kept","kids","kind","kitten","knew","knife","lady","large","largest","later","learn","leave","let's","letter","life","list","living","lovely","loving","lunch","mail","making","maybe","mean","merry","might","","mind","money","month","morning","mouse","mouth","Mr.","Mrs.","Ms.","music","near","nearly","never","news","noise","nothing","number","o'clock","often","oil","once","orange","order","own","pair","paint","paper","party","pass","past","penny","people","person","picture","place","plan","plane","please","pocket","point","poor","race","reach","reading","ready","real","rich","right","river","rocket","rode","round","rule","running","salt","says","sending","sent","seventh","sew","shall","short","shot","should","sight","sister","sitting","sixth","sled","smoke","soap","someone","something","sometime","song","sorry","sound","south","space","","spelling","spent","sport","spring","stairs","stand","state","step","stick","stood","stopped","stove","street","strong","study","such","sugar","summer","Sunday","supper","table","taken","taking","talking","teacher","team","teeth","tenth","that's","their","these","thinking","third","those","thought","throw","tonight","trade","trick","trip","trying","turn","twelve","twenty","uncle","under","upon","wagon","wait","walking","wasn't","watch","water","weather","we're","west","wheat","where","which","wife","wild","win","window","winter","without","woman","won","won't","wool","word","working","world","would","write","wrong","yard","year","yesterday",
      "you're"]
  }
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
  renderWord(newWord, colorPairing[randomBinary]);
  renderBackground(colorPairing[complementBinary])
}

function renderWord(str, color) {
  word.innerHTML = str
  word.style.color = color
}

function renderBackground(color) {
  background.style.backgroundColor = color
}

document.getElementById('newWord').addEventListener('click', handleNewWord)