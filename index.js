// // 1-masala
// let text = "Hello world";
// const UpperLowerCase = text => {
//     let upperSum = 0;
//     let lowerSum = 0;

//     for (let i = 0; i < text.length; i++) {
//         let char = text[i];
//         if (char >= 'A' && char <= 'Z') {
//             upperSum++;
//         } else if (char >= 'a' && char <= 'z') {
//             lowerSum++;
//         }
//     }

//     return {
//         upperCase: upperSum,
//         lowerCase: lowerSum
//     };
// }
// let result = UpperLowerCase(text);

// console.log("Bosh harf soni: " + result.upperCase);
// console.log("Kichik harf soni: " + result.lowerCase);

// 2-masala
// const palindromWord = text => {
//     let arr = text.split(' ').filter(num => num === num.split('').reverse().join(''));
//     return arr;
// }
// console.log(palindromWord('bozordan non olib kel'));

// // 3-masala
// let numbers = [1, 2, 3, 4, 5, 6, 2, 3, 4, 7, 8, 2, 3];
// let res = [];

// const numberSum = arg => {
//     let seen = {};

//     arg.forEach(element => {
//         if (seen[element]) { 
//             if (seen[element] === 1) { 
//                 res.push(element);
//             }
//             seen[element]++;
//         } else {
//             seen[element] = 1; 
//         }
//     });

//     return res;
// };

// console.log(numberSum(numbers)); 

// // 4-masala
// function textToBinary(text) {
//     return text.split('').map(char => {
//         let asciiValue = char.charCodeAt(0);
//         return asciiValue.toString(2).padStart(8, '0');
//     }).join(' ');
// }
// let exampleText = "Hello";
// let binaryResult = textToBinary(exampleText);

// console.log(binaryResult);

// // 5-masala
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6));

// // 6-masala
// let num = 123;
// let res = 0;
// const numberSum = arg => {
//     arg.toString().split('').forEach(element => {
//         res += element * 1;
//     });
//     return res;
// };

// console.log(numberSum(num)); 

// // 7-masala
// const morseCode = {
//     '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I',
//     '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
//     '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
//     '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
//     '/': ' '
// };

// function decodeMorse(morseCodeStr) {
//     return morseCodeStr.split(' ').map(code => morseCode[code] || '').join('');
// }

// const morseMessage = '.... . .-.. .-.. --- / .-- --- .-. .-.. -..';
// console.log(decodeMorse(morseMessage)); 

// // 8-masala
// let str = 'hello world';

// const reverseWords = arg => {
//     return arg.split(' ').map(word => {
//         return word.split('').reverse().join('');
//     }).join(' ');
// };

// console.log(reverseWords(str)); 

// // 9-masala
// function tupSon(num) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             count++;
//         }
//     }
//     return count;
// }

// function tupSonRes(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         let divisorsCount = tupSon(num);
//         if (divisorsCount === 2) {
//             console.log(num);
//         }
//     }
// }

// const numbers = [4, 5, 6, 7, 8, 9, 10];
// tupSonRes(numbers); 

// // 10-masala
// function decryptCaesa(text, shift) {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result = '';
//     text = text.toUpperCase();

//     for (let i = 0; i < text.length; i++) {
//         const char = text[i];
//         if (alphabet.includes(char)) {
//             const index = (alphabet.indexOf(char) - shift + 26) % 26;
//             result += alphabet[index];
//         } else {
//             result += char;
//         }
//     }
//     return result;
// }

// const encryptedText = 'Khoor Zruog';
// const shift = 3;
// console.log(decryptCaesa(encryptedText, shift)); 









