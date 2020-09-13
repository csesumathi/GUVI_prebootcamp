var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < numsArr.length; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

//02 Write a code to print the numbers in the array
//Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] + "," 
}
console.log(new_string);

/* Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
Output: 11 10 9 8 7 6 5 4 3 2 1 */

var new_string = "";
var numsArr=[1,2,3,4,5,6,7,8,9,10,11];
 
for (var i = numsArr.length-1; i >= 0; i--) {
 new_string += numsArr[i] +" "
}
console.log(new_string.trim());