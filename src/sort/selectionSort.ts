export function selectionSort(numbers: number[]) {
  const nums = [...numbers];

  for (let i = 0; i < nums.length - 1; i++) {
    let iMin = i;

    for (let j = i; j < nums.length - i; j++) {
      if (nums[j]! < nums[iMin]!) {
        iMin = j;
      }
    }

    const temp = nums[i]!;
    nums[i] = nums[iMin]!;
    nums[iMin] = temp;
  }

  return nums;
}
