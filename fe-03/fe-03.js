// Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем, 
// например: getSum(100) должна передавать сумму чисел от 0 до 100 (должно получится 5050)



function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert(getSum(100));