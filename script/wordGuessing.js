import { wordDict } from "../data/dict.js";

wordDict.forEach((value , index) => {
    console.log(index , value);
});

let word_idex = 0;

function get_word() {
    const random_number = Math.random();
    const number = Math.floor(random_number * 100);
    const index = number % wordDict.length;

    word_idex = index;
}

function show_answer() {
    document.querySelector('.js-answer').innerHTML = `${wordDict[word_idex].word}`;
}

document.querySelector('.js-random-word').addEventListener('click' , () => {
    get_word();
    console.log(word_idex);
    show_answer();
});