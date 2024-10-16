/**
 * WorkspaceBaseCN 类：适用于中文环境的工作空间子类
 * @author : Horace
 */

function quickSort(arr: number[]): number[] 
    // 如果数组长度小于等于 1，则返回该数组
    if (arr.length <= 1) {
        return arr;
    }

    // 选择基准值（这里选择数组的第一个元素）
    const pivot = arr[0];
    
    // 定义左右两个子数组
    const left: number[] = [];
    const right: number[] = [];

    // 从第二个元素开始，进行比较，分到左右两个子数组中
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // 递归对左右子数组进行快速排序，并将结果合并
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// 测试
const arr = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(arr));  // 输出: [1, 1, 2, 3, 6, 8, 10]
