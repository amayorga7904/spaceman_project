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

####KEY TAKEAWAY

Building a detailed pseudocode comes a long way. Although mine missed a few pieces, it made the coding processes fairly simple, almost like a code-along. I was able to code the rest of the game when I was stuck, and go back to it later.

##TECHNOLOGIES-USED 
[GITHUB](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
[SLACK](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
[ZOOM](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)
[MAC OS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)
[DEV.TO](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white)
[HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
[CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
[JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

##GAMEPLAY

[STARTSCREEN](Screenshot 2023-09-28 at 9.53.14 AM.png)
[HOMESCREEN](Screenshot 2023-09-28 at 9.52.50 AM.png)
[GAMEPLAY](Screenshot 2023-09-28 at 9.54.42 AM.png)
[LOSER-SCREEN](Screenshot 2023-09-28 at 9.55.09 AM.png)
[ANOTHER-GAMEPLAY](Screenshot 2023-09-28 at 9.56.07 AM.png)
[WINNER-SCREEN](Screenshot 2023-09-28 at 9.56.24 AM.png)