// // создать функцию, которая выводит в консоль ваше имя. Функция не имеет аргументов.
// function names() {
//     console.log("Anya");
// }
// names();
// //     создать функцию, которая выводит в консоль ваше имя и фамилию. При этом фамилию получает как аргумент имя прописано в теле функции.
// function names2(surname) {
//     console.log("Anya"+surname);
// }
// names2("Didukh");
// //     создать функцию, которая возвращает ваше имя и фамилию. Функция не имеет аргументов.
// function names3() {
//     let t="Anya Didukh";
//     return t
// }
// const result0=names3();
// console.log(result0);
// //     создать функцию, которая возвращает ваше имя и выводит в консоль вашу фамилию. Функция не имеет аргументов.
// function names4() {
//     console.log("Didukh");
//     return "Anya"
// }
// const result01=names4();
// console.log(result01);
// //     создать функцию, которая возвращает ваше имя и выводит в консоль вашу фамилию. Все данные получает через аргументы.
// function names5(name,surname) {
//     console.log(name);
//     return surname
// }
// const res=names5("Anya","Didukh");
// console.log(res);
// //     создать функцию, которая получает значение вашего возраста,умножает его на 2 и возвращает полученый результат.
// function age(ageyou) {
//     return ageyou*2;
// }
// const result=age(18);
// console.log(result);
// //     создать функцию, которая получает 3 числовых аргумента, складывает их и выводит в консоль
// function f(num1,num2,num3) {
//     console.log(num1,num2,num3);
// }
// f(1,4,3);
// // создать функцию, которая получает 3 числовых аргумента, складывает их и выводит в документ
// // function f2(num1,num2,num3) {
// //    document.write(num1,num2,num3);
// // }
// // f2(1,4,3);
// // создать функцию, которая получает 3 числовых аргумента, складывает их и выводит в alert
// // function f3(num1,num2,num3) {
// //     alert(num1,num2,num3);
// // }
// // f3(1,4,3);
// // создать функцию, которая получает 3 числовых аргумента, складывает их и возвращает результат
// function f4(num1,num2,num3) {
//     return (num1,num2,num3)
// }
// const resret= f4(1,4,3);
// console.log(resret);
// // создать функцию, которая получает 4 аргумента. первые три аргумента - числовые, 4й - строка которая характеризирует дествия + - * / %. Результат вернуть.
// function func(num,num1,num2,move) {
// return (num,num1,num2,move)
// }
// const resul=func(1,2,3,"+");
// console.log(resul);
// // создать функцию, которая получает 4 аргумента. первые три аргумента - числовые, 4й - строка которая характеризирует дествия + - * / %. Результат вывести в документ.
// // создать функцию, которая выводит в докуент 3 элемента h2 с произвольным текстом. Аргументов нет.
// function outInDocH2(message){
//
//     const elem= document.createElement("h2");
//     elem.innerHTML= message || "Topic";
//     document.body.appendChild(elem)
//
// }
// console.log(outInDocH2("hhh"));

// //     создать функцию, которая выводит в докуент 3 элемента h2. Текст для элементов получить через аргументы.
// //     создать функцию, которая выводит в докуент N элементов h3 с текстом "hello owu". Количество элементов (N) которые нужно вывести в документ получить через аргументы.
// //     создать массив, создать функцию которая заполняет этот массив пятью числовыми элементами. Аргументов нет
// // создать функцию, которая заполняет массив пятью числовыми элементами. Массив для заполнения получить через аргумент.
// //     Создать 4 функции, каждая из которых выполняет арифметическую операцию с 2я числами (числа принять через аргумент). Создать функцию которая принимает 3 аргумента: 2 - число, 1 -строка, котора характеризирует операцию. При соответветсвующем аргументе сделать вызов одной из 4х функций с операциями и выполнить соответствующее действие. Все результаты во всех функциях возвращать.
// //     создать функцию, которая вычисляет площадь прямоугольника. Результат вернуть
// // создать функцию, которая вычисляет площадь треугольника. Результат вернуть
// // создать функцию, которая вычисляет площадь круга. Результат вернуть
// // создать функцию, которая вычисляет длину коружности. Результат вернуть
// // создать функцию, которая получает строку и возвращает ее длину.
// //     создать функцию, которая получает массив из 2х чисел и меняет их местами.
// //     создать функцию, аналог indexOf(). которая получает стрингу, и букву позицию которой нужно найти и возвращает индекс символа
// // -- приймає три числа та виводить та повертає найменьше.
// // -- приймає три числа та виводить та повертає найбільше.
// // -- приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// // -- виводить масив
// // -- повертає найбільше число з масиву
// // -- повертає найменьше число з масиву
// // -- виводить масив, але напрямок вивденння(сходження\ спадання) визначається колбеком
// // -- приймає масив та число (i). та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// //
// //
// // КЛАСС
// // - створити функцію яка виводить масив
// // - стіорити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// // - --//-- яка знаходить найбільше число в масиві.Для створення масиву використати попередню функцію
// // - --//-- яка скаладає значення елементів масиву та повертає його.
// // - --//-- яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// // Приклад:
// // [1,2,3,4]
// // [2,3,4,5]
// // результат:
// // [3,5,7,9]
// //
// // - --// -- яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // Приклад:
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
// //
// // - создать функцию, аналог lastIndexOf(). которая получает стрингу, и букву позицию которой нужно найти и возвращает последний индекс символа
// // - создать функцию, аналог slice(). которая получает стрингу и 2 числа. Вернуть вырезаный сегмет
// // - создать функцию, аналог replace(). которая получает строку в которой заменять значения, строку которая характеризирует символ. который надо заменить и строку которая характеризирует на что зменить. Вернуть новую полученую строку
// // - создать функцию. если функция принимает 2 аргумента, сложить их. если 3 вычести их. Результат вернуть. Операции сложения и вычитания вынести в отдельные функции
// //
// function calculator(action,x,y) {
//     if(action=="+"){
//         plusator(x,y)
//     }
//     if(action=="-"){
//         vidnimator(x,y)
//     }
// }
// function plusator(a,b) {
//     console.log(a+b);
// }
// function vidnimator(a,b) {
//     console.log(a-b);
// }
// calculator("+",1,2);
// function searchMinWithThreeNumber(a,b,c) {
//     if(a<b && a<c){
//         console.log(a);
//     } else if (b<a && b<c){
//        console.log(b);
//     } else if (c<a && c<b){
//         console.log(c)
//
//     }
// }
// searchMinWithThreeNumber(1,2,3);
// function createMassive(length,min,max) {
//     array=[];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random()*(max-min)+min));
//         console.log(array[i]);
//     }
//     console.log(array);
// }
// createMassive(5,8,89);
// function minmax(a,b) {
//     let min;
//     let max;
//     if(a<b){
//         console.log('min:',min=a);
//     }else if(a>b){
//         console.log('max:',max=a);
//     }
//     if(b<a){
//         console.log('min:',min=b);
//     }else if(a<b){
//         console.log('max:',max=b);
//     }
//     return max;
// }
// const result=minmax(2,3);
// console.log(result);
function min(a,b,c) {
    let min;
    a<b? min=a:min=b;
    min>c? min=c:null
    console.log(min)
    return min;
}
console.log(min(1,5,4));
// function returnMax(array) {
//     let max=array[0];
//     for (const item of array) {
//         if(item>max){
//         iter=max;}
//     }
//     return max;
// }
//
// let myArray=[1,3,4,2,22,333,4];
// console.log(returnMax(myArray));
// function acceptsIndex(array,index) {
//     if(index<array.length){
//         const temp= array[index];
//         array[index]=array[index+1];
//         array[index+1]=temp;
// }
// return array;
// }
// let arr1=[1,4,3,2,3];
// console.log(acceptsIndex(arr1,3));
// arr=[1,2,0,3,0,0,4];
// function f(array) {
//     let array2=[2,4,3]
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         if(array[i]===0){
//             array2.push(array[i]);
//         }
//     }
// return array2;
// }
// console.log(f(arr));
//
// let dog={
//         name:"GAR",
//         age:2,
//         home:"la",
//         skills:3,
//         weight:44
// };
// function obj(objec){
//     let count=0;
//     for(const item of objec) {
//         if(typeof  item ==='Object'){
//         for(const key in item){
//             count++;
//         }
//         }
//     }
//     return count;
// }
// console.log(obj(dog));
let fuc=(a,b)=>{
    return a+b;

}
console.log(fuc(1,2));
