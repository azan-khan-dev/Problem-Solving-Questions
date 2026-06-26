function maxSubArraySum(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // Either extend the previous subarray, or start fresh from current element
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// 6  (subarray [4, -1, 2, 1])