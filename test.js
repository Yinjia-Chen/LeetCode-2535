/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let elementSum = 0, digitSum = 0;  // 声明 元素和变量elementSum 和 数字和digitSum
    for (let num of nums) {  // 循环遍历数组元素
        elementSum += num;  // 计算元素和
        while (num > 0) {
            digitSum += num % 10;  // 每次循环取出num的最后一位数字，并累加到数字和digitSum
            num = Math.floor(num / 10);  // 去掉num最后一位，并四舍五入下取整后重新赋值进入循环
        }
    }
    return elementSum - digitSum;  // 返回绝对值差（元素和一定大于等于数字和）
};
