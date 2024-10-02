import { calculateAverage } from "./calculateAverage"

const list = [4, 2, 5, 6, 9];
const listEmpty: number[] = []

describe('calculateAverage function', () => {
    it('should return 0 if list is empty', () => {
        expect(calculateAverage(listEmpty)).toBe(0)
    })
    
    it('should return average of the numbers in the list', () => {
        expect(calculateAverage(list)).toBeCloseTo(5.20, 2)
    })
})