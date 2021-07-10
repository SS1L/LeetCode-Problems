function binarySeacrh(arr, answer) {
    let low = 0;
    let high = arr.length - 1;
    let count = 0;

    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if ( arr[mid]  === answer) {
            count++ 
            return [mid, count]
        } else if ( arr[mid] < answer ){
            count++;
            low = mid + 1;
        } else {
            count++;
            high = mid - 1;
        }
    }
}

let arr = new Array(100);

for (let i = 0; i < arr.length; i++) {
    arr[i] = i;
}

answer = 28;

console.log(binarySeacrh(arr, answer));