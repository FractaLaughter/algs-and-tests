let character = 'o';
let userGuesses = ['cold', 'fold', 'bath','','','']
let solution = 'load';

const getStatus = (character) => {

    console.log(character+' '+userGuesses+' '+solution.split(''));
    
    if (userGuesses.toString().split('').includes(character)) {
        console.log('Correct or present or absent');
        
        
        if (solution.split('').includes(character)) {
            console.log('correct or present');
            
            for (let i = 0; i < userGuesses.length; i++) {

                for (let j = 0; j < userGuesses[i].split('').length; j++) {
                    console.log(j);

                    if (character === userGuesses[i].split('')[j] && character === solution.split('')[j]) {
                        console.log('correct '+character+' '+userGuesses[i].split('')[j]+' '+solution.split('')[j])
                        return 'correct';
                    }
                }
            }
            return 'present';
        }
        return 'absent';
    }
}

console.log(getStatus(character));