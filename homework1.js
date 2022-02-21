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

calcs(3);