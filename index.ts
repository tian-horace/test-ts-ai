console.log('Hello, 大雪连!');
console.log('Hello, 大雪连!')

function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (const element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// 示例使用
const arr = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(arr))// 输出: [1, 1, 2, 3, 6, 8, 10]