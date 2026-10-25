// reverse an array
// const nums = [1, 2, 3, 4, 5];

function reverseArr(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return nums;
}

// console.log(reverseArr(nums))

// Q:2 check whether its palidrome
// const nums = [1, 2, 3, 2, 1];

function isPalidrome(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] !== nums[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// console.log(isPalidrome(nums));

// Q:3 move all zeros to the end of the array
// const nums = [0, 1, 0, 3, 12];

function moveZeros(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return nums;
}
// console.log(moveZeros(nums));