let dynamicTxt = document.getElementById('dynamic-text-id');
dynamicTxt.innerText = '';
const content = [
    'Software Engineer...',
    'Frontend Developer...',
    'Formula 1 Fanatic...',
    'Tech Geek...',
    'Cooking Enthusiast...',
    'Basketball player...',
    'Human Being...',
];

let letteridx = 0;
let wordidx = 0;

function printLetters(word) {
    if (letteridx == word.length) {
        eraseWord(word);
    } else if (letteridx < word.length) {
        dynamicTxt.textContent += word.charAt(letteridx++);
        setTimeout(() => {
            printLetters(word);
        }, 100);
    }
}

function eraseWord(word) {
    if (letteridx < 0) {
        letteridx = 0;
        wordidx = ++wordidx % 7;
        printLetters(content[wordidx]);
    } else {
        dynamicTxt.textContent = word.substr(0, letteridx);
        letteridx--;
        setTimeout(() => {
            eraseWord(word);
        }, 50);
    }
}

printLetters(content[0]);
