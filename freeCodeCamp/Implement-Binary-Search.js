// Write a function binarySearch that implements the binary search algorithm on an array, returning the path you took (each middle value comparison) to find the target in an array.

// The function takes a sorted array of integers and a target value as input. It returns an array containing (in-order) the middle value you found at each halving of the original array until you found the target value. The target value should be the last element of the returned array. If value not is found, return the string Value Not Found.

// For example, binarySearch([1,2,3,4,5,6,7], 5) would return [4,6,5].

// For this challenge, when halving, you MUST use Math.floor() when doing division: Math.floor(x/2). This will give a consistent, testable path.

// Note: The following array will be used in tests:

// const testArray = [
//   0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 49, 70
// ];

function binarySearch(
  searchList,
  value,
  left = 0,
  right = searchList.length - 1,
  path = []
) {
  let mid = Math.floor((left + right) / 2);
  path.push(searchList[mid]);
  if (searchList[mid] == value) {
    return path;
  }
  if (left >= right) {
    return "Value Not Found";
  }
  if (searchList[mid] > value) {
    return binarySearch(searchList, value, left, mid - 1, path);
  }
  return binarySearch(searchList, value, mid + 1, right, path);
}
