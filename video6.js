// console.log(binarySearch([3, 5, 6, 7, 9, 11], 7)); // Output: 3

const binarySearch = (arr, target) => {
  let low = 0; // 0 -> 3 ->
  let high = arr.length - 1; // 5 -> 3 ->

  while (low <= high) {
    const mid = Math.floor((high + low) / 2); // 2 -> 4 -> 3
    const guess = arr[mid]; // 6 -> 9 -> 7
    console.log("mid", low, mid, guess);

    // ? target -> 7
    if (guess === target) {
      console.log(mid);
      return mid;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

console.log(binarySearch([3, 5, 6, 7, 9, 11], 7));
