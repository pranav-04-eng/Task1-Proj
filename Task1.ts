import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the string: ", (s: string) => {
    rl.question("Enter the number of positions to rotate: ", (kInput: string) => {
        const k = parseInt(kInput);
        console.log(swapKplacesLeft(s.split(''), k).join(''));
        rl.close();
    });
});

function swapKplacesLeft(arr: string[], k: number): string[] {
    rev(arr, 0, k - 1);
    rev(arr, k, arr.length - 1);
    rev(arr, 0, arr.length - 1);
    return arr;
}

function rev(arr: string[], start: number, end: number): void {
    while (start <= end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
