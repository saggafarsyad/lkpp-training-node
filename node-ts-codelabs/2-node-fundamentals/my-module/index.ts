// import {add, substract} from './calc'
import * as calc from './calc'
import calcV2 from './calc_v2'
import calculator from './calc_v3'
import {calcV4, GRAVITY_ACC} from './calc_v3'

function add(x: number, y: number, z: number): number {
  return x + y + z
}

let result = calc.add(5,98)

console.log(result)

result = add(5,98, 21)
console.log(result)

result = calcV2.multiply(7,412)
console.log(result)

result = calculator.divide(65,5)
console.log(result)

console.log(GRAVITY_ACC)
