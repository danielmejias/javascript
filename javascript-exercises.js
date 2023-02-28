// EXERCISE #1 - return the lenght of a string
// SOLUTION #1
/*
const getStrNumber = (s) => console.log(s.length);
*/
// SOLUTION #2
/*
const getStrNumber = (s) => {
  let arrStr = [...s];
  let len = 1;
  while (arrStr[len]) {
    len++;
  }
  console.log(len);
};*/
//getStrNumber('12345678')

// EXERCISE #2 - return a part of a string according delimited number input
// SOLUTION #1
/*
const returnStringUntilIndex = (str = "", index = 0) => {
  let arrStr = [...str],
    outString = "",
    i = 0;
  while (i < index) {
    outString += arrStr[i];
    i++;
  }
  console.log(outString);
};
*/
// SOLUTION #2
/*
const returnStringUntilIndex = (str = "", index = 0) => {
  let strOut = str.split('', index).join('');
  console.log(strOut);
};
*/
//returnStringUntilIndex("1234567890", 5);

// EXERCISE #3 - return a array from a string and then separate with comma every element
/*
const strToArray = (str) => console.log(str.split(" "));
*/
//strToArray('hola, que tal ');

// EXERCISE #4 - repeat a text N times depending of a input parameter
/*
const repeatTextNTimes = (textToRepeat = "", timesToRepeat = 0) => {
  for (i = 1; i <= timesToRepeat; i++) {
    console.log(textToRepeat);
  }
};
*/
//repeatTextNTimes("input text to repeat", 5);

// EXERCISE #5 - reverse a string and display the output
// SOLUTION #1
/*
const reverseString = (str='') => {
  console.log(str.split("").reverse().join(""));
};
*/
// SOLUTION #2
/*
const reverseString = (str = "") => {
  let arrStr = [...str],
    outStr = "";
  for (i = arrStr.length - 1; i >= 0; i--) {
    outStr += arrStr[i];
  }
  console.log(outStr);
};
*/
//reverseString("hola mundo");

// EXERCISE #6 - count the number of ocurrences of a word in a phrase
// SOLUTION #1
/*
const countNumberOfRepeatWordInPhrase = (phrase = "", wordToSearch = "") => {
  let phraseAsArray = phrase.split(" "),
    counter = 0;
  for (i = 0; i <= phraseAsArray.length; i++) {
    counter = phraseAsArray[i] == wordToSearch ? counter + 1 : counter;
  }
  console.log(
    `There´s ${counter} ocurrences in "${phrase}", for the word "${wordToSearch}"`
  );
};
*/
//countNumberOfRepeatWordInPhrase("hola mundo adios mundo", "hola");

// EXERCISE #7 - check if a word or a phrase is a palindrome
// SOLUTION #1
/*
const checkIsPalidrome = (word = "") => {
  let arrStr = [...word],
    outStr = "";
  for (let i = arrStr.length - 1; i >= 0; i--) {
    outStr += arrStr[i];
  }
  console.log(word == outStr ? true : false);
};
*/
// SOLUTION #2
/*
const checkIsPalidrome = (word = "") => {
  let outStr = word.split("").reverse().join("");
  console.log(word == outStr ? true : false);
};
*/
//checkIsPalidrome("aab");

// EXERCISE #8 - remove a pattern from a large text ("xyz1,xyz2,xyz3,xyz4 y xyz5") => "1,2,3,4 y 5"
/*
const removeTextFromLargeString = (largeText = "", textToRemove = "") => {
  let outText = largeText.split(textToRemove).join("");
  console.log(outText);
};
*/
//removeTextFromLargeString("xyz1,xyz2,xyz3,xyz4 y xyz5", "xyz");

// EXERCISE #9 - generate ramdom number between 501 and 600
/*
const generateRamdomNumber = (min = 501, max = 600) => {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();
  console.log(rand);

  // multiply with difference
  rand = Math.floor(rand * difference);
  console.log(rand);

  // add with min value
  rand = rand + min;

  console.log(rand);
};
*/
//generateRamdomNumber();

// EXERCISE #10 - evaluate if number is capicua
/*
const isCapicua = (numberToEvaluate = 0) => {
  let strIsCapicua = String(numberToEvaluate).split("").reverse().join("");
  console.log(strIsCapicua == numberToEvaluate ? true : false);
};
*/
//isCapicua(404);

// EXERCISE #11 - get factorial
/*
const getFactorial = (n = 0) => {
  factorial = 1;
  for (i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log("factorial:" + factorial);
};
*/
//getFactorial(5);

// EXERCISE #12 - check if a prime number
/*
const isPrime = (n = 0) => {
  console.log(n % 2 == 0 ? true : false);
};

isPrime(1);
*/

// EXERCISE #13 - check if a number is even or odd
/*
const isEvenOrOdd = (n = 0) => {
  console.log(n % 2 === 0 ? "even" : "odd");
};
*/
//isEvenOrOdd('7')

// EXERCISE #14 - convert Cº to Fº and viceversa
/*
const convertGradious = (temperature = 0, scale = "") => {
  if (scale === "C" || scale === "F") {
    let outTemperature =
      scale == "C"
        ? temperature === 0
          ? 32
          : Math.trunc((temperature * 9) / 5 + 32)
        : temperature === 0
        ? (temperature = -17.7778)
        : Math.trunc((temperature - 32) * (5 / 9));
    console.log(
      `Conversion from ${temperature}º ${
        scale === "C" ? "Celsious" : "Farenheit"
      } is ${outTemperature}º ${scale === "C" ? "Farenheit" : "Celsious"} `
    );
  }
};
*/
// convertGradious(2, "C");

// EXERCISE #15 - convert binary to decimal and viceversa
/*
const convertBinToDecAndDecToBin = (
  numberToConvert = 0,
  baseToConvert = 2 || 10
) => {
  let strBinNum = "",
    outNum = 0,
    arrNum = [];
  if (baseToConvert == 2) {
    outNum = numberToConvert;
    while (outNum >= 1) {
      strBinNum += outNum % 2;
      outNum = Math.floor(outNum / 2);
      strBinNum;
    }
    console.log(
      `Valor decimal -->  ${numberToConvert} Valor binario --> ${strBinNum
        .split("")
        .reverse()
        .join("")}`
    );
  }
  if (baseToConvert == 10) {
    arrNum = n.toString().split("").reverse();
    for (i = 0; i <= arrNum.length - 1; i++) {
      outNum = arrNum[i] * Math.pow(2, i) + outNum;
    }
    console.log(
      `Valor Binario --> ${numberToConvert} Valor Decimal --> ${outNum}`
    );
  } else {
    console.log(
      `Invalid base to convert, founded base ${baseToConvert}, expected binary o decimal base`
    );
  }
};

convertBinToDecAndDecToBin(7, 2);
//convertBinToDecAndDecToBin(10101100, 10);
//convertBinToDecAndDecToBin(101, 10);
*/

// EXERCISE #16 - discount function
/*
const discountFunc = (payment = 0, discount = 0) => {
  console.log(`Total ${payment - discount} discount ${discount}`);
};
discountFunc(1000, 200);
*/

// EXERCISE #17 - get total years from date to now
/*
const getNumbersOfYearsToNow = (dateFrom) => {
  if (dateFrom instanceof Date) {
    let dateNow = new Date(),
      numberOfYears = 0;
    numberOfYears = dateNow.getYear() - dateFrom.getYear();
    console.log(numberOfYears);
  }
};

const date1 = new Date("December 17, 1978 03:24:00");
getNumbersOfYearsToNow(date1);
*/

// EXERCISE #18 - check and count if is vocal or consonant in a word
/*
const countVocalsOrConsonants = (word = "") => {
  if (word) {
    word = word.replace(/ /g, "");
    let arrWord = [...word],
      numberOfVocals = 0,
      numberOfConsonants = 0;
    for (i = 0; i <= arrWord.length - 1; i++) {
      if (
        (arrWord[i].charCodeAt() >= 65 && arrWord[i].charCodeAt() <= 90) ||
        (arrWord[i].charCodeAt() >= 97 && arrWord[i].charCodeAt() <= 122)
      ) {
        if (
          arrWord[i].charCodeAt() == 97 ||
          arrWord[i].charCodeAt() == 101 ||
          arrWord[i].charCodeAt() == 105 ||
          arrWord[i].charCodeAt() == 111 ||
          arrWord[i].charCodeAt() == 117 ||
          arrWord[i].charCodeAt() == 65 ||
          arrWord[i].charCodeAt() == 69 ||
          arrWord[i].charCodeAt() == 73 ||
          arrWord[i].charCodeAt() == 79 ||
          arrWord[i].charCodeAt() == 85
        ) {
          numberOfVocals = numberOfVocals + 1;
        } else {
          numberOfConsonants = numberOfConsonants + 1;
        }
      } else {
        console.log("Not a letter");
        return;
      }
    }
    console.log(
      `Vocales: ${numberOfVocals}, Consonantes: ${numberOfConsonants}`
    );
  }
};
countVocalsOrConsonants("Hola Mundo");
*/

// EXERCISE #19 - check if string is a valid name
/*
const isValidName = (name = "") => {
  let notRegularChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  console.log(notRegularChar.test(name));
};
isValidName("Daniel Mejías");
*/

// EXERCISE #20 - check if string is a valid email
/*
const isValidEmail = (email = "") => {
  let notRegularChar = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
  if (
    !notRegularChar.test(email) &&
    email.indexOf("@") != -1 &&
    email.indexOf(".") != -1 &&
    email.indexOf("@") < email.indexOf(".")
  ) {
    console.log(true);
    return;
  } else {
    console.log(false);
    return;
  }
};
*/
//isValidEmail("jonmircha@gmail.com");

//**********************************
//EXERCISE #TEST - Get the rain (into blank space) according array shape
/*
Array #1 => [0, 2, 4, 0, 2, 1, 2, 6] must return 11
       x
       x
  x____x
  x____x
 xx_x_xx
_xx_xxxx

Array #2 => [3, 0, 0, 2, 0, 4] must return 10
     x
x____x
x__x_x
x__x_x

Array #3 => [1, 2, 1, 2] must return 1
_x_x
xxxx
*/
/*
const getOccurrence = (array, value) => {
  var count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}
const findFirstSecondLargestElem = (arr) => {
  let firstValue = -1, secondValue = -1, firstIndex, secondIndex = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > firstValue) {
      secondValue = firstValue;
      secondIndex = arr.indexOf(secondValue)
      firstValue = arr[i];
      firstIndex = arr.indexOf(firstValue)
      if (getOccurrence(arr, firstValue) > 1) {
        firstIndex = arr.lastIndexOf(firstValue)
        secondValue = firstValue
        secondIndex = arr.indexOf(secondValue)
      }
    }
    else if (arr[i] > secondValue && arr[i] != firstValue) {
      secondValue = arr[i];
      secondIndex = i
    }
  }
  valAndIndex = {
    'firstValue': firstValue,
    'firstIndex': firstIndex,
    'secondValue': secondValue,
    'secondIndex': secondIndex
  }
  return valAndIndex
}
const checkRainInArray = (arreglo = []) => {
  let area = 0, rain = 0, rainArea = 0, i = 0, largeBase = 0, heightBase = 0, indexes = {} = findFirstSecondLargestElem(arreglo)
  //area = arreglo[indexes.secondIndex] * (indexes.firstIndex + 1)
  largeBase = (indexes.firstIndex - indexes.secondIndex) - 1
  heightBase = indexes.secondValue
  area = largeBase * heightBase
  for (i = (indexes.secondIndex + 1); i < indexes.firstIndex; i++) {
    rain += arreglo[i]
  }
  rainArea = area - rain
  return (console.log(`The area cover by rain for the array [${arreglo.join(',')}] is ${rainArea}`))
}
//let arr = [0, 2, 4, 0, 2, 1, 2, 6]
//let arr = [3, 0, 0, 2, 0, 4];
let arr = [1, 2, 1, 2]
checkRainInArray(arr)

*/

//**********************************
//EXERCISE #TEST - Bracket Combinations
/*
()()()
((()))
(()())
(())()
()(())

()()
(())
*/


const checkIsPalidrome = (word = "") => {
  let arrStr = [...word],
    outStr = "";
  for (let i = arrStr.length - 1; i >= 0; i--) {
    outStr += arrStr[i];
  }
  //console.log(word == outStr ? true : false);
  return(word == outStr ? true : false)
};

const recorreArreglo = (arr) => {
  let retorno  = ''
  for (i = 0; i < arr.length; i++) {
    retorno = checkIsPalidrome(arr[i])
    console.log(`Es palindromo: ${retorno} `)
  }
}

recorreArreglo(['aaa','abc'])
