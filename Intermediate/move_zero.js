function moveZeroes(arr) {
    let index = 0;

    for (let num of arr) {
        if (num !== 0) {
            arr[index++] = num;
        }
    }

    while (index < arr.length) {
        arr[index++] = 0;
    }

    return arr;
}

console.log(moveZeroes([0,1,0,3,12]));
