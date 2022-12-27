//Codewars q1
// simply returning a greeting 
function greet() {
    return 'hello world'
}

console.log(greet())

// codewars q2
// practice if if statements- if true/ false- yes or no will be the output
function bool_to_word(boolean){
    if(boolean == true){
        return "Yes"
    } else {
        return "No"
    }
}

console.log(bool_to_word(false))

//codwars q3
// incrementing a number for every vowel found in a word
function ct(sentence) {
    let amt = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (i = 0; i < sentence.length; i++){
        if (vowels.includes(sentence[i])){
            amt += 1
        }
    }
    return amt
}
console.log(ct('looping'));

//codewars q4
//taking a number and puting it into a list and then reverse order
function digitize(n) {
    let z = num => Number(num);
    arr =Array.from(String(n), z);
    return arr.reverse()
}

console.log(digitize(12356))

//JS Exercise 1

function findWords(statement, list) {
    let z = statement.split(' ')
    for (i=0; i <z.length; i++) {
       if (list.includes(z[i])){
        return `Matched dog name ${z[i]}`;
       }
    }
}

let q = 'I have a cute little dog named lassie'
let qlist = ['lassie', 'slappy', 'noodle', 'furball', 'barky']

console.log(findWords(q, qlist))

//JS Exercise 2
function replaceEvens(arr) {
    for (i=0; i< arr.length; i++){
        if (i %2 == 0){
            arr[i] = 'even index'
        }
    }
    console.log(arr)
}

console.log(replaceEvens(['Max', 'Baseball', 'Reboot', 'Goku', 'Trucks', 'Rodger']))