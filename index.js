const Worker = require('./Worker');
const MyString = require('./MyString');
const Validator = require('./Validator');

// Создание двух рабочих
const worker1 = new Worker('Иван', 'Иванов', 10, 31);
const worker2 = new Worker('Петр', 'Петров', 15, 20);

// Вывод информации о работниках
console.log(worker1.getName()); // 'Иван'
console.log(worker1.getSalary()); // 310

console.log(worker2.getName()); // 'Петр'
console.log(worker2.getSalary()); // 300

// Сумма зарплат
const totalSalary = worker1.getSalary() + worker2.getSalary();
console.log(`Сумма зарплат: ${totalSalary}`); // 'Сумма зарплат: 610'

// Пример использования MyString
const str = new MyString();
console.log(str.reverse('abcde')); // 'edcba'

// Пример использования Validator
const validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru')); // true
