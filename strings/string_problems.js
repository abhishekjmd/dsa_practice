// Q: 1 Traverse a String

// const str = "hello";

function traverseString(s) {
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
  }
}

// traverseString(str);

// Q2: Count Vowels
// const str = "hello";

function countVowels(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
  }

  return count;
}

// console.log(countVowels(str));

// Q3: Reverse a string
// const str = "hello";

function reverseStr(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
// console.log(reverseStr(str));

// Q4: Palindrome String

// const str = "madam";

function checkPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// console.log(checkPalindrome(str));
