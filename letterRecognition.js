let key = 'l';
let evaluation = 'uneval';
let userGuess = 'cold';
let gameSolution = 'load';

const getStatus = (key, evaluation, userGuess, gameSolution) => {
    let guess = userGuess.split('');
    let solution = gameSolution.split('')
    if (guess.includes(key)) {
        if (solution.includes(key)) {
           for (let i = 0; i < guess.length; i++) {
                if (key === guess[i] && key === solution[i]) {
                    evaluation = 'correct';
                } else if (evaluation !== 'correct') {
                    evaluation = 'present';
                }
            } return evaluation;
        } else {
            evaluation = 'absent';
        }
    } return evaluation;
}

console.log(evaluation);
evaluation = (getStatus(key, evaluation, userGuess, gameSolution));
console.log(evaluation);