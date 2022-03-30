const getStatus = (key, evals, userGuess, gameSolution) => {
    let guess = userGuess.split('');
    let solution = gameSolution.split('')

    console.log(key+' '+evals+' '+guess+' '+solution);
    
    if (guess.includes(key)) {
        console.log('Correct or present or absent');
        
        
        if (solution.includes(key)) {
            console.log('correct or present');
            
            
            for (let i = 0; i < guess.length; i++) {
                console.log(i);
                if (key === guess[i] && key === solution[i]) {
                    console.log('correct '+evals+' '+key+' '+guess[i]+' '+solution[i])
                    evals = 'correct';
                }
                else if (evals !== 'correct') {
                    console.log('present '+evals+' '+key+' '+guess[i]+' '+solution[i])
                    evals = 'present';
                }
            }
            console.log(evals+' '+key);
            return evals;
        }
        else {
            evals = 'absent';
        }
    }
    console.log(evals+' '+key)
    return evals;
}

let key = 'a';
let evals = 'present';
let userGuess = 'oold';
let gameSolution = 'load';


console.log(evals);
evals = (getStatus(key, evals, userGuess, gameSolution));
console.log(evals);