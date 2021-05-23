/*Дана строка с пробелами по краям. 
➢	Реализуйте функцию ltrim, которая будет убирать пробелы слева. 
➢	Реализуйте функцию rtrim, которая будет убирать пробелы справа. 
➢	Реализуйте функцию trim, которая будет убирать пробелы по концам строки.*/


//1
/*
let Space = '         Hello Kitty          ';
console.log(Space);
console.log(Space.trim());
console.log(Space.trimLeft());
console.log(Space.trimRight());
*/


//2
/*
let a = '         Hello Kitty          ';

function deleteSpaces(arg) {
    let argSplitted = arg.split(' ');
    do { argSplitted.shift() } while (argSplitted[0] === "");
    do { argSplitted.pop() } while (argSplitted[argSplitted.length - 1] === "");
    return argSplitted.join(' ');
}
console.log(a);
console.log(deleteSpaces(a));
*/

let a = '         Hello Kitty          '

function trim(str, chars) {
    return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}
console.log(a);
console.log(trim(a));
console.log(ltrim(a));
console.log(rtrim(a));