"use strict";
function eddabitEasy() {
  //1
  const sum = (num1, num2) => num1 + num2;
  console.log(sum(2, 3));

  //2
  const secondsConvertor = (minutes) => minutes * 60;
  console.log(secondsConvertor(5));

  //3
  const nextNumber = (num) => ++num;
  console.log(nextNumber(-2));

  //4
  const triangleArea = (base, height) => (base * height) / 2;
  console.log(triangleArea(7, 4));

  //5
  const ageInDays = (age) => age * 365 + " " + "days";
  console.log(ageInDays(22));

  //6
  const firstElementOfArray = (element) => element.at(0);
  console.log(firstElementOfArray([3, 4, 5, 6]));

  //7
  function powerCalc(a, b) {
    return a * b;
  }
  console.log(powerCalc(230, 10));

  //8
  const hoursToSecs = (hour) => hour * 60 * 60;
  console.log(hoursToSecs(2));

  //9
  const maxEdge = (len1, len2) => len1 + len2 - 1;
  console.log(maxEdge(5, 7));

  //10
  const rem = (num1, num2) => num1 % num2;
  console.log(rem(1, 3));

  //11
  const peri = function (length, breadth) {
    return 2 * (length + breadth);
  };
  console.log(peri(20, 10));

  //12
  const returnSomething = (something) => `something ${something} `;
  console.log(returnSomething("is something"));

  //13
  const sumOfAngles = (sides) => (sides - 2) * 180;
  console.log(sumOfAngles(6));

  //14
  const isLessthan100 = (number) => number < 100 || false;
  console.log(isLessthan100(10));

  //15
  const baseketBall = (two, three) => two * 2 + three * 3;
  console.log(baseketBall(7, 5));

  //16
  const totalLegs = (ch, co, pi) => ch * 2 + co * 4 + pi * 4;
  console.log(totalLegs(2, 3, 5));

  console.log(Number.parseInt("2", 2));
  let n = 4,
    i = 8;
  console.log(n | i);
  console.log(n.toString(2), i.toString(2));
  //17
  const addUp = function (num) {
    let sum = 0;
    for (i = 0; i <= num; i++) {
      sum = sum + i;
    }
    console.log(sum);
  };

  addUp(600);

  //18
  const matchHouse = function (num) {
    if (num > 0) {
      return num * 6 - (num - 1);
    } else {
      return "Negative number or zero";
    }
  };

  console.log(matchHouse(87));

  //19
  const leftShiftTo = function (num1, num2) {
    return num1 * 2 ** num2;
  };
  console.log(leftShiftTo(4, 1), 4 << 1);

  const rightShiftTo = function (num1, num2) {
    return num1 / 2 ** num2;
  };
  console.log(rightShiftTo(4, 1), 4 >> 1);

  //20
  const minAndMaxArr = function (arr) {
    let sortArr = arr.sort();
    return [sortArr.at(0), sortArr.at(-1)];
  };
  console.log(minAndMaxArr([1]));

  //21
  const isChristmasEve = function (...date) {
    const date1 = new Date(date.join(","));
    const toDate = new Date(date1);
    console.log(toDate, date, date1);
    return toDate.getMonth() == 11 && toDate.getDate() == 24;
  };

  console.log(isChristmasEve(new Date(3000, 11, 24)));
  // console.log(isChristmasEve(2014, 11, 24));
  // console.log(new Date().getDate());
  //22
  const whichIsLarger = function (f, g) {
    if (f() > g()) return "f";
    else if (f() < g()) return "g";
    else return "neither";
  };
  console.log(
    whichIsLarger(
      () => 25,
      () => 2
    )
  );

  //23
  const toBinary = function (number) {
    console.log(Number(number).toString(2));
  };
  toBinary(8);

  //24
  const canNest = function (a, b) {
    return Math.min(...a) > Math.min(...b) && Math.max(...a) < Math.max(...b);
  };
  console.log(canNest([1, 2, 3], [0, 6]));
  console.log(canNest([1, 40], [4, 0]));
  console.log(canNest([9, 9, 8], [8, 9, 10]));

  //25
  // const numberSquares = function (a) {
  //   let sum = 0;
  //   for (let i = 0; i <= a; i++) {
  //     sum = sum + i ** 2;
  //   }
  //   return sum;
  // };
  const numberSquares = (n) => (n > 1 ? n ** 2 + numberSquares(n - 1) : 1);
  console.log(numberSquares(1));

  //26

  function seriesResistance(arr) {
    const totalResis = arr.reduce((acc, val) => (acc = acc + val), 0);
    return `${totalResis} ${totalResis > 9 ? "ohms" : "ohm"}`;
  }
  console.log(seriesResistance([1, 2, 3]));
  console.log(seriesResistance([1, 5, 6, 3]));

  //27
  // function largestSwap(num) {
  //   let swappedNum = `${num}`;
  //   swappedNum = swappedNum.split("").reverse().join("");
  //   return swappedNum <= num ? true : false;
  // }
  function largestSwap(num) {
    return num / 10 >= num % 10 ? true : false;
  }
  console.log(largestSwap(23));

  //28 finding and joining the lower case alphabets

  function detectWord(str) {
    const arrFromStr = str.split("");
    const arrOfLowerCase = arrFromStr.filter(
      (value) => String(value).charCodeAt(0) >= 97
    );
    return arrOfLowerCase.join("");
  }
  console.log(detectWord("UcUNFYGaFYFYGtNUH"));
  console.log("p".charCodeAt(0));
  console.log([..."popoppop"]);

  //29 hex to binary
  function hexToBinary(num) {
    const intOfNum = parseInt(String(num), 15);
    console.log(intOfNum, typeof intOfNum);
    console.log(Number(String(parseInt(intOfNum.toString(2), 2))).toString(2));
    return String(intOfNum.toString(2));
  }
  console.log(hexToBinary(0x15111));

  //30
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      return `${other.name} is ${
        other.age > this.age
          ? "older than"
          : other.age == this.age
          ? "the same age as"
          : "younger than"
      } me`;
    }
  }
  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  console.log(p1.compareAge(p2));
  console.log(Math.sign(27 - 9));

  //31 sorting array of objects

  function sortDrinkByPrice(drinks) {
    drinks.sort((a, b) => a.price - b.price);
    console.log(drinks);
  }
  const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
  ];

  sortDrinkByPrice(drinks);

  //32 tucking the arrays in array
  function tuckIn(arr1, arr2) {
    arr1.splice(1, 0, ...arr2);
    console.log(arr1.splice(1, 0, ...arr2));
    console.log(arr1);
  }
  tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9], [0]);
  // tuckIn([15, 150], [45, 75, 35]);
  // tuckIn(
  //   [
  //     [1, 2],
  //     [5, 6],
  //   ],
  //   [[3, 4]]
  // );
  //33 slightly superior
  function isFirstSuperior(arr1, arr2) {
    let isSuperior = false;
    arr1.forEach(function (element, i) {
      if (element > arr2[i]) {
        isSuperior = true;
      }
    });
    return isSuperior;
  }
  isFirstSuperior([1, 2, 4], [1, 2, 3]);
  console.log(isFirstSuperior([1, 2, 4], [1, 2, 3]));
  console.log(
    isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])
  );
  console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]));

  //34 Count Instances of a Character in a String
  function charCount(myChar, str) {
    const regex = /[mychar]/g;
    return str.match(regex).length;
  }
  console.log(charCount("a", "edabita"));

  //35 flip
  const flip = (n) => n ^ 1;
  console.log(flip(1));

  //35 Number Split
  function numberSplit(n) {
    let a = Math.floor(n / 2);
    let b = n - a;
    return [a, b];
  }

  console.log(numberSplit(10));

  //36Filter out Strings from an Array
  function filterArray(arr) {
    return arr.filter((val) => typeof val === "number");
  }
  console.log(filterArray([1, 2, "a", "b"]));
  console.log(filterArray([1, "a", "b", 0, 15]));
  console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
  console.log(typeof "o", typeof 9, "piop");

  //37 Error Messages

  function error(n) {
    const error = [
      "Check the fan: e1",
      "Emergency stop: e2",
      "Pump Error: e3",
      "c: e4",
      "Temperature Sensor Error: e5",
    ];
    console.log(error.fill("fuck", 0, 1));
    const a = error[n - 1];

    return n <= 0 ? "101" : n >= 5 ? a : "101";
  }

  console.log(error(4));

  var a = {
    index: 1,
  };

  // later
  console.log(a); // ??

  // even later

  a.index++;

  //38 Incorrect Import Statement

  function fixImport(s) {
    let modArr = s.split(" ");
    let newModArr = [modArr[2], modArr[3], modArr[0], modArr[1]];
    return newModArr.join(" ");
  }
  console.log(fixImport("import object from module_name"));
  console.log(fixImport("import randint from random"));
  console.log(fixImport("import pi from math"));

  //39 spotlight sum

  //40Repeating Letters
  function doubleChar(str) {
    let modArr = str.split("").map(function (value) {
      return value + value;
    });
    console.log(modArr.join(""));
    console.log(modArr);
    return modArr.join("");
  }

  console.log(doubleChar("String"));
  console.log(doubleChar("Hello World!"));
  console.log(doubleChar("1234!_ "));

  //41 Sort by String Length

  function sortByLength(arr) {
    return arr.sort();
  }
  console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
  console.log(sortByLength(["apple", "pie", "shortcake"]));

  //42 Sum of cubes

  function sumOfCubes(...arr) {
    return arr.reduce((acc, val) => acc + val ** 3, 0);
  }

  console.log(sumOfCubes(2));

  //43 Highest Digit
  function highestDigit(number) {
    // const maxArr = number.toString().split("").sort();
    // return maxArr.at(-1);
    console.log(...number.toString().split(""));
    console.log(Math.max());
    return Math.max(...number.toString().split(""));
  }

  console.log(highestDigit(379));

  //44 Even all the way
  const getOnlyEvens = (num) =>
    num.filter((val, i) => val % 2 === 0 && i % 2 === 0);

  console.log(getOnlyEvens([0, 1, 2, 3, 4]));
  console.log(getOnlyEvens([1, 2, 3, 4, 5]));

  //45 How many vowels
  function countVowels(str) {
    const dupArr = str.toLowerCase();
    return dupArr
      .split("")
      .filter(
        (val) =>
          val === "a" ||
          val === "e" ||
          val === "i" ||
          val === "o" ||
          val === "u"
      ).length;
  }
  console.log(countVowels("Celebration"));

  //46 Pi to N numbers
  console.log(Math.PI);
  function myPi(n) {
    return Math.PI.toFixed(n);
  }

  console.log(myPi(1));
  console.log(myPi(15));

  //47 Sort an Array by String Length
  function sortByLength(arr) {
    const alterArr = arr.sort((a, b) => a.length - b.length);
    return alterArr;
  }
  console.log(sortByLength(["Google", "Apple", "Microsoft"]));

  //48 Is the Average of All Elements a Whole Number?
  function isAvgWhole(arr) {
    let avg = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    return Number.isInteger(avg);
  }

  //49 Absolute Sum
  console.log(isAvgWhole([1, 2, 3, 4]));

  function getAbsSum(arr) {
    return arr.map((val) => Math.abs(val)).reduce((acc, val) => acc + val, 0);
  }

  console.log(getAbsSum([-3, -4, -10, -2, -3]));

  //50 recursion: Factorials
  function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
  }

  console.log(factorial(4));

  //51.Remove Every Vowel from a String
  function removeVowels(str) {
    return str.split("").filter(function (val) {
      let letter = val.toLowerCase();
      return !(
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      );
    });
  }
  console.log(removeVowels("Ee're gonna build a wall!"));
}

//51. How Much is True?

function countTrue(arr) {
  return arr.filter((val) => val === true).length;
}

console.log(countTrue([false, false, false]));
console.log(countTrue([]));

//52 .A Redundant Function
function redundant(str) {
  return () => str;
}
console.log(redundant("apple"));

//53.Perimeters with a Catch

function perimeter(l, num) {
  return l === "s" ? num * 4 : l === "c" ? num * 6.28 : 0;
}

console.log(perimeter("c", 4));

//54 Find Number of Digits in Number

function num_of_digits(num) {
  let count = 0;
  while (num > 0) {
    num = Math.round(num / 10);
    count = count + 1;
  }
  return count;
}
console.log(num_of_digits(1000));
console.log(num_of_digits(1305981031));

//55 Which Generation Are You?
function generation(x, y) {
  const generation = {
    m: [
      "great grandfather",
      "grandfather",
      "father",
      "me!",
      "son",
      "grandson",
      "great grandson",
    ],
    f: [
      "great grandmother",
      "grandmother",
      "mother",
      "me!",
      "daughter",
      "granddaughter",
      "great granddaughter",
    ],
  };
  return generation?.[y][x + 3];
}
console.log(generation(1, "f"));

//56.Tile Teamwork Tactics
function possibleBonus(a, b) {
  for (let i = 1; i <= 6; i++) {
    if (a + i === b) return true;
  }
  return false;
}

console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 5));

//57.Tetrahedral Numbers

function tetra(n) {
  return (n * (n + 1) * (n + 2)) / 6;
}

console.log(tetra(3));

//58. Function Factory

function makePlusFunction(base) {
  return function (basei) {
    return basei + base;
  };
}
const plusFive = makePlusFunction(3);
console.log(plusFive(8));

//59Converting Objects to Arrays
function toArray(obj) {
  // console.log(Object.keys(obj), Object.values(obj), Object.entries(obj));
  return Object.entries(obj);
}

console.log(toArray({ a: 1, b: 2 }));

console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));

//60 Concatenate Variable Number of Input Arrays

function concat(...args) {
  console.log(args);
  return args.flat(1);
}

console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2, 3, 4]));

//61 All About Anonymous Functions: Adding Suffixes
function add_suffix(suffix) {
  return function (base) {
    return base + suffix;
  };
}
console.log(add_suffix("ly")("hope"));

//62 Triangular Number Sequence
function triangle(n) {
  return (n * (n + 1)) / 2;
}

console.log(triangle(3));

//63Make a Circle with OOP

class Circle {
  #radius;
  constructor(a) {
    this.#radius = a;
  }
  getPerimeter() {
    return this.#radius * 2 * Math.PI;
  }
  getArea() {
    return this.#radius ** 2 * Math.PI;
  }
}

const cir = new Circle(4.44);
console.log(cir.getArea(), cir.getPerimeter());

//64 Convenience Store
function changeEnough(change, amountDue) {
  const [first, second, third, fourth] = change;
  console.log(first * 0.25 + second * 0.1 + third * 0.05 + fourth * 0.01);
  console.log(first, second, third, fourth);

  if (first * 0.25 + second * 0.1 + third * 0.05 + fourth * 0.01 === amountDue)
    return true;
  return false;
}

console.log(changeEnough([30, 40, 20, 5], 12.55));

//65 calculating the mo of 10 rs, 5 rs and 1 rs (own problem)

const calcChange = function (no) {
  let noOfTen = 0,
    noOfFive = 0,
    noOfTwo = 0,
    noOfOne = 0;
  noOfTen = Math.floor(no / 10);
  let rem = no % 10;

  if (rem >= 5) {
    noOfFive = Math.floor(rem / 5);
    rem = rem % 5;
    console.log(rem);
  }
  console.log(rem);
  if (rem >= 2) {
    noOfTwo = Math.floor(rem / 2);
    rem = rem % 2;
    console.log(rem);
  }

  noOfOne = rem / 1;

  // if (rem > 0) return "cannot produce a change";
  console.log(noOfTen, noOfFive, noOfTwo, noOfOne);
  return `change is ${noOfTen} 10💴 ,${noOfFive}  5💴, ${noOfTwo} 2💴 ${noOfOne} 1💴`;
};

console.log(calcChange(57));

//66Array of Multiples
function arrayOfMultiples(num, length) {
  const arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(i * num);
  }
  return arr;
}
console.log(arrayOfMultiples(7, 6));

//125 Rock, Paper, Scissors!
function calculateScore(games) {
  let accObj = {
    Abi: 0,
    Ben: 0,
    Tie: 0,
  };

  accObj = games.reduce((acc, val) => {
    if (val[1] == val[0]) return { ...acc, Tie: acc.Tie++ };

    switch (val[0].toUpperCase()) {
      case "R":
        if (val[1] == "S") return { ...acc, Abi: acc.Abi + 1 };
        if (val[1] == "P") return { ...acc, Ben: acc.Ben + 1 };
      case "P":
        if (val[1] == "R") return { ...acc, Abi: acc.Abi + 1 };
        if (val[1] == "S") return { ...acc, Ben: acc.Ben + 1 };
      case "S":
        if (val[1] == "R") return { ...acc, Ben: acc.Ben + 1 };
        if (val[1] == "P") return { ...acc, Abi: acc.Abi + 1 };
    }
  }, accObj);

  return accObj.Abi > accObj.Ben
    ? "Abigail"
    : accObj.Abi < accObj.Ben
    ? "Benson"
    : "Tie";
}
console.log(
  calculateScore([
    ["R", "P"],
    ["R", "S"],
    ["S", "P"],
  ])
);
console.log(
  calculateScore([
    ["R", "R"],
    ["S", "S"],
  ])
);
console.log(
  calculateScore([
    ["S", "R"],
    ["R", "S"],
    ["R", "R"],
  ])
);

//126Unfair Hurdles
function isUnfairHurdle(hurdles) {
  return hurdles.every((val) => {
    console.log(
      val.split(""),
      hurdles,
      val.split("").length,
      hurdles.length ** hurdles.length
    );
    return val.split("").length <= hurdles.length ** hurdles.length;
  });
}
console.log(
  isUnfairHurdle([
    "#    #    #    #",
    "#    #    #    #",
    "#    #    #    #",
    "#    #    #    #",
  ])
);
console.log(isUnfairHurdle(["#  #  #  #", "#  #  #  #", "#  #  #  #"]));
console.log(
  isUnfairHurdle(["#      #      #      #", "#      #      #      #"])
);

//127 Legendre's Formula
function legendre(p, n) {
  let count = 0;
  for (let i = 1; p ** i <= n; i++) {
    count += Math.floor(n / p ** i);
    // console.log(count);
  }
  return count;
}

console.log(legendre(5, 100));
console.log(legendre(2, 27));

//128 Next Happy Year
function happyYear(year) {
  let count = year;
  do {
    if ([...new Set(String(count).split(""))].length == 4) return count;
    count++;
  } while (count > 0);
  // function condition(n) {
  //   return [...new Set(String(n).split(""))].length == 4;
  // }
  // for (let i = year + 1; !condition(i); i++) {
  //   // console.log(i, condition(i), "Inside for loop");
  //   return i;
  // }
}
console.log(happyYear(2017));
console.log(happyYear(1990));
console.log(happyYear(2021));

//129 Leader in an Array

function leader(arr) {
  const finalArr = [];
  arr.forEach(function forEachFunction(val, i) {
    if (
      arr.slice(i + 1).every(function everyFunction(otherVal) {
        // console.log(otherVal);
        return otherVal < val;
      })
    )
      finalArr.push(val);
  });
  return finalArr;
}
console.log(leader([2, 3, 20, 15, 8, 3]));
console.log(leader([2, 3, 20, 15, 8, 25, 3]));
console.log(leader([1, 2, 3, 4, 5]));

//130 Digits Sum Root

function rootDigit(n) {
  let string = n, //string = 123
    count; // undefined

  function numberSplit(num) {
    return String(num).split("");
  }
  do {
    count = numberSplit(string).reduce((acc, val) => acc + +val, 0); //6
    string = count; // 6
  } while (numberSplit(count).length > 1);
  return string;
}
console.log(rootDigit(123));
console.log(rootDigit(999888777));
// console.log(rootDigit(1238763636555555555555));
// console.log(rootDigit(1238763636));

//131 Unmix My Strings
function unmix(str) {
  return str
    .split("")
    .map((val, i, arr) => {
      if (i == arr.length - 1) {
        console.log(arr[i + 1]);
        return val;
      }

      if (i % 2 == 0) {
        return arr[i + 1];
      }
      if (i % 2 != 0) {
        return arr[i - 1];
      }
    })
    .join("");
}
// console.log(unmix("123456"));
// console.log(unmix("hTsii  s aimex dpus rtni.g"));
console.log(unmix("badce"));

//132 Simple Counting

function countDigits(n, d) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i * i);
  }
  let count = 0;
  console.log(arr);
  arr
    .map((val) => val + "")
    .forEach((val) => {
      val.split("").forEach((val) => {
        if (+val == d) {
          count++;
        }
      });
    });
  return count;
}

console.log(countDigits(10, 1));
console.log(countDigits(25, 2));
console.log(countDigits(10, 1));

//133.Weekly Salary
function weeklySalary(hours) {
  function wageReducer(acc, val) {
    if (val <= 8) {
      return (acc = acc + val * 10);
      console.log(acc, (acc = acc + val * 10));
    } else {
      return (acc += (val - 8) * 15 + 80);
    }
    console.log(acc, val);
  }

  const weekDayArray = hours.slice(0, 5);
  const weekEndArray = hours.slice(5);

  console.log(weekDayArray, weekEndArray);

  const weekDaySalary = weekDayArray.reduce(wageReducer, 0);
  const weekEndSalary = 2 * weekEndArray.reduce(wageReducer, 0);
  return weekDaySalary + weekEndSalary;
}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]));
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]));
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]));

//134 All Rotations of a String

function leftRotations(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    let str = "",
      no = i;
    for (let j = 0; j < string.length; j++) {
      let a = j + i;
      if (a >= string.length) {
        a = a - string.length;
      }
      str += string[a];
      console.log(str);
    }
    arr.push(str);
  }
  return arr;
}

function rightRotations(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    let str = "",
      no = i;
    for (let j = 0; j < string.length; j++) {
      let a = j - i;
      if (a < 0) {
        a = a + string.length;
      }
      str += string[a];
      console.log(str);
    }
    arr.push(str);
  }
  return arr;
}

console.log(leftRotations("abc"));

console.log(rightRotations("abc"));

console.log(leftRotations("abcdef"));

console.log(rightRotations("abcdef"));

//140 Meme Sum :)

function memeSum(a, b) {
  let firstNo = a + "",
    firstNoLength = firstNo.length;
  let secondNo = b + "",
    secondNoLength = secondNo.length;
  const maxLength = Math.max(firstNoLength, secondNoLength);
  firstNo = firstNo.padStart(maxLength, "0").split("");
  secondNo = secondNo.padStart(maxLength, "0");

  return firstNo
    .map((val, i) => {
      return +val + +secondNo[i];
    })
    .join("");
  // .reduce((acc, val) => "" + acc + val);
}

console.log(memeSum(26, 39));
console.log(memeSum(122, 81));
console.log(memeSum(1222, 30277));

//141  Trailing Zeros

function trailingZeros(n) {
  let count = 0;
  for (let i = 1; n / 5 ** i > 1; i++) {
    console.log(count, Math.floor(n / 5 ** i));
    count = Math.floor(n / 5 ** i) + count;
  }
  return count;
}
console.log(trailingZeros(1000));
console.log(trailingZeros(6));
console.log(trailingZeros(0));

//142 You Sunk My Battleship
function fire(matrix, coordinates) {
  return matrix[coordinates[0].charCodeAt(0) - 65][coordinates[1] - 1] == "."
    ? "splash"
    : "BOOM";
}

const matrix = [
  [".", ".", ".", "*", "*"],
  [".", "*", ".", ".", "."],
  [".", "*", ".", ".", "."],
  [".", "*", ".", ".", "."],
  [".", ".", "*", "*", "."],
];
console.log(fire(matrix, "A1"));

console.log(fire(matrix, "A4"));

console.log(fire(matrix, "D2"));

//143 What's the Missing Letter?

function missingLetter(str) {
  const min = str.charCodeAt(0);

  for (let i = 1; i <= str.length - 1; i++) {
    // console.log(str.charCodeAt(i), i, min + i, str[i]);
    if (str.charCodeAt(i) != min + i) {
      return String.fromCharCode(min + i);
    }
  }
  return "No missing letters";
}

console.log(missingLetter("abdefg"));
console.log(missingLetter("mnopqs"));
console.log(missingLetter("tuvxyz"));

console.log(missingLetter("ghijklmno"));

//144 Algorithms: Binary Search

const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
].sort((a, b) => a - b);
function isPrime(primes, num) {
  function recursiveFunc(start, end) {
    let mid = Math.floor((start + end) / 2);
    if (start > end) return false;
    if (primes[mid] === num) return true;
    if (primes[mid] > num) return recursiveFunc(start, mid - 1);
    if (primes[mid] < num) return recursiveFunc(mid + 1, end);
  }
  const rem = recursiveFunc(0, primes.length);
  console.log(rem);

  let start = 0,
    end = primes.length;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (primes[mid] == num) return true;
    if (primes[mid] > num) end = mid - 1;
    if (primes[mid] < num) start = mid + 1;
  }
  return false;
}
// console.log(isPrime(primes, 3));

// console.log(isPrime(primes, 4));

// console.log(isPrime(primes, 67));

console.log(isPrime(primes, 23));

// 145 Primes Below a Given Number

function primesBelowNum(n) {
  const arr = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= n; j++) {
      if (i % j == 0 && i !== j) {
        isPrime = false;
        // continue;
      }
      // console.log(i, j);
    }
    // console.log(i);
    if (isPrime) {
      arr.push(i);
    }
  }
  return arr;
}

// console.log(primesBelowNum(5));
// console.log(primesBelowNum(10));
// console.log(primesBelowNum(20));

//Sieve of Eratosthenes Algorithm

function sieveOFEratosthenes(n) {
  const primes = new Array(n).fill(true);
  // return primes;
  for (let i = 2; i * i <= n; i++) {
    if (primes[i] === true) {
      for (let j = i * i; j <= n; j = j + i) {
        primes[j] = false;
      }
    }
  }

  return primes
    .map((val, i) => {
      if (val == true) {
        return i;
      }
    })
    .filter((val) => val);
}

console.log(sieveOFEratosthenes(20));

//146 Is It a Probability Matrix?

function isProbMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i].length !== arr.length) return false;

    if (!arr[i].every((val) => val >= 0 && val <= 1)) return false;
    // console.log(
    //   arr[i].reduce((acc, val) => {
    //     console.log(acc);
    //     return acc + val;
    //   }, 0)
    // );
    // console.log(arr[0]);
    if (arr[i].reduce((acc, val) => acc + val, 0) > 1) return false;

    // return true;
  }
  return true;
}
console.log(
  isProbMatrix([
    [0.5, 0.5, 0.0],
    [0.2, 0.5, 0.3],
    [0.1, 0.2, 0.7],
  ])
);
console.log(
  isProbMatrix([
    [0.5, 0.5, 0.0],
    [0.2, 0.5, 0.3],
  ])
);
console.log(
  isProbMatrix([
    [2, -1],
    [-1, 2],
  ])
);
console.log(
  isProbMatrix([
    [0, 1],
    [1, 0],
  ])
);

console.log(
  isProbMatrix([
    [0.5, 0.4],
    [0.5, 0.6],
  ])
);

//147 Power Ranger
function powerRanger(power, min, max) {
  const arr = [];
  for (let i = 1; i ** power <= max; i++) {
    const val = i ** power;
    if (val >= min) {
      arr.push([val]);
    }
  }
  return arr.length;
}

console.log(powerRanger(2, 49, 65));
console.log(powerRanger(3, 1, 27));
// 3 cubes (n^3) lie between 1 and 27, 1 (1^3), 8 (2^3) and 27 (3^3)

console.log(powerRanger(10, 1, 5));
// 1 value raised to the 10th power lies between 1 and 5, 1 (1^10)

console.log(powerRanger(5, 31, 33));

console.log(powerRanger(4, 250, 1300));

//147. Reorder Digits

function reorderDigits(arr, direction) {
  function sorting(isAscending = true) {
    console.log(isAscending);
    return isAscending ? (a, b) => +a - +b : (a, b) => +b - +a;
  }

  // sort(direction);
  // sort();
  return arr.map((val, i) => {
    const splittedArr = String(val).split("");
    if (direction == "asc") return Number(splittedArr.sort(sorting()).join(""));
    if (direction == "desc")
      return Number(splittedArr.sort(sorting(false)).join(""));
  });
}
console.log(reorderDigits([515, 341, 98, 44, 211], "asc"));
console.log(reorderDigits([515, 341, 98, 44, 211], "desc"));

// console.log(["5", "1", "5"].sort((a) => 9));
console.log(reorderDigits([63251, 78221], "asc"));

console.log(reorderDigits([63251, 78221], "desc"));

console.log(reorderDigits([1, 2, 3, 4], "asc"));

console.log(reorderDigits([1, 2, 3, 4], "desc"));

//148 Longest Word in a 7 Segment Display

function longest7SegmentWord(arr) {
  const filteredArray = arr.filter(
    (val) =>
      !(
        val.includes("k") ||
        val.includes("x") ||
        val.includes("v") ||
        val.includes("w") ||
        val.includes("m")
      )
  );
  console.log(filteredArray);
  return filteredArray.length > 0
    ? filteredArray.reduce((acc, val) => {
        console.log(acc);
        if (acc.length >= val.length) return acc;
        if (acc.length < val.length) return val;
      })
    : "";
}

// console.log(
//   longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"])
// );

// console.log(
//   [1, 3, 2].reduce((acc, val) => {
//     if (acc > val) return acc;
//     if (val > acc) return val;
//   })
// );

console.log(
  longest7SegmentWord(["coding", "crackers", "edabit", "celebration"])
);

console.log(longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]));

//149 Learn Lodash (1): Intersection of Array

function intersection(...a) {
  const [firstArray, ...rest] = a;
  const flattenedArray = rest.flat();
  console.log(flattenedArray);
  return firstArray
    .map((val) => {
      const count = flattenedArray.reduce((acc, innerVal) => {
        console.log(val, innerVal);
        if (val == innerVal) {
          console.log("inside if");
          return acc + 1;
        }
        return acc;
      }, 0);
      console.log(count, "reducer value");
      if (count >= 1) return val;
    })
    .filter((val) => val);
}
console.log(intersection([1, 2, 3], [3, 4, 5], [2, 9, 9]));

// 150 Diamond Shaped Array
function diamondArrays(x) {
  const arr = [];
  for (let i = 0; i < x; i++) {
    const individualArr = [];
    for (let j = 0; j <= i; j++) {
      console.log(i + 1);
      individualArr.push(i + 1);
    }
    arr.push(individualArr);
    // for (let j = x - 1; j > i; j--) {
    //   console.log(x - 1 - i);
    // }
  }
  for (let i = 0; i < x - 1; i++) {
    const individualArr = [];
    for (let j = x - 1; j > i; j--) {
      console.log(x - 1 - i);
      individualArr.push(x - 1 - i);
    }
    arr.push(individualArr);
  }
  return arr;
}

console.log(diamondArrays(5));
console.log(diamondArrays(4));
console.log(diamondArrays(2));
console.log(diamondArrays(1));

function doSomething(isGoingToResolve = true) {
  const pro = new Promise((resolve, reject) => {
    if (isGoingToResolve) {
      resolve("something");
    } else {
      reject("something else");
    }
  })
    .then((response) => {
      // console.log("in my function", response);
      return response;
    })
    .catch((error) => {
      console.log("in my function", error);
    });
  // console.log(pro.then((res) => console.log(res)));
  return pro;
}

doSomething().then((response) => {
  // console.log("in my main call", response);
});

// console.log([1, 2, 3, 1].findLastIndex((val) => val === 1));

//151 Pluralize!
function pluralize(arr) {
  const nonDuplicateArr = [...new Set(arr)];
  return nonDuplicateArr.map((val) => {
    const count = arr.reduce((acc, o) => {
      if (o == val) {
        // console.log(acc);
        return acc + 1;
      }
      return acc;
    }, -1);
    console.log(count);
    if (count > 1) {
      return val + "s";
    }
    return val;
  });

  // return arr.map((val, i) => {
  //   if (arr.findLastIndex((o) => o === val) != i) {
  //     console.log(
  //       i,
  //       arr.findLastIndex((o) => o === val)
  //     );
  //     return val + "s";
  //   }
  //   return val;
  // });
}
console.log(pluralize(["cow", "pig", "cow", "cow"]));
console.log(pluralize(["table", "table", "table"]));
console.log(pluralize(["chair", "pencil", "arm"]));

//151 Get Students with Names and Top Notes
function getStudentsWithNamesAndTopNotes(students) {
  return students.map((val) => {
    // console.log(Math.max(val.notes);
    let maxNotes = Math.max(...val.notes);
    if (maxNotes > 0) {
      maxNotes = maxNotes;
    } else maxNotes = 0;
    return { name: val.name, topNotes: maxNotes };
  });
}
console.log(
  getStudentsWithNamesAndTopNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Max", notes: [1, 4, 6] },
    { name: "Zygmund", notes: [1, 2, 3] },
  ])
);

console.log(Math.max(...[]));

//152 Recursion: Palindrome Word

function isPalindrome(wrd) {
  // your recursive solution here
  function recursion(str) {
    if (str == "") return "";
    return recursion(str.substr(1)) + str[0];
  }
  return recursion(wrd) == wrd;
}
console.log(isPalindrome("madam"));

console.log(isPalindrome("adieu"));

console.log(isPalindrome("rotor"));

//153.Find the Largest Prime within a Range

function fatPrime(a, b) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  const primeArr = new Array(max).fill(true);
  for (let i = 2; i * i <= max; i++) {
    if (primeArr[i] === true) {
      for (let j = i * i; j <= max; j = j + i) {
        primeArr[j] = false;
      }
    }
  }
  // console.log(primeArr, min, max);
  return Math.max(
    ...primeArr
      .map((val, i) => {
        // console.log(val, i);
        if (val && i > min && i < max) {
          // console.log("inside if");
          return i;
        }
      })
      .filter((val) => val)
  );
  // return primeArr.at(-1);
}

console.log(fatPrime(2, 10));
// range [2, 3, 4, 5, 6, 7, 8, 9, 10] and the largest prime is 7.

console.log(fatPrime(10, 2));
// [10, 9, 8, 7, 6, 5, 4, 3, 2] and the largest prime is 7.

console.log(fatPrime(4, 24));
// range [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] the largest prime is 23

//154 Apocalyptic Numbers

function apocalyptic(n) {
  const index = String(2n ** BigInt(n))
    .split("")
    .findIndex(
      (val, i, arr) => val == "6" && arr[i + 1] == "6" && arr[i + 2] == "6"
    );
  if (index == -1) return "Crisis averted. Resume sinning.";
  return `Repent! ${index} days until the Apocalypse! `;
}
console.log(apocalyptic(109));

console.log(apocalyptic(157));
// 2^157 -> 182687704666362864775460604089535377456991567872
// 666 at 10th position (index 9)

console.log(apocalyptic(175));

console.log(apocalyptic(220));

//155 Catalan Number

function getCatalanNumber(n) {
  function factorial(n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return n * factorial(n - 1);
  }
  const fact = factorial(2 * n);
  if (fact == 0) return 0;
  const factPlusOne = factorial(n + 1);
  console.log(fact, factPlusOne);
  return fact / (factPlusOne * factorial(n));
}

console.log(getCatalanNumber(0));

console.log(getCatalanNumber(6));

console.log(getCatalanNumber(8));

//156 Expand a Number I
function expandedForm(num) {
  let n = num,
    len = String(num).length,
    rem;
  const arr = [];
  // for (let i = len - 1; i > 0; i--) {
  //   rem = n % 10 ** i;
  //   arr.push(n - rem);
  //   n = rem;
  // }
  while (String(n).length - 1 >= 1) {
    // console.log(String(n).length - 1, n, rem);
    // if (n < 10) {
    //   console.log("inside if");
    //   arr.push(n);
    // }
    rem = n % 10 ** (String(n).length - 1);
    arr.push(n - rem);
    n = rem;
  }
  // console.log(n);
  arr.push(n);
  return arr;
}

console.log(expandedForm(70304));

console.log(expandedForm(1037903));
console.log(expandedForm(802539));

// console.log("a".charCodeAt(0) - 96, "m".charCodeAt(0) - 96);

//157 Digital Cipher
function digitalCipher(message, key) {
  const charCodeArr = message.split("").map((val) => val.charCodeAt(val) - 96);
  const keyArr = String(key).split("");
  charCodeArr;
  const keyAlteredArr = [];

  for (let i = 0; i < message.length; i++) {
    let a = i;
    if (a >= String(key).length) {
      a = i - String(key).length;
    }
    // console.log(a);
    keyAlteredArr.push(+keyArr[a]);
  }
  // console.log(keyAlteredArr, charCodeArr);
  return keyAlteredArr.map((val, i) => val + charCodeArr[i]);
}

console.log(digitalCipher("scout", 1939));
// digitalCipher("scout", 1939) ➞ [20, 12, 18, 30, 21]

console.log(digitalCipher("mubashir", 1990));

console.log(digitalCipher("edabit", 100));

//158 Building a Staircase

function buildStaircase(height, block) {
  const arr = [];
  for (let i = 0; i < height; i++) {
    const innerArr = [];
    for (let j = 0; j <= i; j++) {
      innerArr.push(block);
    }
    for (let j = i + 1; j < height; j++) {
      innerArr.push("_");
    }
    arr.push(innerArr);
  }
  return arr;
}

console.log(buildStaircase(3, "#"));

console.log(buildStaircase(4, "#"));

console.log(buildStaircase(3, "A"));

// height = 3 and building block = "A"

console.log(buildStaircase(4, "$"));

//159 Scoring a Field Goal

function isGoalScored(goal) {
  const slicedArr = goal.slice(0, 3);
  const mappedArr = slicedArr.map((val) => val[0].trim().split("").slice(1, 6));
  return mappedArr.flat().includes("0");
}

console.log(
  isGoalScored([
    ["  #    0#  "],
    ["  #    0#  "],
    ["  #     #  "],
    ["  #######  "],
    ["     #     "],
    ["     #     "],
    ["     #     "],
  ])
);
console.log(
  isGoalScored([
    ["  #0    #  "],
    ["  #     #  "],
    ["  #     #  "],
    ["  #######  "],
    ["     #     "],
    ["     #     "],
    ["     #     "],
  ])
);

console.log(
  isGoalScored([
    ["  #     #  "],
    ["  #     #  "],
    ["  #     # 0"],
    ["  #######  "],
    ["     #     "],
    ["     #     "],
    ["     #     "],
  ])
);

//160 Sum of Prime Numbers

function sumPrimes(arr) {
  return arr.reduce((acc, val) => {
    // console.log(val);
    for (let j = 2; j < val; j++) {
      if (val % j == 0) {
        return acc + 0;
      }
    }
    acc = acc + val;
    // console.log(val);
    return acc;
  }, 0);
}

console.log(sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumPrimes([2, 3, 4, 11, 20, 50, 71]));

console.log(sumPrimes([]));

//161 The Secret Bases of Words

function wordToDecimal(word) {
  const base = word.split("").reduce((acc, val) => {
    const valCharCode = val.toLowerCase().charCodeAt(0) - 86;
    // console.log(valCharCode);
    if (valCharCode >= acc) return valCharCode;
    else return acc;
  }, 0);
  return parseInt(word, base);
}

console.log(wordToDecimal("Edabit"));
// The highest letter of "Edabit" in the alphabet is "T"
// "T" is the 20th letter of the alphabet: adding 10 the result is 30
// "Edabit" in base-30 is equal to 351010469 in base-10

console.log(wordToDecimal("JavaScript"));
// The highest letter of "JavaScript" in the alphabet is "v"
// "v" is the 22nd letter of the alphabet: adding 10 the result is 32
// "JavaScript" in base-32 is equal to 680575028284221 in base-10

console.log(wordToDecimal("ZERO"));

// class Rectangle {
//   constructor(h, w) {
//     this.hei = h;
//     this.wid = w;
//   }
//   get perimeter() {
//     return this.perimeter();
//   }
//   perimeter() {
//     return 2 * (this.hei + this.wid);
//   }
// }
// const rect = new Rectangle(5, 10, 15);
// rect.hei = 2;
// console.log(rect, rect.perimeter());
// const arr = [[{ name: 4 }], [{ name: 5 }], [{ name: 6 }]];
// console.log(
//   arr.map((val) => {
//     console.log(val.find((o) => o.name > 5));
//     return val.find((o) => o.name > 5) ? "Found" : "not Found";
//   })
// );

// function dummy() {
//   console.log(this);
// }
// dummy();

//161 Smiley Faces :)
function happinessNumber(s) {
  // console.log(s);
  return s.split("").reduce((acc, val, i, arr) => {
    const res = val + arr?.[i + 1];
    // console.log(res);
    if (res == ":)" || res == "(:") {
      return (acc = acc + 1);
    } else if (res == "):" || res == ":(") {
      return (acc = acc - 1);
    } else {
      return acc;
    }
  }, 0);
}

console.log(happinessNumber(":):("));

console.log(happinessNumber("(:)"));

console.log(happinessNumber("::::"));

//162 Pokemon Damage Calculator
function calculateDamage(yourType, opponentType, attack, defense) {
  let damage = (attack / defense) * 50,
    eff;
  function effGenerator(firstType, secondType) {
    switch (firstType) {
      case "fire": {
        if (secondType == "water") return 0.5;
        if (secondType == "grass") return 2;
        if (secondType == "electric") return 1;
      }
      case "water": {
        if (secondType == "grass") return 0.5;
        if (secondType == "electric") return 2;
        if (secondType == "fire") return 2;
      }
      case "grass": {
        if (secondType == "electric") return 1;
        if (secondType == "fire") return 0.5;
        if (secondType == "water") return 2;
      }
      case "electric": {
        if (secondType == "fire") return 1;
        if (secondType == "water") return 0.5;
        if (secondType == "grass") return 1;
      }
    }
  }

  // if (!(yourType == "fire" || yourType == "water" || yourType == "grass")) {
  //   eff = 1 / effGenerator(opponentType, yourType);
  //   console.log(eff);

  eff = effGenerator(yourType, opponentType);
  return damage * eff;
}
console.log(calculateDamage("fire", "water", 100, 100));

console.log(calculateDamage("grass", "fire", 35, 5));

console.log(calculateDamage("electric", "fire", 100, 100));

//163 3n + 1 Problem (Collatz Conjecture)
function collatz(a, b) {
  function stepsCalc(no) {
    let count = 0,
      i = no;

    while (i > 1) {
      // console.log("");
      if (i % 2 == 0) {
        i = i / 2;
        count++;
      } else if (i % 2 !== 0) {
        i = i * 3 + 1;
        count++;
      }
      // console.log(count);
    }
    return count;
  }
  console.log(stepsCalc(a), stepsCalc(b));
  return stepsCalc(a) < stepsCalc(b) ? "a" : "b";
}

console.log(collatz(10, 15));
// Because 10.0 - 5.0 - 16.0 - 8.0 - 4.0 - 2.0 - 1.0: 6 steps
// 15.0 - 46.0 - 23.0 - 70.0 - 35.0 - 106.0 - 53.0 - 160.0 - 80.0 - 40.0 - 20.0 - 10.0 - 5.0 - 16.0 - 8.0 - 4.0 - 2.0 - 1.0: 17 steps

console.log(collatz(13, 16));

console.log(collatz(53782, 72534));

//164 Modify Words
function editWords(arr) {
  return arr.map((val) => {
    const arrays = val
      .split("")
      .reverse()
      .map((o) => o.toUpperCase());
    arrays.splice(Math.ceil(arrays.length / 2), 0, "-");
    return arrays.join("");
    // return arrays.splice(3, 0, "-");
  });
}
console.log(editWords(["new york city"]));

console.log(editWords(["null", "undefined"]));

console.log(editWords(["hello", "", "world"]));

console.log(editWords([""]));

console.log("A".charCodeAt(0) - 65);

//165  Phone Number Word Decoder
function textToNum(phone) {
  function convertAlphaToNo(a) {
    const code = a.charCodeAt(0) - 65;
    if (code % 3 == 0) {
      return code / 3 + 1;
    } else {
      return Math.floor(code / 3) + 2;
    }
  }
  return phone
    .split("")
    .map((val) => {
      // console.log(val, +val);
      if (val == "(" || val == ")" || val == "-") return val;
      else if (!+val) {
        return convertAlphaToNo(val);
      } else {
        return val;
      }
    })
    .join("");
  // .join("");
}
console.log(textToNum("123-647-EYES"));
// ➞ "123-647-3937"

console.log(textToNum("(325)444-TEST"));
// ➞ "(325)444-8378"

console.log(textToNum("653-TRY-THIS"));
//  ➞ "653-879-8447"

console.log(textToNum("435-224-7613"));

//166 Factor Tractor

//167 Filter Primes from an Array

function filterPrimes(num) {
  return num.filter((val) => {
    for (let i = 2; i < val; i++) {
      if (val % i == 0) {
        return false;
      }
    }
    return true;
  });
}

console.log(filterPrimes([7, 9, 3, 9, 10, 11, 27]));
//  [7, 3, 11]

console.log(filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]));
//  [10007, 1009]

console.log(
  filterPrimes([
    1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097,
  ])
);
//  [1009, 3, 61, 1087, 1091, 1093, 1097]

//168 Average Word Length
function averageWordLength(str) {
  const regex = /[a-z ]/g;
  // console.log(str.toLowerCase());
  const strArr = str.toLowerCase().match(regex).join("").split(" ");
  const sumOfEachWords = strArr.reduce((acc, val) => {
    return acc + val.length;
  }, 0);
  return Number.parseFloat(sumOfEachWords / strArr.length);
  // console.log(strArr);
}
console.log(averageWordLength("A B C."));
// 1.00

console.log(averageWordLength("What a gorgeous day."));
// 4.00

console.log(averageWordLength("Dude, this is so awesome!"));
