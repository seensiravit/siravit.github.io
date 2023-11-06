import { wordDict } from "../data/dict.js";

wordDict.forEach((value , index) => {
    console.log(index , value);
});

function get_word() {
    const random_number = Math.random();
    const number = Math.floor(random_number * 100);
    const index = number % wordDict.length;

    return index;
}
