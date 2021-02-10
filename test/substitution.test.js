const { expect } = require("chai");
const substitution = require("../src/substitution")

describe("substitution", () => 
{
    
    it("Should return false if the given alphabet isn't exactly 26 characters long", () => 
    {
        const inAlpha = `plmoknijbuhvygctfxrdzeswa`;
        const message = `message`;
        const result = substitution(message, inAlpha);
        expect(result).to.be.false;
    })
    it("Should correctly translate the given phrase, based on the alphabet given to the function", () => 
    {
        const inAlpha = `plmoknijbuhvygctfxrdzeswaq`;
        const message = `message`;
        const result = substitution(message, inAlpha)
        const expected = `ykrrpik`;
        expect(result).to.equal(expected);
    })
    it("Should return false if there are any duplicate characters in the given alphabet.", () => 
    {
        const inAlpha = `plmoknijbuhvygctfxrdzeswap`;
        const message = `message`;
        const result = substitution(message, inAlpha);
        expect(result).to.be.false;
    })
    it("Should maintain spaces in the message, before and after encoding or decoding.", () => 
    {
        const inAlpha = `plmoknijbuhvygctfxrdzeswaq`;
        const results = [];
        const enMessage = `a message`;
        const deMessage = `p ykrrpik`;
        const expected = [`p ykrrpik`, `a message`];
        results.push(substitution(enMessage, inAlpha));
        results.push(substitution(deMessage, inAlpha, false));
        expect(results).to.eql(expected);
    })
    it("Should ignore capital letters.", () => 
    {
        const inAlpha = `plmoknijbuhvygctfxrdzeswaq`;
        const message1 = `a message`;
        const message2 = `A MESSAGE`
        const result1 = substitution(message1, inAlpha);
        const result2 = substitution(message2, inAlpha);
        expect(result1).to.equal(result2);
    })
})