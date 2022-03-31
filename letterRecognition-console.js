let character = 'o';
let userGuesses = ['cold', 'fold', 'bath','','','']
let solution = 'load';

const getStatus = (character) => {
    let evaluation = 'uneval'
    let solutionArr = solution.split('')

    console.log(character+' '+evaluation+' '+userGuesses+' '+solutionArr);
    
    if (userGuesses.toString().split('').includes(character)) {
        console.log('Correct or present or absent');
        
        
        if (solutionArr.includes(character)) {
            console.log('correct or present');
            
            for (let i = 0; i < userGuesses.length; i++) {

                let guess = userGuesses[i].split('');

                for (let j = 0; j < guess.length; j++) {
                    console.log(j);

                    if (character === guess[j] && character === solutionArr[j]) {
                        console.log('correct '+evaluation+' '+character+' '+guess[j]+' '+solutionArr[j])
                        evaluation = 'correct';
                    }
                    else if (evaluation !== 'correct') {
                        console.log('present '+evaluation+' '+character+' '+guess[j]+' '+solutionArr[j])
                        evaluation = 'present';
                    }
                }
            }
            console.log(evaluation+' '+character);
            return evaluation;
        }
        else {
            evaluation = 'absent';
        }
    }
    console.log(evaluation+' '+character)
    return evaluation;
}

console.log(getStatus(character));