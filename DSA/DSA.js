"use strict";

function isSquared(arr1, arr2) {
  // ! 1. tIME cOMPLEXITY O(n * log n)
  // arr1.sort();
  // arr2.sort();
  // for (let i = 0; i < arr1.length; i++) {
  //   if (!(arr2[i] === arr1[i] * arr1[i])) {
  //     return false;
  //   }
  // }
  // return true;

  // ! 2. tIME cOMPLEXITY O(n^2)
  // if (arr1.length != arr2.length) {
  //   return false;
  // }
  // for (let val of arr1) {
  //   let correctIndex = arr2.indexOf(val * val);
  //   if (correctIndex == -1) {
  //     return false;
  //   }
  //   arr2.splice(correctIndex, 1);
  // }
  // return true;

  // ! 3. tIME cOMPLEXITY O(n)

  const frequencyCounter1 = {},
    frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1, frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(isSquared([1, 2, 3], [9, 4, 1]));

// * 2.Anagram using   frequency counter approach

function isAnagram(str1, str2) {
  // TODO 1.Check whether every characters in string one is present in second string
  // TODO 2.Check the frequency of that character in second string

  // const frequencyCounter1 = {},
  //   frequencyCounter2 = {};
  // if (str1.length !== str2.length) {
  //   return false;
  // }
  // for (let i = 0; i < str1.length; i++) {
  //   frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
  //   frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1;
  // }

  // for (let key in frequencyCounter1) {
  //   if (!(key in frequencyCounter2)) {
  //     return false;
  //   }
  //   if (frequencyCounter1[key] != frequencyCounter2[key]) {
  //     return false;
  //   }
  // }
  // return true;

  const frequencyCounter1 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
    // frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!frequencyCounter1[str2[i]]) {
      return false;
    } else {
      frequencyCounter1[str2[i]] -= 1;
    }
  }
  return true;
}
console.log(isAnagram("aaz", "zza"));
console.log(isAnagram("iceman", "manice"));
console.log(isAnagram("", ""));
console.log(isAnagram("anagram", "nagaram"));
console.log({ a: 1 }.length, "".length);

function countUniqueValues(arr) {
  let count = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    if (arr[i] == arr[j]) {
      count--;
    }
  }
  return count;
}
console.log(countUniqueValues([1, 1, 2, 2, 3, 4, 5]));
console.log(countUniqueValues([1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 85]));

// ! Window slider

function maxSubarraySum(arr, num) {
  // * naive approach
  // if (num > arr.length) return null;
  // let max = -Infinity;
  // for (let i = 0; i < arr.length - num + 1; i++) {
  //   temp = 0;
  //   for (let j = 0; j < num; j++) {
  //     temp += arr[i + j];
  //   }
  //   if (temp > max) {
  //     max = temp;
  //   }
  // }
  // return max;

  // * Window slider
  let tempSum = 0,
    maxSum;
  if (num > arr.length) return null;
  for (let j = 0; j < num; j++) {
    tempSum += arr[j];
  }
  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5], 2));

function sameFrequency(num1, num2) {
  // * Frequency counter

  const arr1 = Array.from(String(num1)),
    arr2 = Array.from(String(num2)),
    frequencyCounter1 = {},
    frequencyCounter2 = {};

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    // console.log(val, typeof val);
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1, frequencyCounter2, arr1, arr2);
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] != frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222));

function areThereDuplicates(...rest) {
  // * Frequency counter
  // const frequencyCounter = {};
  // for (let val of rest) {
  //   frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  // }

  // for (let key in frequencyCounter) {
  //   if (frequencyCounter[key] > 1) return true;
  // }
  // return false;

  // * multiple pointer approach
  for (let i = 0; i < rest.length; i++) {
    let j = i + 1;
    rest.sort();
    if (rest[i] == rest[j]) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

function averagePair(arr, avg) {
  // let totalSum = avg * 2,
  //   i = 0,
  //   j = arr.length - 1,
  //   sum = 0;

  // while (i < j) {
  //   sum = arr[i] + arr[j];
  //   if (sum == totalSum) {
  //     return true;
  //   } else if (sum > totalSum) {
  //     j--;
  //   } else {
  //     i++;
  //   }
  // }
  // return false;
  let sum = 0,
    left = 0,
    right = arr.length - 1,
    div;
  sum = arr.reduce((acc, cur) => acc + cur, 0);
  while (left <= right) {
    div = right - left + 1;
    if (sum / div === avg) return true;
    else if (sum / div < avg) {
      sum -= arr[left];
      left++;
    } else {
      sum -= arr[right];
      right--;
    }
  }
  return false;
}
console.log("averagePair");
console.log(averagePair([1, 2, 3], 2.5)); // true

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4));

function isSubsequence(str1, str2) {
  // * multipointer approach
  // let i = 0,
  //   j = 0;

  // if (str1.length == 0) return true;
  // if (str2.length == 0) return false;

  // while (j < str2.length) {
  //   if (i == str1.length - 1) return true;

  //   if (str1[i] == str2[j]) {
  //     i++;
  //   }
  //   j++;
  // }
  // if (i == str1.length) return true;
  // return false;

  // * recursive approach
  if (str1.length == 0) return true;
  if (str2.length == 0) return false;
  if (str1[0] == str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

function maxSubarraySumMulti(arr, count) {
  let tempSum = 0,
    maxSum = 0;
  if (arr.length < count) return false;
  for (let i = 0; i < count; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = count; i < arr.length; i++) {
    tempSum = tempSum - arr[i - count] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySumMulti([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySumMulti([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySumMulti([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySumMulti([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySumMulti([2, 3], 3));

function minSubArrayLen(arr, sum) {
  // let sum1 = 0,
  //   sum2 = 0,
  //   sum3 = 0,
  //   sum4 = 0,
  //   i = 0,
  //   j = arr.length - 1,
  //   mid1 = Math.floor(arr.length / 2),
  //   mid2 = Math.floor(arr.length / 2),
  //   length1 = Infinity,
  //   length2 = Infinity,
  //   length3 = Infinity,
  //   length4 = Infinity,
  //   min = Infinity;
  // if (arr.some((val) => val >= totalSum)) {
  //   return 1;
  // }
  // while (i < arr.length && j > 0) {
  //   sum1 += arr[i];
  //   sum2 += arr[j];
  //   sum3 += arr[mid1];
  //   sum4 += arr[mid2];
  //   if (sum1 >= totalSum) {
  //     length1 = i + 1;
  //   }
  //   if (sum2 >= totalSum) {
  //     length2 = arr.length - j;
  //   }
  //   if (sum3 >= totalSum) {
  //     length3 = Math.floor(arr.length / 2) + 1 - mid1;
  //   }
  //   if (sum4 >= totalSum) {
  //     length4 = mid2 - Math.floor(arr.length / 2) + 1;
  //   }
  //   min = Math.min(length1, length2, min, length3, length4);
  //   i++;
  //   j--;
  //   mid1--;
  //   mid2++;
  // }
  // if (min === Infinity) return 0;
  // return min;
  // let curSum,
  //   left = 0,
  //   right = arr.length - 1,
  //   minLength = arr.length;
  // curSum = arr.reduce((acc, val) => acc + val, 0);
  // console.log(curSum);
  // if (curSum < sum) {
  //   return 0;
  // }
  // while (left <= right) {
  //   if (curSum >= sum) {
  //     minLength = Math.min(minLength, right - left + 1);
  //   }
  //   if (curSum - arr[left] >= curSum - arr[right]) {
  //     curSum -= arr[left];
  //     left++;
  //   } else {
  //     curSum -= arr[right];
  //     right--;
  //   }
  // }
  // return minLength;

  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

function findLongestSubstring(str) {
  // let start = 0,
  //   end = 1,
  //   count = 1,
  //   max = -Infinity;
  // if (str.length == 0) return 0;
  // while (start < str.length) {
  //   if (end < str.length) {
  //     if (str[start] !== str[end]) {
  //       count++;
  //       end++;
  //     } else {
  //       max = Math.max(max, count);
  //       count = 1;
  //       start++;
  //     }
  //   } else {
  //     return max;
  //   }
  // }

  // let start = 0,
  //   end = 1,
  //   count = 1,
  //   max = -Infinity,
  //   fc = {};

  // if (str.length === 0) return 0;
  // while (start < str.length) {
  //   if (end < str.length) {
  //     fc[str[start]] = 1;

  //     if (!(str[end] in fc)) {
  //       count++;
  //       fc[str[end]] = 1;
  //       end++;
  //     } else {
  //       start++;
  //       end = start + 1;
  //       fc = {};
  //       count = 1;
  //     }
  //     max = Math.max(max, count);
  //   } else {
  //     return max;
  //   }
  // }
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("vivekvd"), 4);
console.log(findLongestSubstring("rithmschool"), 7); // 7
console.log(findLongestSubstring("thisisawesome"), 6); // 6
console.log(findLongestSubstring("thecatinthehat"), 7); // 7
console.log(findLongestSubstring("bbbbbb"), 1); // 1
console.log(findLongestSubstring("longestsubstring"), 8); // 8
console.log(findLongestSubstring("thisishowwedoit"), 6); // 6
