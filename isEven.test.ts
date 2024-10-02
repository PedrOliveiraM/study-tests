import { isEven } from "./isEven";

describe('isEven function', () => {
    it('should return if number is even',()=>{
        expect(isEven(10)).toBe(true);
    })


});