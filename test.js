/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    var elementSum = 0, digitSum = 0;
    for (var i = 0; i < nums.length; i++) {
        elementSum += nums[i];
        while (nums[i] > 0) {
            digitSum += nums[i] % 10;
            nums[i] = Math.floor(nums[i] / 10);
        }
    }
    return elementSum - digitSum;
};
