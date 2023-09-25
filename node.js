







//DEFINE CONSTANTS
const HINT_BOX_ID = 'hint-box'

const DIRECTIONS_ID = 'directions'

const easyWordList = ['fish', 'dinner', 'cat']

const easyWordListHints = ['a limbless cold-blooded vertebrate animal with gills and fins and living wholly in water', 'the main meal of the day', 'a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws']

const normalWordList = ['dictionary', 'catastrophe', 'humorous']

const normalWordListHints = ['a book or electronic resource that lists the words of a language and gives their meaning', 'an event causing great and often sudden damage or suffering', 'causing lighthearted laughter and amusement']

const hardWord = 'epithelialization'

const hardWordHint = 'a process of covering denuded epithelial surface'

const OPEN_SPACE_ID = 'open-space'

const NO_LIFE = 0
// Initial player's score
const INITIAL_SCORE = 0
// Score needed to win
const WINNING_SCORE = 2
// Initial count of lives set to 3
const INITIAL_LIVES = 3
// ID of the game board element
const GAME_BOARD_ID = 'game-board'
// ID of the start button element
const START_BUTTON_ID = 'start-button'
// ID of the easy button element
const EASY_BUTTON_ID = 'easy-button'
// ID of the normal button element
const NORMAL_BUTTON_ID = 'normal-button'
// ID of the hard button element
const HRAD_BUTTON_ID = 'hard-button'
// ID of the hint button element
const HINT_BUTTON_ID = 'hint-button'
// ID of the score display element
const SCORE_ID = 'score'
// ID of the lives display element
const LIVES_ID = 'lives'
//ID of the hidden word
const HIDDEN_WORD_ID = 'hidden-word'
//ID of wrong choices
const WRONG_CHOICES_ID = 'wrong-choices'

const TITLE_ID = 'title'

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
// ID of background images

// const background1 = 

// const background2 = 
// const background4 = 
// const background5 = 
// const background3 = 

// const wrongLetters = 'abcdegjklmnopqrtuvwxyz'
///////Hidden word string
//////wrong choice array

// .include()pvt.key ---------
// string into array .split()-----


//DEFINE STATE VARIABLES
let currentWord
// Player's score
let score
// Count of lives
let lives
// Wrong choice count
let wrongChoiceCount
// Background images
let currentBackgroundImage
//////Chosen letter display
let playerChoice 


//CACHE ELEMENTS
const enterText = document.querySelector('.directions')

const directions = document.getElementById(DIRECTIONS_ID)

const openSpace = document.getElementById(OPEN_SPACE_ID)

// Start button element
const startButton = document.getElementById(START_BUTTON_ID)
// Game board element
const gameBoard = document.getElementById(GAME_BOARD_ID)
// Score display element
const scoreDisplay = document.getElementById(SCORE_ID)
// Lives display element
const livesDisplay = document.getElementById(LIVES_ID)
// Wrong Choices display element
const wrongChoice = document.getElementById(WRONG_CHOICES_ID)
//////have array of game word
const hiddenWord = document.getElementById(HIDDEN_WORD_ID)

const easyButton = document.getElementById(EASY_BUTTON_ID)

const normalButton = document.getElementById(NORMAL_BUTTON_ID)

const hardButton = document.getElementById(HRAD_BUTTON_ID)

const hintButton = document.getElementById(HINT_BUTTON_ID)
// hiddenWord.style.display = 'none'
const title = document.getElementById(TITLE_ID)

gameBoard.style.backgroundImage = background1

// hiddenWord.value = ''

//ADD EVENT LISTENERS

// Event listener for the start button
startButton.addEventListener('click', initializeGame)
// Event listener for the Easy button
easyButton.addEventListener('click', getEasyWordList)
// Event listener for the Normal button
normalButton.addEventListener('click', getNormalWordList)
// Event listener for the Hard button
hardButton.addEventListener('click', getHardWord)
// Event listener for the Hint button
hintButton.addEventListener('click', getHint)
// Event listener for the key presses
hiddenWord.addEventListener('keydown', getKeyCode)

const hintBox = document.getElementById(HINT_BOX_ID)

// Event listener for the gameboard
enterText.style.display = 'none'

directions.style.display = 'none'

easyButton.disabled = true

normalButton.disabled = true

hardButton.disabled = true

hintButton.disabled = true

easyButton.style.display = 'none'

normalButton.style.display = 'none'

hardButton.style.display = 'none'

hintButton.style.display = 'none'

title.style.display = 'none'

livesDisplay.style.display = 'none'

scoreDisplay.style.display = 'none'

hiddenWord.style.display = 'none'
//INVOKE INIT FUNCTIONS
function initializeGame() {
enterText.style.display = 'block'

hiddenWord.style.display = 'block'
 // Reset the score to the initial value
score = INITIAL_SCORE
 // Reset lives to the initial value
lives = INITIAL_LIVES
 // Disable the start button to prevent multiple game starts
startButton.disabled = true

easyButton.disabled = false

normalButton.disabled = false

hardButton.disabled = false

hintButton.disabled = false
 // Hide the start button
startButton.style.display = 'none'

easyButton.style.display = 'block'

normalButton.style.display = 'block'

hardButton.style.display = 'block'

hintButton.style.display = 'block'

title.style.display = 'block'

hiddenWord.style.display = 'block'

livesDisplay.style.display = 'block'

scoreDisplay.style.display = 'block'

directions.style.display = 'block'
 // Clear the game board
gameBoard.style.backgroundImage = background2

 // Render the game state onto the DOM
 wrongChoiceCount = ''

render()

}


// Render the game state
function render(){
    // Set the score display to the current score
    scoreDisplay.innerText = `SCORE: ${score}`

    // Set the lives display to the current lives
    livesDisplay.innerText = `LIVES: ${lives}`

    wrongChoice.innerText = `WRONG CHOICES: ${wrongChoiceCount}`

    // gamePlay()
}


// let openSpaceArray = openSpace.split('')
 //////GAMEPLAY 
 ////// use split to separate hidden word into array to get index
 ////// use include to determine if key pressed is the same as new hidden word array

    
// if (currentWordArray)
//     if (playerChoice === currentWordArray.index0f('f')) {
    // console.log(currentWordArray)
    //     console.log(currentWordArray.indexOf('f'))
    // }
// console.log(currentWordArray.indexOf('i'))

    //////Display hidden word container                                                         
    ///// if user picks key from from hidden word, push into hidden word container              
    
    //////Display wrong letter selected
    /////if player choice picks wrong key of hidden word, push it in empty array of wrong choices
    

    //////Display correct letter selected
    /////if player choice includes letter from hidden word array, 
    /////display in hidden box with innerText
    
    //////Change background per wrong choice   
    
    //////Display current score
    /////if player choice picks key of hidden word, leave score as is
    
    //////Display current lives
    /////if player choice picks key of hidden word, -1 life
// determine()

 


    

function getEasyWordList() {
    openSpace.innerHTML = easyWordArray.map(() => `<li id="letter">&nbsp;</li>`).join('')
    currentWord = easyWordArray
    console.log(currentWord)
}

function getNormalWordList() {
    openSpace.innerHTML = normalWordArray.map(() => `<li id="letter">&nbsp;</li>`).join('')
    currentWord = normalWordArray
    console.log(currentWord)
}

function getHardWord() {
    openSpace.innerHTML = hardWordArray.map(() => `<li id="letter">&nbsp;</li>`).join('')
    currentWord = hardWordArray
    console.log(currentWord)
}

// function getKeyCode(e) {
//     if (e.keyCode >= 65 && e.keyCode <= 90) {
//         if (easyWordArray.includes(e.key)) {
//            console.log(e.key)
//         } else if (normalWordArray.includes(e.key)) {
//             console.log(e.key)
//         } else if (hardWordArray.includes(e.key)) {
            
//         }
//  }
// }

function resetWord() {
    openSpace.innerText = ''
    hintButton.innerText = 'HINT'
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
      
             console.log(e.key)
             if (isWordCompleted()) {
                score++
                resetWord()
             }
             
        } else {
            console.log('letter is not in array')
            wrongChoiceCount += `${e.key.toUpperCase()}, `
            gameBoard.style.backgroundImage = background3
            lives--
            switch (lives) {
                case 1:
                gameBoard.style.backgroundImage = background4;
                break;
                case 0:
                gameBoard.style.backgroundImage = background5;
                break;
                default:
                console.log('Error');
                break;
            }
        }
    } else {
        console.log('enter a letter')
    }
    e.preventDefault()
    render()
    determineWinner()
    // determineLoser()
}
  // if (easyWordArray.includes(e.key) || easyWordArray.includes(e.key) || easyWordArray.includes(e.key)) {

function getHint() {
    if(currentWord === easyWordArray) {
        hintButton.innerText = easyHint
        hintButton.style.width = '300px'
        hintButton.style.height = '200px'
        console.log(easyHint)
    } else if (currentWord === normalWordArray) {
        hintButton.innerText = normalHint
        // hintBox.innerContent = normalHint
        hintButton.style.width = '300px'
        hintButton.style.height = '200px'
        console.log(normalHint)
    } else {
        hintButton.innerText = hardHint
        hintButton.style.width = '300px'
        hintButton.style.height = '90px'
        // hintBox.innerContent = hardHint
        console.log(hardHint)
    }
}
// console.log(hardHint)
// function determine() {
//     if(getKeyCode) {
//         score++
//     } else {
//         lives--
//     }
// }

// function gamePlay() {

//     getEasyWordList()

//     getNormalWordList()

//     getHardWord()

//     getKeyCode()

//     // determine
// }
// const userChoice = e.key
// const index = currentWordArray.indexOf(userChoice)
// if (index !== -1) {
//     openSpace[index] = userChoice
//     hiddenWord.value = openSpace.join('')
// } else {
//     console.log('no')
// }
//     if (e.keyCode === 70) {
//         openSpaceArray[0] = 'f'

 
// console.log(openSpace)
// const deep = openSpace.split('')
// console.log(deep)
// }
    //  && e.keyCode !== 72 && e.keyCode !== 73 && e.keyCode !== 83) {
    // if (e.keyCode === 65 || e.keyCode === 66 || e.keyCode === 67 || e.keyCode === 68 || e.keyCode === 69 || e.keyCode === 71 || e.keyCode === 74 || e.keyCode === 75 || e.keyCode === 76 || e.keyCode === 77 || e.keyCode === 78 || e.keyCode === 79 || e.keyCode === 80 || e.keyCode === 81 || e.keyCode === 82 || e.keyCode === 84 || e.keyCode === 85 || e.keyCode === 86 || e.keyCode === 87 || e.keyCode === 88 || e.keyCode === 89 || e.keyCode === 90) 
//         openSpace.append(e.keyCode)
//     } else {
//         wrongChoiceCount.innerText = `${e.keyCode}`
//     }
    
// }




 //INVOKE RENDER FUNCTIONS 
 // Set the score display to the current score

 // Set the lives display to the current lives

 // Set the wrong choices display to the current wrong choices

///////Reset hidden word container
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




//WAIT FOR TRIGGERED EVENTS




//REPLAY/RESTART
function gameOver(winner) {
    if (winner) {
// Update the score display
    scoreDisplay.innerText = 'Congrats! You Won!'
} else {
    scoreDisplay.innerText = 'Congrats! You lost!'
}
// Show the start button with the text "Replay"
startButton.innerText = 'Replay'
// Show the button
startButton.style.display = 'block'
// Re-enable the start button
startButton.disabled = false
// Clear the game board
score = INITIAL_SCORE

// Clear the lives display
lives = INITIAL_LIVES    

openSpace.innerText = ''

}




//UPDATE STATE VARIABLES
// Set the score display to the current score

 // Set the lives display to the current lives

 // Set the wrong choices display to the current wrong choices





//INVOKE RENDER FUNCTION
// Set the score display to the current score

 // Set the lives display to the current lives

 // Set the wrong choices display to the current wrong choices




