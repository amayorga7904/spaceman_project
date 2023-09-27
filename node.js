



const NO_LIFE = 0
const INITIAL_SCORE = 0
const WINNING_SCORE = 1
const INITIAL_LIVES = 4
const SCORE_ID = 'score'
const LIVES_ID = 'lives'
const HINT_ID = 'hint-here'
const DIRECTIONS_ID = 'directions'
const OPEN_SPACE_ID = 'open-space'
const GAME_BOARD_ID = 'game-board'
const START_BUTTON_ID = 'start-button'
const EASY_BUTTON_ID = 'easy-button'
const NORMAL_BUTTON_ID = 'normal-button'
const HRAD_BUTTON_ID = 'hard-button'
const HINT_BUTTON_ID = 'hint-button'
const HIDDEN_WORD_ID = 'hidden-word'
const WRONG_CHOICES_ID = 'wrong-choices'
const TITLE_ID = 'title'

const easyWordList = ['fish', 'dinner', 'cat']
const easyWordListHints = ['a limbless cold-blooded vertebrate animal with gills and fins and living wholly in water', 'the main meal of the day', 'a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws']
const normalWordList = ['dictionary', 'catastrophe', 'humorous']
const normalWordListHints = ['a book or electronic resource that lists the words of a language and gives their meaning', 'an event causing great and often sudden damage or suffering', 'causing lighthearted laughter and amusement']
const hardWord = 'epithelialization'
const hardWordHint = 'a process of covering denuded epithelial surface'


const easyWordIndex = Math.floor(Math.random() * easyWordList.length)
const easyWord = easyWordList[easyWordIndex]
const easyHint = easyWordListHints[easyWordIndex]
const easyWordArray = easyWord.split('')

const normalWordIndex = Math.floor(Math.random() * normalWordList.length)
const normalWord = normalWordList[normalWordIndex]
const normalHint = normalWordListHints[normalWordIndex]
const normalWordArray = normalWord.split('')

const hardWordArray = hardWord.split('')
const hardHint = hardWordHint


let currentWord
let score
let lives
let wrongChoiceCount


const enterText = document.querySelector('.directions')
const directions = document.getElementById(DIRECTIONS_ID)
const openSpace = document.getElementById(OPEN_SPACE_ID)
const startButton = document.getElementById(START_BUTTON_ID)
const gameBoard = document.getElementById(GAME_BOARD_ID)
const scoreDisplay = document.getElementById(SCORE_ID)
const livesDisplay = document.getElementById(LIVES_ID)
const wrongChoice = document.getElementById(WRONG_CHOICES_ID)
const hiddenWord = document.getElementById(HIDDEN_WORD_ID)
const easyButton = document.getElementById(EASY_BUTTON_ID)
const normalButton = document.getElementById(NORMAL_BUTTON_ID)
const hardButton = document.getElementById(HRAD_BUTTON_ID)
const hintButton = document.getElementById(HINT_BUTTON_ID)
const title = document.getElementById(TITLE_ID)
const hint = document.getElementById(HINT_ID)


startButton.addEventListener('click', initializeGame)
easyButton.addEventListener('click', getEasyWordList)
normalButton.addEventListener('click', getNormalWordList)
hardButton.addEventListener('click', getHardWord)
hintButton.addEventListener('click', getHint)
hiddenWord.addEventListener('keydown', getKeyCode)


easyButton.disabled = true
normalButton.disabled = true
hardButton.disabled = true
hintButton.disabled = true
hint.style.display = 'none'
enterText.style.display = 'none'
directions.style.display = 'none'
easyButton.style.display = 'none'
normalButton.style.display = 'none'
hardButton.style.display = 'none'
hintButton.style.display = 'none'
title.style.display = 'none'
livesDisplay.style.display = 'none'
scoreDisplay.style.display = 'none'
hiddenWord.style.display = 'none'
gameBoard.style.backgroundImage = background1
myAudio.volume = 0.5


function initializeGame() {
    console.log('hello')
    score = INITIAL_SCORE
    lives = INITIAL_LIVES
    startButton.disabled = true
    easyButton.disabled = false
    normalButton.disabled = false
    hardButton.disabled = false
    startButton.style.display = 'none'
    enterText.style.display = 'block'
    hiddenWord.style.display = 'block'
    easyButton.style.display = 'block'
    normalButton.style.display = 'block'
    hardButton.style.display = 'block'
    hintButton.style.display = 'block'
    title.style.display = 'block'
    hiddenWord.style.display = 'block'
    livesDisplay.style.display = 'block'
    scoreDisplay.style.display = 'block'
    directions.style.display = 'block'
    hint.style.display = 'block'
    gameBoard.style.backgroundImage = background2
    wrongChoiceCount = ''
    title.innerText = 'SPACEMAN'
    myAudio.pause()
    myAudio.currentTime = 0
    render()
}


function render(){
    scoreDisplay.innerText = `SCORE: ${score}`
    livesDisplay.innerText = `LIVES: ${lives}`
    wrongChoice.innerText = `WRONG CHOICES: ${wrongChoiceCount}`
}


function getEasyWordList() {
    openSpace.innerHTML = easyWordArray.map(() => `<li id="letter">&nbsp;</li>`).join('')
    currentWord = easyWordArray
    hintButton.disabled = false
}

function getNormalWordList() {
    openSpace.innerHTML = normalWordArray.map(() => `<li id="letter">&nbsp;</li>`).join('')
    currentWord = normalWordArray
    hintButton.disabled = false
}

function getHardWord() {
    openSpace.innerHTML = hardWordArray.map(() => `<li id="letter">&nbsp;</li>`).join('')
    currentWord = hardWordArray
    hintButton.disabled = false
}


function resetWord() {
    openSpace.innerText = ''
}


function isWordCompleted() {
    const wordDisplay = Array.from(openSpace.querySelectorAll('li')).map(li => li.innerText).join('')
    return wordDisplay === currentWord.join('').toUpperCase()
}


function getKeyCode(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (currentWord.includes(e.key)) {
            currentWord.forEach((letter, i) => {
                if(letter === e.key) {
                    openSpace.querySelectorAll('li')[i].innerText = letter.toUpperCase()
                }
            })
             if (isWordCompleted()) {
                score++
                setTimeout(() => {resetWord()}, 1000)
             }
        } else {
            wrongChoiceCount += `${e.key.toUpperCase()}, `
            gameBoard.style.backgroundImage = background3
            lives--
            switch (lives) {
                case 2:
                gameBoard.style.backgroundImage = background4;
                break;
                case 1:
                gameBoard.style.backgroundImage = background5;
                break;
                case 0:
                gameBoard.style.backgroundImage = background6;
                break;
                default:
                break;
            }
        }
    } else {
        hint.innerText = 'ENTER A LETTER!'
    }
    e.preventDefault()
    render()
    determineWinner()  
}
  

function getHint() {
    if(currentWord === easyWordArray) {
        hint.innerText = easyHint
    } else if (currentWord === normalWordArray) {
        hint.innerText = normalHint
    } else {
        hint.innerText = hardHint
    }
}

function determineWinner() {
    if (score >= WINNING_SCORE) {
        gameOver(true)
    }
    else if (lives <= NO_LIFE) {
        gameOver(false)
    } else {
        render()
    }
}


function gameOver(winner) {
    if (winner) {
    scoreDisplay.innerText = 'Congrats! You Won!'
    myAudio.play()


    playPic1()


    // playPic2()
    // playPic3()
    // playPic4()
    // playPic5()
    // playPic6()
    // playPic7()
    // playPic8()
    // playPic9()
    // playPic10()
    // playPic11()
    // playPic12()
    // playPic13()
    // playPic14()
    // playPic15()
    // playPic16()
    // playPic17()
    // playPic18()
    // playPic19()
    // playPic20()
    // playPic21()
    // playPic22()
    } else {
    scoreDisplay.innerText = 'Congrats! You lost!'
    }
    startButton.innerText = 'Replay'
    startButton.style.display = 'block'
    startButton.disabled = false
    score = INITIAL_SCORE
    lives = INITIAL_LIVES    
    openSpace.innerText = ''
}







