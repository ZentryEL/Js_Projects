function findCommon(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item));
}

// Example
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

console.log(findCommon(a, b)); // [3, 4]