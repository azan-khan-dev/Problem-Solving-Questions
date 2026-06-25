function twoSum(arr, target) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]]);
              
            }
        }
    }
    return result;
}

console.log(twoSum([2, 7, 11, 15, 4, 6], 9));
