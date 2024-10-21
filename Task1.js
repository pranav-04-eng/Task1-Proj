"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the string: ", function (s) {
    rl.question("Enter the number of positions to rotate: ", function (kInput) {
        var k = parseInt(kInput);
        console.log(swapKplacesLeft(s.split(''), k).join(''));
        rl.close();
    });
});
function swapKplacesLeft(arr, k) {
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
    return arr;
}
function reverse(arr, start, end) {
    while (start <= end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
