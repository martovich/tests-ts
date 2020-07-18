import {mult, sum} from "./01";

test('sum shuld be crrrect', () => {
   let a = 1;
   let b = 2;
   let c = 3;
   const result1 = sum(a,b);
   const result2 = sum(b,c);
   //expect result
   expect(result1).toBe(3);
   expect(result2).toBe(5);
})

test('mult shuld be crrrect', () => {
   let a = 1;
   let b = 2;
   let c = 3;
   const result1 = mult(a,b);
   const result2 = mult(b,c);
   //expect result
   expect(result1).toBe(2);
   expect(result2).toBe(6);
})
