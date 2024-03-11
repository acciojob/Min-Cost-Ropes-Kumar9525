function mincost(arr) {
    let minCost = 0;
  
    // Sort the array of rope lengths in non-decreasing order
    arr.sort((a, b) => a - b);
  
    // Loop until there is only one rope left
    while (arr.length > 1) {
        // Connect the two smallest ropes
        let sum = arr[0] + arr[1];
        minCost += sum;
        
        // Remove the two smallest ropes and insert the sum
        arr.splice(0, 2, sum);
  
        // Re-sort the array after the merge
        arr.sort((a, b) => a - b);
    }
  
    return minCost;
}

module.exports = mincost;

