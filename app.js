  
// const compareArr = (prev_index, next_index) =>
// {
//     if( prev_index > next_index) return 1;
//     if( prev_index == next_index) return 0;
//     if( prev_index < next_index) return -1;
// }
 
 
// const methods = {
//     getMaxSubSum_N2: 
//         function getMaxSubSum_N2(arr) {
//             let sum = 0;
//             let max_sum = 0; 
    
//             for (let i = 0; i < arr.length; i++) {
//                  for (let j = i; j < arr.length; j++) {
//                  sum += arr[j];
//                  // max_sum = Math.max(max_sum, sum);
//                 if(sum > max_sum) {
//                     max_sum = sum;
//                 }else {
//                     sum = 0;
//                     }
//                 }
//             }
//         console.log(max_sum);
//     },
 
//     getMaxSubSum_N: 
//     function getMaxSubSum_N(arr) {
//         let sum = 0;
//             let max_sum = 0; 
 
//             for(let i = 0; i<arr.length; i++){
//                 sum += arr[i];
//                 if(sum > max_sum) {
//                     max_sum = sum;
//                 }else
//                 {
//                     sum = 0;
//                 }
//             }
 
//         console.log(max_sum);
//     },
 
//     getMinValue:
//     function getMinValue(arr){
//         let min_value = arr[0];
//             let max_value = arr[0];
        
//             for(let i = 1; i< arr.length; i++)
//             {
//                 if(arr[i]<min_value) {
//                     min_value = arr[i];
//                 }
//             }
//         console.log(min_value);
//     }, 
 
//     getMaxValue:
//     function getMaxValue(arr) {
//         let max_value = arr[0];
//         for(let i = 1; i< arr.length; i++)
//         {
//             if(arr[i]>max_value) {
//                 max_value = arr[i];
//             }
//         }
 
//         console.log(max_value);
//     },
 
//     searchOfMediana:
//     function searchOfMediana(arr) {
//         let mediana = 0;
//         if(arr.length % 2 == 0) {
//             mediana = (arr[arr.sort(compareArr).length/2] + arr[arr.sort(compareArr).length/2 - 1])/2;    
//         }else if(arr.length % 2 !== 0) {
//             mediana = arr[arr.sort(compareArr).length/2 - 0.5];
//         }
//         // console.log(arr.sort(compareArr) +  " " + "med" + " " + mediana);
//         console.log(mediana);
//     }
 
// }
 
// let arr = [1, 89, -98, 64, 57, -54];
// methods.getMaxSubSum_N(arr);
// methods.getMaxSubSum_N2(arr);
// methods.getMaxValue(arr);
// methods.getMinValue(arr);
// methods.searchOfMediana(arr);

 
/**********************************************TASK2****************************************************************/
/*Date Display Formatter 
 
Разработать объект для форматирования дат (объект содержащий набор функций). Объект должен позволять обрабатывать входные данные
в виде строки или в виде числа (ticks, ms). 
Объект должен поддерживать возможность передачи внутрь регулярного выражения
для разбора исходной строки и построения выходной строки. 
 
Например: 
“31102011” => “31-10-2011” 
“31102011” => “31 October 2011” 
(“20130431”, “YYYYMMDD”) => 31 April 2013 
(“20130431”, “YYYYMMDD”, “MM-DD-YYYY”) => 04-31-2013 
(“2013-04-31”, “YYYY-MM-DD”).fromNow() => 2 years ago 
 
Реализовать как можно больше прикладных конверсий.  */
 

 
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
//                'Augest', 'September', 'October', 'November', 'December'];
 
// const dataFormatter = {
//     myDate: 
//     function myDate(mydate) {
//         let year = mydate.getFullYear();
//         let month = months[mydate.getMonth()];
//         if(month < 10) {
//             month = '0' + month;
//         }
//         let day = mydate.getDate();
//         if(day < 10) {
//             day = '0' + day;
//         }
    
//         console.log(year, month, day);
//     },
 
//     myDateWith: 
//     function myDateWith(mydate) {
//         let year = mydate.getFullYear();
//         let month = mydate.getMonth() + 1;
//         if(month < 10) {
//             month = '0' + month;
//         }
//         let day = mydate.getDate();
//         if(day < 10) {
//             day = '0' + day;
//         }
    
//         console.log(year + "-" + month + "-" + day);
//     },
 
//     myDateWithSlesh:
//     function myDateWithSlesh(mydate) {
//         let year = mydate.getFullYear();
//         let month = mydate.getMonth() + 1;
//         if(month < 10) {
//             month = '0' + month;
//         }
//         let day = mydate.getDate();
//         if(day < 10) {
//             day = '0' + day;
//         }
     
//         console.log(year + "/" + month + "/" + day);
//     },
 
//     myDateReverse:
//     function myDateReverse(mydate) {
//         let year = mydate.getFullYear();
//         let month = months[mydate.getMonth()];
//         if(month < 10) {
//             month = '0' + month;
//         }
//         let day = mydate.getDate();
//         if(day < 10) {
//             day = '0' + day;
//         }
     
//         console.log(day, month, year);
//     }, 
 
//     myDateWithReverse:
//     function myDateWithReverse(mydate){
//         let year = mydate.getFullYear();
//         let month = mydate.getMonth() + 1;
//         if(month < 10) {
//             month = '0' + month;
//         }
//         let day = mydate.getDate();
//         if(day < 10) {
//             day = '0' + day;
//         }
     
//         console.log(day + "-" + month + "-" + year);
//     },
 
//     myDateWithSleshReverse:
//     function myDateWithSleshReverse(mydate) {
//         let year = mydate.getFullYear();
//         let month = mydate.getMonth() + 1;
//         if(month < 10) {
//             month = '0' + month;
//         }
//         let day = mydate.getDate();
//         if(day < 10) {
//             day = '0' + day;
//         }
     
//         console.log(day + "/" + month + "/" + year);
//     },
 
//     myDateMonthIsTheFirstReverse:
//     function myDateMonthIsTheFirstReverse(mydate) {
//         let year = mydate.getFullYear();
//         let month = mydate.getMonth() + 1;
//         if(month < 10) {
//             month = '0' + month;
//         }
//         let day = mydate.getDate();
//         if(day < 10) {
//             day = '0' + day;
//         }
     
//         console.log(month + "-" + day + "-" + year);
//     },
 
//     myDateFromNow:
//     function myDateFromNow(mydate) {
//         let today = new Date();
//         let todayparse = Date.parse(today);
//         let year = new Date(todayparse).getFullYear();
//         let month = new Date(todayparse).getMonth() + 1;
//         if(month < 10) {
//             month = '0' + month;
//         }
//         let day = new Date(todayparse).getDate();
//         if(day < 10) {
//             day = '0' + day;
//         }
        
//         let enteryear = mydate.getFullYear();
//         let entermonth = mydate.getMonth() + 1;
//         if(entermonth < 10) {
//             entermonth = '0' + entermonth;
//         }
//         let enterday = mydate.getDate();
//         if(enterday < 10) {
//             enterday = '0' + enterday;
//         }
 
//         let diffyear = Math.abs(year - enteryear);
//         let diffmonths = Math.abs(month - entermonth);
//         let diffday = Math.abs(day - enterday);
 
//         console.log("Разница между датами в  " + diffyear + "  год/а  " + diffmonths + "  месяца  " + diffday + "  дня");
 
//     }
 
// }
 
// let str = prompt("Введите дату в формате MM DD YYYY", "09 06 2021");
// let userd = Date.parse(str);
 
// dataFormatter.myDate(new Date(userd));
// dataFormatter.myDateWith(new Date(userd));
// dataFormatter.myDateWithSlesh(new Date(userd));
// dataFormatter.myDateReverse(new Date(userd));
// dataFormatter.myDateWithReverse(new Date(userd));
// dataFormatter.myDateWithSleshReverse(new Date(userd));
// dataFormatter.myDateMonthIsTheFirstReverse(new Date(userd));
// dataFormatter.myDateFromNow(new Date(userd)); 
 
/*************************************************************TASK3************************************************************************************************************/
 
/*Text Formatter 
Написать функцию обработчика входного текста. Функция должна принимать на вход строку, максимальный размер строки (опционально), 
максимальное количество строк (опционально), тип форматирования (“перенос по слову”, “перенос по символу”, “перенос по предложению”, 
“переносов нет” - опционально).  */
// const symbolWrap = () => {
//     let str = prompt("Введите строку", "Кончается лето, кончается лето. И солнце не светит? А прячется где-то!");
//     for(const char of str) {
//         console.log(char)
//     }
// }
 
// const wordWrap = () => {
//     let str = prompt("Введите строку", "Кончается лето, кончается лето. И солнце не светит? А прячется где-то!");
//     let arr = str.split(" ");
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
 
// const runToString = arr => {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
 
// const sentenceWrap = () => {
//     let str = prompt("Введите строку", "Кончается лето, кончается лето. И солнце не светит? А прячется где-то!");
//     let arr = str.split(".").join('*/').split('!').join('*/').split('?').join('*/').split('*/');
//     runToString(arr);
// } 
 
// const getSentence = () => {
//     let str = prompt("Введите строку", "Кончается лето, кончается лето. И солнце не светит? А прячется где-то!");
//     alert(str);
// }
 
// const startWork  = () => {
//     let choice = prompt(`Введите номер нужной Вам функции:
//     1. перенос по слову
//     2. перенос по символу
//     3. перенос по предложению
//     4. показат предложение целиком`, 1);
   
//     switch (choice) {
//     //   case '0':
//     case '1':
//         alert("Вы выбрали перенос по слову :");
//         wordWrap();
//         break;
 
//     case '2':
//         alert("Вы выбрали перенос по символу: ");
//         symbolWrap();
//         break;
//     case '3':
//         alert("Вы выбрали перенос по предложению: ");
//         sentenceWrap();
//         break;
//     case '4': alert("Вот ваше предложение: ");
//             getSentence();
//             break;
//     default:
//         alert( 'Неизвестное значение' );
//     }
 
// }
 
// startWork();
 

/*************************************************************TASK4************************************************************************************************************/
/*
String calculator
Разработать объект содержащий набор методов для выполнения функций калькулятора над числами передаваемыми в строковом представлении. 
Методы должны позволять работать как в целочисленном, так и вещественном формате.  */
 
// function StringCalc() {
 
//     this.operations = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b,
//       "/": (a, b) => a / b,
//       "*": (a, b) => a * b
//     };
  
//     this.calculate = function(str) {
  
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]
  
//       if (!this.operations[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
  
//       return this.operations[op](a, b);
//     }
  
//     this.addMethod = function(name, func) {
//       this.operations[name] = func;
//     };
// }
 
// let newcalc = new StringCalc();
// let usersent = prompt("Введите выражение типа a * b", "13 * 9");
// let result = newcalc.calculate(usersent);
// alert( result );

 
/*************************************************************TASK5************************************************************************************************************/
/*Array Sorter 
Разработать объект сортировщик, позволяющий производить сортировки целочисленных массивов не менее чем 4 способами.  */
 
// const sorter = {
//     sortUp:
//     function sortUp(arr) {
//         arr.sort( (a, b) => a - b )
//         console.log(arr);   
//     },
//     bubbleSort: 
//     function bubbleSort(arr) {
//         for (let i = 0, endI = arr.length - 1; i < endI; i++) {        
//             for (let j = 0, endJ = endI - i; j < endJ; j++) {
//                 if (arr[j] > arr[j + 1]) {
//                     [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 }
//             }
//         }
//     console.log(arr);
//     },
//     sortUpWithoutSort:
//     function sortUpWithoutSort(arr) {
//         let arr2 = arr.slice(0, arr.length);
//         let result = [];
//         arr2.forEach(() => {
//             let minEl = 0;
//             minEl = arr.indexOf(Math.min.apply(Math, arr));
//             result.push(arr[minEl]);
//             arr.splice(minEl, 1);
//         });
//         console.log(result);
//     },
 
//     sortDown: 
//     function sortDown(arr) {
//         arr.sort( (a, b) => b - a)
//         console.log(arr);
//     }
// }
 
// let arr = [66, 90, -99, -99, 98, 0, 6, 89, 46];
// sorter.sortUp(arr);
// sorter.bubbleSort(arr);
// sorter.sortUpWithoutSort(arr);
// sorter.sortDown(arr);


/*************************************************************TASK6************************************************************************************************************/
/*Binary Converter 
Создать объект позволяющий производить конвертацию чисел из двоичной системы исчисления в десятеричную и обратно. 
Числа представлены в виде векторов (массивов чисел, где индекс является разрядом). 
Дополнительно: создать функции для перевода из любой системы в любую. */
 
// let arr = [11, 23, 67, 56, 98];
// let result = arr.map(function(item, index) {
//     return item * Math.pow(10, index);
// });
  
// let decimal = result.reduce((sum, current) => sum + current, 0);
// console.log(decimal);
// let bin = decimal.toString(2);
// console.log(bin);


/*Не знаю почему, но оно не работает
//let sistem = prompt("Введите систему счисления, в которую перевести получившееся число", 2);
 
// const transferBin = (num, cc) => {
    // let str = ""; //строка для записи числа(остатки)
//     while(num > 0) {// пока число больше нуля мы делим и остаток от деления записываем в строку
//         let ost = num % cc;
//         str = String(ost) + str;
//         num / cc;
//     }
//     console.log(str);
// }
 
// transferBin(decimal, sistem);//на этом этапе все ломается*/

