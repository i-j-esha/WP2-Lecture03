const countries = [
["Japan", "Tokyo"],
["South Korea" , "Seoul"],
["Indonesia" , "Jakarta" ], ];
// Print specific element (Tokyo) using array indexing
console.log(countries[0][1]); // Tokyo (specific element’s index)
// Print specific element (South Korea) using array indexing
console.log(countries[1][0]); // South Korea (specific element’s index)
// Print third elements (Indonesia" , "Jakarta) of the array
console.log(countries[2]); // ["Indonesia" , "Jakarta"] (third element's index)
// Print length of the outer array (number of countries)
console.log(countries.length); // 3
// Print length of the inner array at indes 1 (number of elements within "South Korea","Seoul")
console.log(countries[1].length); // 2