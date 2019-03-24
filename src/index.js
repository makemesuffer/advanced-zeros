module.exports = function getZerosCount(number, base) {
    let scaleOfNotation = base, zerosInFactorial = 0, elem = 0;
    const arrayOfSimpleNumbers = [], degreeOfSimpleNumbers = [], resultArray = [];

    if(scaleOfNotation > 0 && scaleOfNotation !== 1){
        for(let i = 2; i <= scaleOfNotation; i++){
            let count = 0;
            if(scaleOfNotation/i === 1){
                arrayOfSimpleNumbers.push(scaleOfNotation);
                degreeOfSimpleNumbers.push(1);
            } else while(scaleOfNotation % i === 0 && scaleOfNotation > 1){
                scaleOfNotation = scaleOfNotation / i;
                count++;
            }
            if(count >= 1){
                arrayOfSimpleNumbers.push(i);
                degreeOfSimpleNumbers.push(count);}
        }
    }
    for (let i = 0, len = arrayOfSimpleNumbers.length; i < len; i++){
        elem = arrayOfSimpleNumbers[i];
        for (let i = elem; number/i > 1; i *= elem){
            zerosInFactorial += Math.floor(number/i);}
        resultArray.push(zerosInFactorial);
        zerosInFactorial = 0;
    }
    for (let i = 0, len = resultArray.length; i < len ; i++){
        resultArray[i] = resultArray[i]/degreeOfSimpleNumbers[i] >> 0;
    }
    resultArray.sort(function(a, b){return a-b});

    return resultArray[0];
};