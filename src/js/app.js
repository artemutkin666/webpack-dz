console.log('app worked');

// Пример модульной функции
export function greet(name) {
  return `Hello, ${name}!`;
}

// Пример класса
export class Calculator {
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
}

// Использование модулей
const result = Calculator.add(5, 3);
console.log(`5 + 3 = ${result}`);