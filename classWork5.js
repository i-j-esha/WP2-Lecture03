// Define an array representing an inventory system
const inventory = [
// Type 1: Computers
[
// Item 1: Laptops
["Mac-Book", 10],
// Item 2: Desktops
["Sony-PC", 5]
],
// Type 2: Bags
[
// Item 1: Backpacks
["Porter", 30],
// Item 2: Handbags
["Gucci", 20]
],
// Type 3: Snacks
[
// Item 1: Chips
["Pringles", 50],
// Item 2: Chocolate Bars
["Twix", 40] 
] ];
//Example Accessing specific elements
console.log("Quantity of MAC-BOOK laptop", inventory[0][0][1]); // 10
console.log("Quantity of GUCCI Handbags", inventory[1][1][1]); // 20
console.log("Quantity of TWIX Chocolate Bars", inventory[2][1][1]); // 40
