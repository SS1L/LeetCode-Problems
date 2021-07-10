function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if(arr[min] > arr[j]) min = j
        }
        
        if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr;
}

let arr = [23, 4, 12 , 24, 1, 9, 12]

console.log(selectionSort(arr));