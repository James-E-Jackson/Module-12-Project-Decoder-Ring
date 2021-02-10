const { expect } = require("chai");
const caesar = require("../src/caesar")

describe("caesar", () => 
{
    it("Should return false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => 
    {
        const text = "abcdef"
        let shift = 0;
        const results = [];
        const expected = [false, false, false, false]; 
        results.push(caesar(text))

        do{
            results.push(caesar(text, shift))
            if(shift === 0) shift = 26;
            else if(shift === 26)shift = -26;
            else shift = 0;
        }while(shift != 0)

        expect(results).to.eql(expected);
    })
    it("Should ignore capital letters", () => 
    {
        const cap = "ABCDEF";
        const unCap = "abcdef"
        const capResult = caesar(cap, 1);
        const unCapResult = caesar(unCap, 1)
        expect(capResult).to.equal(unCapResult);
    })
    it("Should handle shifts that go past the end of the alphabet", () => 
    {
        const text = "abyz";
        expected = ["cdab","yzwx"];
        const results = [];
        results.push(caesar(text, 2));
        results.push(caesar(text, -2))
        
        expect(results).to.eql(expected);
    })
    it("Should maintain spaces and other nonalphabetic symbols in the message before and after encoding", () => 
    {
        const text = "1 a 2 b 3 c 4 d";
        const expected = "1 b 2 c 3 d 4 e";
        const result = caesar(text, 1)
        expect(result).to.equal(expected);
    })
})