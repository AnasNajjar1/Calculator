import { add, multiply } from "./calculator";
describe('calculator', () => {
    it('should return 0 when passing empty string', () => {
        expect(add("")).toBe("0");
    });

    it('should return the sum of the separated numbers', () => {
        expect(add("1.1,2.2,4.4")).toBe("7.7");
    });

    it('should take \n or , as a separator', () => {
        expect(add("1,3\n4")).toBe("8.0");
    });

    it('should take solely 0,1,2 separated by comma', () => {
        expect(() => add("175.2,\n35")).toThrowError("The resulting array cannot include empty strings");
    });

    it('should take solely 0,1,2 separated by comma', () => {
        expect(() => add("1,3,")).toThrowError("The resulting array cannot include empty strings");
    });

    it('should take solely 0,1,2 separated by comma', () => {
        expect(() => add("1,3,-1.2\n-3.4")).toThrowError("Negative not allowed : -1.2,-3.4");
    });

    it('should return 0 when passing empty string', () => {
        expect(multiply("")).toBe("0");
    });

    it('should return the product of the separated numbers', () => {
        expect(multiply("1.1,2.2,4.4")).toBe("10.6");
    });

    it('should take \n or , as a separator', () => {
        expect(multiply("1,3\n4")).toBe("12.0");
    });

    it('should throw an error when passing empty included substrings', () => {
        expect(() => multiply("175.2,\n35")).toThrowError("The resulting array cannot include empty strings");
    });

    it('should throw an error when passing empty included substrings', () => {
        expect(() => multiply("1,3,")).toThrowError("The resulting array cannot include empty strings");
    });

    it('should throw an error when passing negative numbers', () => {
        expect(() => multiply("1,3,-1.2\n-3.4")).toThrowError("Negative not allowed : -1.2,-3.4");
    });
})