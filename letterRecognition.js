let character = 'l';
let userGuesses = ['cold', 'fold', 'bath','','','']
let solution = 'load';

const getStatus = (character) => {  
    if (!userGuesses.toString().split('').includes(character)) {
        return 'uneval';
    }
    if (!solution.split('').includes(character)) {          
        return 'absent';  
    }
    for (let i = 0; i < userGuesses.length; i++) {
        for (let j = 0; j < userGuesses[i].split('').length; j++) {
            if (character === userGuesses[i].split('')[j] && character === solution.split('')[j]) {
                return 'correct';
            }
        }
    }
    return 'present';
}

console.log(getStatus(character));