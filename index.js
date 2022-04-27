let arr = [{
  "id": 1,
  "name": "Elliot Laroze",
  'salary': 604,
  "age": 46
}, {
  "id": 2,
  "name": "Tibold Strickland",
  'salary': 575,
  "age": 34
}, {
  "id": 3,
  "name": "Aldon Kenafaque",
  'salary': 816,
  "age": 32
}, {
  "id": 4,
  "name": "Danice O'Sirin",
  'salary': 107,
  "age": 50
}, {
  "id": 5,
  "name": "Axe Lofthouse",
  'salary': 541,
  "age": 51
}, {
  "id": 6,
  "name": "Adelice Emberton",
  'salary': 702,
  "age": 46
}, {
  "id": 7,
  "name": "Shannen Speir",
  'salary': 525,
  "age": 50
}, {
  "id": 8,
  "name": "Albert Betke",
  'salary': 113,
  "age": 26
}, {
  "id": 9,
  "name": "Terese Mawer",
  'salary': 721,
  "age": 42
}, {
  "id": 10,
  "name": "Emmerich Rodge",
  'salary': 625,
  "age": 29
}]


//   1.1 Вычислить среднюю зарплату всех работников и вернуть
function calculetSalary(n) {
  let midSalary = n.reduce((e, i) =>
    e + i.salary, 0) / arr.length
  console.log(midSalary);
}
calculetSalary(arr);


// 1.2 Изменить имена всех сотрудников, приписав к ним префикс “Front End Camp Employee - EMPLOYEE_NAME” и вернуть измененный массив.
function changName(element) {
  element.map(e => {
    let argument = {}
    argument.id = e.id
    argument.name = `Front End Camp Employee -${e.name}`
    argument.salary = e.salary
    argument.age = e.age
    console.log(argument);
  })

}
changName(arr)


// 1.3 Оставить в массиве только тех работников, у которых возраст ниже 30 и вернуть массив.
function age(element) {
  let ageFilter = element.filter(e =>
    e.age < 30
  )
  console.log(ageFilter);
}
age(arr);

// 1.4 В данном случае функция будет принимать еще и второй параметр, в который мы будем отправлять строку. Функция должна найти в массиве объект, у которого имя содержит ту строку, которую мы пытаемся найти и вернуть этот объект.
function findObj(argument, str) {
  let find = argument.find(e => {
    return e.name === str
  })
  if (find == undefined) {
    console.log('Not found');
  } else {
    console.log(find);
  }

}
findObj(arr, 'Axe Lofthouse');

// 1.5 Вернуть имена всех работников в одной строке - “Our employees list is: “EMPLOYEE_NAME_1, EMPLOYEE_NAME_2, EMPLOYEE_NAME_3”. В данном случае разрешается изменить массив, если нужно.

// братан это сплошная  ССЛИИВААА


// 1.6 В данном случае функция также будет принимать второй параметр - строку “age” или “salary”. Вернуть массив, в котором элементы отсортированы по возрасту или зарплате соответственно
function sorti(element, str) {
  if (str === 'age') {
    let ageResult = element.sort((a, b) => a.age > b.age ? 1 : -1)
    console.log(ageResult);
  } else if (str === 'salary') {
    let salaryResult = element.sort((a, b) => a.salary > b.salary ? 1 : -1)
    console.log(salaryResult);
  }
}
sorti(arr, 'age');

// 2. Написать функцию, которая принимает три параметра. Первый параметр - массив. Второй параметр - строка - “start” или “end”. Третий параметр - значение. Это может быть как одно значение, так и массив значений. В зависимости от второго параметра, функция добавляет третий параметр в массив (если третий параметр - массив, то его нужно раскрыть), который отправлен первым параметров, в конец или в начало и возвращает длину нового массива. Нельзя пользоваться методами push, unshift
let newArr = [12, 32, 435, 656, 423]
function showResult(arg, str, value) {
  if (str === 'start') {
    let startValue = arg
    startValue = [value, ...arg]
    console.log(startValue);

  } else if (str === 'end') {
    let endValue = arg.concat(value)
    console.log(endValue);
  }

}
showResult(newArr, 'end', 'Perfect')




// 3. Написать функцию, которая принимает два параметра. Первый параметр - массив. Второй параметр - строка - “start” или “end”. В зависимости от второго параметра, функция удаляет один элемент из конца или из начала отправленного массива. Возвращает удаленный элемент. Нельзя пользоваться методами pop, shift
let newArr1 = [1, 2, 3, 4, 5, 67]
function deletElement(arr, str) {
  if (str === 'start') {
    return arr.splice(0, 1)
  } else if (str === 'end') {
    return arr.splice(-1, 1)
  }
  return

}
let deletResult = deletElement(newArr1, 'end')
console.log(deletResult);

// 4. Напишите функцию, которая принимает массив с любым уровнем вложенных массивов и возвращает новый массив, где все элементы на 0 уровне

let array = [5, 6, 7, [23, 55, 44], [232, 454, 65], 32, [324, 324]];
function connectArray(element) {
  return [].concat(...element)
}
let arrResult = connectArray(array)
console.log(arrResult);
// 5. Напишите функцию, которая будет принимать объект с любым уровнем вложенности и корректно копировать его, возвращая скопированный вариант
let user = {
  name: 'Vasya',
  married: true,
  age: 25,
  friends: ['Kolya', 'Petya'],
  children: [
    { name: 'Mila', age: 1 },
    { name: 'Petr', age: 10 },
  ],
};

function enterObj(x) {
  let object = { ...x }
  object.name = 'Aleks'
  console.log(object);
}
// это спецальный вызов для просмотра изменений
enterObj(user);
console.log(user);
enterObj(user);
console.log(user);


