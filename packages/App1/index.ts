import { say123 } from "Lib/aaa";
import { sayHelloFn } from "Lib";
export const isEven = (x: number) => ({ isEven: x % 2 === 0 });
const result = isEven(5);
console.log(result);
say123();
sayHelloFn();
