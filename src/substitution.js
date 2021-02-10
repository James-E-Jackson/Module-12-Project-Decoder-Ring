// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    if(!alphabet) return false;//if not alphabet is passed in, return false
    const originAlpha = `abcdefghijklmnopqrstuvwxyz`.split(``);//create an array of the english alphabet
    const codeAlpha = alphabet.split(``);//create an array from the input alphabet
    const inputArr = input.toLowerCase().split(``);//make the input lowercase and turn it into an array
    const returnArr = [];

    for(let char of codeAlpha)//loop through the input alphabet
    {
      const numChars = codeAlpha.filter((altChar) => altChar === char).length//for each character, make an array of all matching characters and find that array's length
      if(numChars > 1 || codeAlpha.length != 26) return false;//return false if there is more than one occurrence of that character
    }

    
    for(let i = 0; i < inputArr.length; i++)//loop through the message or code array
    {
      const char = inputArr[i];
      if(char === ` `) returnArr.push(` `);//if the current index is a space, push a space into returnArr
      if(encode){//if we are encoding
        returnArr.push(codeAlpha[originAlpha.indexOf(char)])//find the index of the character in the english alphabet and push the coded character with the same index
      }else{    //if we are decoding
        returnArr.push(originAlpha[codeAlpha.indexOf(char)])//find the index of the character in the coded alphabet and push the english character with the same index
      }
    }
    return returnArr.join(``)//return the new array joined as a string
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
