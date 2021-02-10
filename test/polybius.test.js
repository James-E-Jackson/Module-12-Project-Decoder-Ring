const { expect } = require("chai");
const polybius = require("../src/polybius")

describe("polybius", () => 
{
    it("Should translate the letters i and j to 42 when encoding", () => 
    {
        const encode = "james";
        const expected = "4211235134";
        const result = polybius(encode);
        expect(result).to.equal(expected)
    })
    it("Should translate 42 to i/j when decoding", () => 
    {
        const decode = "4211235134";
        const expected = "i/james";
        const result = polybius(decode, false);
        expect(result).to.equal(expected)
    })
    it("Should ignore capital letters", () => 
    {
        const cap = "ABCDEF";
        const unCap = "abcdef"
        const capResult = polybius(cap);
        const unCapResult = polybius(unCap)
        expect(capResult).to.equal(unCapResult);
    })
    it("Should maintain spaces in the message, before and after encoding or decoding", () => 
    {
        const deText = " 11 21 31 41";
        const enText = " a b c d";
        const expected = [" a b c d"," 11 21 31 41"];
        const resultArr = [];
        resultArr.push(polybius(deText, false))
        resultArr.push(polybius(enText))
        expect(resultArr).to.eql(expected);
    })
})