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

    update_word();
}

function update_word() {
    show_answer();
    // change word definition
    document.querySelector('.js-word-definition').innerHTML = `${wordDict[word_idex].definition}`;
}

function show_answer() {
    document.querySelector('.js-answer').innerHTML = `${wordDict[word_idex].word}`;
}

function check_answer() {
    let html = '';
    const inputElement = document.querySelector('.js-word-input');
    const input_word = inputElement.value;

    console.log(typeof input_word);

    for(let i=0;i<input_word.length;i++){
        console.log(i);
        if(i < wordDict[word_idex].word.length){
            console.log('in');
            if(input_word[i] === wordDict[word_idex].word[i]){
                html += `<span style="color: green">${input_word[i]}</span>`;
                console.log('same');
                continue;
            }
        }
        
        let is_have = 0;

        for(let j=0;j<wordDict[word_idex].word.length;j++){
            console.log('check have');
            if(input_word[i] === wordDict[word_idex].word[j]){
                html += `<span style="color: blue">${input_word[i]}</span>`;
                console.log('have');
                is_have = 1;
                continue;
            }
        }
        
        if(is_have === 0) html += `${input_word[i]}`;
    }

    console.log('debug');

    document.querySelector('.js-result').innerHTML = html;
}

document.querySelector('.js-random-word').addEventListener('click' , () => {
    get_word();
    console.log(word_idex , wordDict[word_idex]);
});

document.querySelector('.js-submit-button').addEventListener('click' , () => {
    console.log('result function');
    check_answer();
});