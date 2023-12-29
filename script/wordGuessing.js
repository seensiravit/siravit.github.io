import { topicIndex, wordDict } from "../data/dict.js";

wordDict.forEach((value , index) => {
    console.log(index , value);
});

console.log(topicIndex)

// get topic list section
let topicList = [0];

function get_topic_list() {
    let topic_dummy = [];

    document.querySelectorAll('.js-topic-checkbox').forEach((checkbox) => {
        if(checkbox.checked) topic_dummy.push(topicIndex[checkbox.value]);
    });
    
    topic_dummy.forEach((val) => {
        console.log(val);
    });

    topicList = topic_dummy
    console.log(topicList);
}

document.querySelector('.js-go-button').addEventListener('click' , () => {
    get_topic_list();
    console.log(topicList);
});

// random word section
let topic_index = 0;

function get_topic_index() {
    const random_number = Math.random();
    const number = Math.floor(random_number * 100);
    const index = number % topicList.length;

    topic_index = topicList[index]
}

let word = wordDict[0][0];

function get_word() {
    const random_number = Math.random();
    const number = Math.floor(random_number * 100);
    const index = number % wordDict[topic_index].length;

    word = wordDict[topic_index][index];
    // console.log(word);
}

function update_word() {
    //show_answer();
    // show word definition
    document.querySelector('.js-word-definition').innerHTML = `${word.definition}`;
}

function random_word() {
    get_topic_index();
    get_word();
    update_word();

    console.log(topic_index , word);
}

document.querySelector('.js-random-word').addEventListener('click' , () => {
    random_word();
});

// get answer section
function show_answer() {
    document.querySelector('.js-answer').innerHTML = `${word.word}`;
}

function check_answer() {
    let html = '';
    const inputElement = document.querySelector('.js-word-input');
    const input_word = inputElement.value;

    for(let i=0;i<input_word.length;i++){
        //console.log(i);
        if(i < word.word.length){
            //console.log('in');
            if(input_word[i] === word.word[i]){
                html += `<span style="color: green">${input_word[i]}</span>`;
                //console.log('same');
                continue;
            }
        }
        
        let is_have = 0;

        for(let j=0;j<word.word.length;j++){
            //console.log('check have');
            if(input_word[i] === word.word[j]){
                html += `<span style="color: blue">${input_word[i]}</span>`;
                //console.log('have');
                is_have = 1;
                continue;
            }
        }
        
        if(is_have === 0) html += `${input_word[i]}`;
    }

    //console.log('debug');

    document.querySelector('.js-result').innerHTML = html;
}

document.querySelector('.js-submit-button').addEventListener('click' , () => {
    //console.log('result function');
    check_answer();
});