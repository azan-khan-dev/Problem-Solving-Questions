function findCommon(arr1, arr2, arr3) {
    let count = {};

    for (let i = 0; i < arr1.length; i++) {
        count[arr1[i]] = 1;
    }

    for (let i = 0; i < arr2.length; i++) {
        if (count[arr2[i]] === 1) {
            count[arr2[i]] = 2;
        }
    }

    let result = [];
    for (let i = 0; i < arr3.length; i++) {
        if (count[arr3[i]] === 2) {
            result.push(arr3[i]);
            count[arr3[i]] = 0; 
        }
    }

    return result;
}

console.log(findCommon([1, 2, 3, 4], [3, 4, 5, 6], [3, 4, 7, 8]));


console.log(findCommon([1, 2, 3], [2, 3, 4], [3, 4, 5]));
