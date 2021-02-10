// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function createPolybiusArray()//function to make main function a bit cleaner looking
  {                             //since I already had hardcoded polyArr, this was easier than 
    const polyArr = [           //hardcoding a large array of objects
      [`a`, `b`, `c`, `d`, `e`],
      [`f`, `g`, `h`, `i/j`, `k`],
      [`l`, `m`, `n`, `o`, `p`],
      [`q`, `r`, `s`, `t`, `u`],
      [`v`, `w`, `x`, `y`, `z`],
    ];
    const returnArr = [];
    for(let i = 0; i < polyArr.length; i++)//loop through polyArr's rows
    {
      for(let j = 0; j < polyArr[i].length; j++)//loop through each element in each row
      {
        key = `${j+1}${i+1}`;//add one to each index because the indices in a polybius square start at 1
        char = polyArr[i][j];
        returnArr.push({key, char})//push object that looks like {key: 11, char: a}
      }
    }
    return returnArr;//new array of objects that looks like [{key: 11, char: a},{key, char},...]
  }

  function polybius(input, encode = true) {
    const polyArr = createPolybiusArray();
    const inputArr = input.toLowerCase().split(``);//change input to lower case, then use split() to turn it into an array
    const returnArr = [];
    
    
for(let i = 0; i < inputArr.length; i++)//loop through the new array
{
  if(inputArr[i] === ` `){//if the current index is a space, 
    returnArr.push(` `);  //push a space into returnArr
    i++;//increment i to reduce the number of times we need to loop
  } 
  if(encode){//if we need to encode
    let char = inputArr[i];
    if(char === `i` || char === `j`) returnArr.push(`42`);//if the character is i or j, push 42 - they are the only characters that share a key
    else  returnArr.push(polyArr.find((pair) => pair.char === char).key);//find the matching object with the matching character, then push it's key into returnArr
  }                                                                      
  else {//if we need to decode

    let count = 0;
    for(let char of inputArr) char === ' '? '': count++; //count the number of characters excluding spaces
    if(count%2 !=0)return false;//if the count is odd, return false - this is because each character corresponds to a two digit number
                                              //when decoding, our array will look like: [1,1,4,2,...] but we need two indices to get our two digit number
    let key = `${inputArr[i]}${inputArr[i+1]}`//use the current index and the next to get our key
    returnArr.push(polyArr.find((pair) => pair.key === key).char);//search polyArr for an object with a matching key, then push it's character into returnArr
    i++;//since we're using two indices each loop, increment i to skip what we already used
  }
  
}
return returnArr.join(``);

    // initial solution - works but is messy and difficult to read

    // const polyArr = [
    //   [`a`, `b`, `c`, `d`, `e`],
    //   [`f`, `g`, `h`, `i/j`, `k`],
    //   [`l`, `m`, `n`, `o`, `p`],
    //   [`q`, `r`, `s`, `t`, `u`],
    //   [`v`, `w`, `x`, `y`, `z`],
    // ];
    // const returnArr = [];
    // if(encode){
    //   const encodeArr = input.toLowerCase().split(``);
    //   for (let j = 0; j < encodeArr.length; j++) {
    //     const char = encodeArr[j]

    //     if(char === ' ')
    //     {
    //       returnArr.push(' ')
    //     }else  if (char === `i` || char === `j`) {
    //       returnArr.push(`42`);
    //     } else {
    //       for (let i = 0; i < polyArr.length; i++) {
    //         if (polyArr[i].includes(char)) {
    //           returnArr.push(`${polyArr[i].indexOf(char) + 1}${i + 1}`);
    //         }
    //       }
    //     }
    //   }
    //   return returnArr.join(``);
    // }else{
    //   let count =0;
    //   const decodeArr = input.toLowerCase().split(``)
    //   for(let char of decodeArr) char === ' '? '': count++;
    //   if(count%2 !=0)return false;
    //   let row = 0;
    //   let col = 0;
    //   for(let i = 0; i < decodeArr.length; i+=2)
    //   {
    //     while(decodeArr[i] === ' ' && i < decodeArr.length)
    //     {
    //       returnArr.push(' ')
    //       i++;
    //     }
    //     col = parseInt(decodeArr[i+1])-1;
    //     row = parseInt(decodeArr[i])-1;
    //     returnArr.push(`${polyArr[col][row]}`)
    //   }
    //   return returnArr.join(``);
    //}
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
