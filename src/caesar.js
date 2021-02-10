// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift = 0, encode = true) {
    if(shift === 0 || shift > 25 || shift < -25) return false;//if any of the shift values are invalid inputs - returns false

    if(!encode) shift = -shift;//if the function is being called to decode, sets the shift value to negative
    input = input.toLowerCase();//turns input to lowercase
    const inputArr = [];

    for(let char in input) inputArr.push(input.charCodeAt(char));//loop through the string, push each character's ASCII value to inputArr

    return inputArr.map((code) =>//creates a new array by looping through inputArr and executing the callback function
    { 
      if(code > 122 || code < 97) return String.fromCharCode(code); //if the input code falls outside the english alphabet, don't 
                                                                    //modify the ASCII code, and return it's corresponding character

      let shifted = code + shift; //determines the ASCII code for the shifted character
      
      if(shifted > 122) shifted -= 26; //adjust the value of shifted if it would fall outside the english alphabet
      else if(shifted < 97)shifted += 26;

      return String.fromCharCode(shifted);//returns the corresponding character of the resulting ASCII code
    }).join('')//joins the new array into a string with no delineation
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
