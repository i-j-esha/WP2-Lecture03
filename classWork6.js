// Arrays: Class Exercise/Activity 3

// 1. Create 1D array with these data elements
let numbers = [6, 3, 20, 70, 10, 2];

// 2. Print them all
console.log("Original array:");
console.log(numbers.join(", "));

// 3. Sort them in ascending order by comparing adjacent elements and swapping
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {
      // Swap
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

// 4. Print them all again
console.log("Sorted array (ascending):");
console.log(numbers.join(", "));

// 5. Print first element only - which item is it going to be?
console.log("First element after sorting:");
console.log(numbers[0]);