/* 公共函数 */
/* 情景1 */
export default function sayHello1 () {
  console.log('Hello!')
}
// import common from ''


/* 情景2 */
export function sayHello2 () {
  console.log('Hello!')
}
// import { sayHello2 } from '' √
// import { common } from '' x
export function sayHello3 () {

}

export function sayHello4 () {

}

//1 import { sayHello2, sayHello3, sayHello4 } from '' √
//2 sayHello2();

//1 import * as common from '' √
//2 common.sayHello2
