#SPACEMAN

This game a basically a game of hangman. First, after starting the game, you select the level of difficulty. This will randomly select a word from that level and display the appropriate amount of empty slots for the wprd above the word box. Your goal is to determine which word was picked by guessing the letters inside. If the word contains the letter picked, it will display in the empty slots. However, if the letter picked does not match any of the letters in the word, that letter will be displayed in the WRONG CHOICES section. You get 4 chances to guess the word or you lose the game. you win when you guessed the correct word, and you are rewared with an illustarted clip from Workahlics by yours truly. 

[play it here](https://amayorga7904.github.io/spaceman_project/)

###FAVORITE FUNCTION 

```js

function getKeyCode(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (currentWord.includes(e.key)) {
            currentWord.forEach((letter, i) => {
                if(letter === e.key) {
                    openSpace.querySelectorAll('li')[i].innerText = letter.toUpperCase()
                }
            })
        }
    }
}
```

###BIGGEST CHALLENGE

I had a hard time with the keys in general. I had to find out which key was pressed, then see if they matched the letters in the word, display the letter in the right spot on the screen or place the wrong letter in a different part of the screen. Once this was figured out, the rest was not so bad. 

###KEY TAKEAWAY

Building a detailed pseudocode comes a long way. Although mine missed a few pieces, it made the coding processes fairly simple, almost like a code-along. I was able to code the rest of the game when I was stuck, and go back to it later.

#TECHNOLOGIES USED 
