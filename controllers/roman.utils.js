/**
 * Get the digit number of a number
 * @param {*} number the complete number
 * @param {*} digit digit i want to get 0 for units 1 for tens etc.
 * @returns 
 */
 function getdigit(number,digit) {
	return Math.floor(number / (Math.pow(10, digit)) % 10);
}

/**
 * 
 * @param {*} translate Object with the translate values beetween arabic and roman
 * @param {*} index the number i want to translate
 * @returns string representation of roman number
 */
function romanNumber(translate, index){
	return (translate[index]) ? translate[index] : splitNumbers(index);
}

/**
 * Method who translate a part of a number
 * @param {*} number 
 * @returns roman string of the given number
 */
function splitNumbers(number){
	let numberRomanValue;
	if(number > 0 && number < 5) numberRomanValue = [...returnPattern(number,"I")];
	else if(number > 5 && number < 9) numberRomanValue = ["V",...returnPattern((number-5),"I")];
	else if(number > 10 && number < 40 )numberRomanValue = [...returnPattern(getdigit(number,1),"X")];
	else if(number > 50 && number < 90 )numberRomanValue = ["L",...returnPattern(Math.floor(getdigit(number-50,1)),"X")];
	return numberRomanValue.join("");
}

/**
 * 
 * @param {*} size 
 * @param {*} pattern 
 * @returns 
 */
function returnPattern(size, pattern){
	return Array(size).fill(pattern);
}


module.exports = {returnPattern,splitNumbers,romanNumber,getdigit}