function squareNumber(num){
    let squared = num * num;
    console.log('The result of squaring the number '+ num +' is ' + squared);
    return squared;
}

function halfNumber(num){
    let half = num/2;
    console.log('Half of '+ num +' is '+ half);
    return half;
}

function percentOf(firstnum, secondnum){
    let percent = (firstnum/secondnum) * 100;
    console.log(firstnum +' is '+ percent +'% of '+ secondnum);
    return percent;
}

function areaOfCircle(radius){
    let area = Math.PI * (radius * radius);
    console.log('The area for a circle with radius '+ radius +' is '+ area.toFixed(2));
    return area.toFixed(2);
}

function calcs(num){
    halfNum = halfNumber(num);
    squaredNum = squareNumber(halfNum);
    area = areaOfCircle(squaredNum);
    percent = percentOf(area, squaredNum);
}

const foxArray = ['F', 'O', 'X'];
let emptyArray = ['_','_','_'];

function guessLetter(guess){
    for (i = 0; i < foxArray.length; i++){
        if (guess == foxArray[i] || guess == foxArray[i++] || guess == foxArray[i++]){
            emptyArray[i] = guess;
            for (let j = 0; j < foxArray.length; j++){
                console.log(emptyArray[j]);
            }
            console.log('Congrats you\'ve guessed the letter '+ guess +' which is in the word');
            if (emptyArray[0] == 'F' && emptyArray[1] == 'O' && emptyArray[2] == 'X'){
                console.log('Congrats you have guessed the word FOX')
            }
        }
        else{
            console.log('Sorry, the letter '+ guess +' is not in the word');
        }
    }
}

//calcs(3);
guessLetter('G');
guessLetter('Y');
guessLetter('D');
guessLetter('F');
guessLetter('B');
guessLetter('N');
guessLetter('C');
guessLetter('M');
guessLetter('O');
guessLetter('E');
guessLetter('Z');
guessLetter('X');
guessLetter('X');
guessLetter('X');
guessLetter('X');

