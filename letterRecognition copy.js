const getStatus = (key, evals, userGuess, gameSolution) => {
    let guess = userGuess.split('');
    let solution = gameSolution.split('')
    if (guess.includes(key)) {
        if (solution.includes(key)) {
           for (let i = 0; i < guess.length; i++) {
                if (key === guess[i] && key === solution[i]) {
                    evals = 'correct';
                }
                else if (evals !== 'correct') {
                    evals = 'present';
                }
            }
            return evals;
        }
        else {
            evals = 'absent';
        }
    }
    return evals;
}

let key = 'a';
let evals = 'present';
let userGuess = 'oold';
let gameSolution = 'load';


console.log(evals);
evals = (getStatus(key, evals, userGuess, gameSolution));
console.log(evals);