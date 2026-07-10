// when we have more than 3 numbers then we can use the function like this
function getMaxOfMany(...numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }

    }
    return max;

}

const maxValue2 = getMaxOfMany(45, 78, 100, 23, 67);
console.log("The maximum value is: ", maxValue2);