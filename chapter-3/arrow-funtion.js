// 常规函数
const calcArea = function (radius) {
    return 3.14 * radius ** 2
}

// 箭头函数
const a_calArea = (radius) => {
    return 3.14 * radius ** 2
}

// 单个参数$单个返回值可以进一步简化
const a_calArea_short = radius => 3.14 * radius ** 2

console.log(a_calArea_short(5))