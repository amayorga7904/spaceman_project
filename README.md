# SPACEMAN

This game a basically a game of hangman. First, after starting the game, you select the level of difficulty. This will randomly select a word from that level and display the appropriate amount of empty slots for the wprd above the word box. Your goal is to determine which word was picked by guessing the letters inside. If the word contains the letter picked, it will display in the empty slots. However, if the letter picked does not match any of the letters in the word, that letter will be displayed in the WRONG CHOICES section. You get 4 chances to guess the word or you lose the game. you win when you guessed the correct word, and you are rewared with an illustarted clip from Workahlics by yours truly. 

[play it here](https://amayorga7904.github.io/spaceman_project/)

### FAVORITE FUNCTION 

```js
function getKeyCode(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (currentWord.includes(e.key)) {
            currentWord.forEach(function(letter, i) {
                if (letter === e.key) {
                    openSpace.querySelectorAll('li')[i].innerText = letter.toUpperCase()
                }
            })
```

### BIGGEST CHALLENGE

I had a hard time with the keys in general. I had to find out which key was pressed, then see if they matched the letters in the word, display the letter in the right spot on the screen or place the wrong letter in a different part of the screen. Once this was figured out, the rest was not so bad. 

#### KEY TAKEAWAY

Building a detailed pseudocode comes a long way. Although mine missed a few pieces, it made the coding processes fairly simple, almost like a code-along. I was able to code the rest of the game when I was stuck, and go back to it later.

## TECHNOLOGIES USED 
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![GitHub](https://img.shields.io/badge/GitHub-Version%20Control-lightgrey)](https://github.com/)
[![Slack](https://img.shields.io/badge/Slack-Communication-brightgreen)](https://slack.com/)
[![Dev.to](https://img.shields.io/badge/Dev.to-Community-orange)](https://dev.to/)
![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)
![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)
![Apple Music](https://img.shields.io/badge/apple%20music-F34E68?style=for-the-badge&logo=apple%20music&logoColor=white)


## GAMEPLAY

![STARTSCREEN](screenshots/Screenshot%202023-09-28%20at%209.53.14%20AM.png)
![HOMESCREEN](screenshots/Screenshot%202023-09-28%20at%209.52.50%20AM.png)
![GAMEPLAY](screenshots/Screenshot%202023-09-28%20at%209.54.42%20AM.png)
![LOSER-SCREEN](screenshots/Screenshot%202023-09-28%20at%203.27.47%20PM%20(2).png)
![ANOTHER-GAMEPLAY](screenshots/Screenshot%202023-09-28%20at%209.56.07%20AM.png)
![WINNER-SCREEN](screenshots/Screenshot%202023-09-28%20at%209.56.24%20AM.png)


## NEXT STEPS

* I want to be able to allow the player to press on the difficulty button multiple times before refreshing game, and be able to get different words and there associated hints

* The stop motion could use more frames in between to make it more fluid 

* To add more lives, I need to add more illustrations of the Spaceman

* Add sound to buttons