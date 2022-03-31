let character = 'o';
let userGuesses = ['cold', 'fold', 'bath','','','']
let solution = 'load';

const getStatus = (character) => {
    let evaluation = 'uneval'
    let solutionArr = solution.split('')
    
    if (userGuesses.toString().split('').includes(character)) {    
        if (solutionArr.includes(character)) {
            for (let i = 0; i < userGuesses.length; i++) {
                let guess = userGuesses[i].split('');
                for (let j = 0; j < guess.length; j++) {
                    if (character === guess[j] && character === solutionArr[j]) {
                        evaluation = 'correct';
                    } else if (evaluation !== 'correct') {
                        evaluation = 'present';
                    }
                }
            } return evaluation;
        }
        else {
            evaluation = 'absent';
        }
    } return evaluation;
}

console.log(getStatus(character));