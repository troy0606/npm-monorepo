import { stringify } from 'qs';
export const isEven = (x: number) => stringify({isEven: x % 2 === 0});
const result = isEven(5);
console.log(result);