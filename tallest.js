const heights = [150, 160, 360, 180, 190];

const tallest = Math.max(...heights);
console.log("The tallest person is: ", tallest);

// another way to find the tallest person
function getTallest(heights) {
    let max = heights[0];
    for (let i = 1; i < heights.length; i++) {
        if (heights[i] > max) {
            max = heights[i];
        }
    }
    return max;
}

const tallest2 = getTallest(heights);
console.log("The tallest person is: ", tallest2);