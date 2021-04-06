import { isValidName } from '../services/nameValidator';

describe('test isValidName', ()=>{
    it('should be return false', async ()=>{
        expect(isValidName('a')).toBe(false);
        expect(isValidName('Paulo')).toBe(true);
    });    
});  