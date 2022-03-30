let key = 'a';
let evaluation = 'present';
let userGuess = 'cold';
let gameSolution = 'load';

const getStatus = (key, evaluation, userGuess, gameSolution) => {
    let guess = userGuess.split('');
    let solution = gameSolution.split('')

    console.log(key+' '+evaluation+' '+guess+' '+solution);
    
    if (guess.includes(key)) {
        console.log('Correct or present or absent');
        
        
        if (solution.includes(key)) {
            console.log('correct or present');
            
            for (let i = 0; i < guess.length; i++) {
                console.log(i);

                if (key === guess[i] && key === solution[i]) {
                    console.log('correct '+evaluation+' '+key+' '+guess[i]+' '+solution[i])
                    evaluation = 'correct';
                }
                else if (evaluation !== 'correct') {
                    console.log('present '+evaluation+' '+key+' '+guess[i]+' '+solution[i])
                    evaluation = 'present';
                }
            }
            console.log(evaluation+' '+key);
            return evaluation;
        }
        else {
            evaluation = 'absent';
        }
    }
    console.log(evaluation+' '+key)
    return evaluation;
}

console.log(evaluation);
evaluation = (getStatus(key, evaluation, userGuess, gameSolution));
console.log(evaluation);