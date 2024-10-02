import { firstNonRepeatingCharacter } from "./firstNonRepeatingCharacter"
const word: string = 'banana'
const wordEmpty: string = ''

describe('firstNonRepeatingCharacter function', () => {
    it('should return the first character does not repeat',()=> {
        expect(firstNonRepeatingCharacter(wordEmpty)).toBe('b')
    })

    it('should return string empty if every letters are repeat',()=> {
        expect(firstNonRepeatingCharacter(word)).toBe('')
    })
})