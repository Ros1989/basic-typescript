/*
 * Массивы
 *  - Нотации `тип[]` и `Array<тип>`
 *  - `(тип | тип)[]`
 *  - `readonly` и `ReadonlyArray<тип>`
 *  - Tuple `[тип, тип]`, например массив координат
 */

const temps1: number[] = [30, 31, 27, 28, 32];
console.log(temps1)


const temps: readonly number[] = [30, 31, 27, 28, 32];// переменная только для чтения

// temps.push(5);

const coords: [number, number] = [50.4501, 30.5234];  //значит что в этой переменной может лежать масив из двух значений, каждое с которых являеться числом
const coords1: [number, number, string] = [50.4501, 30.5234, "строка"];
console.log(coords1)

const rgb: [number, number, number] = [255, 0, 100];

const arrA = [1, 2, 3, 4, 5];

const arrB = [...arrA];

console.log(temps, coords, rgb);

// в данном примере не нужно переменной указывать тип как TS за най сделает
const entries = Object.entries({a: 5, b: 10, c: 15})
for (const entry of entries) {
}

// в данном примере не нужно переменной указывать тип как TS за най сделает
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1]
console.log(arr2)

export {};