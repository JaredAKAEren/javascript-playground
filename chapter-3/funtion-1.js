// 声明函数
// 可以先调用后定义
function greet() {
    console.log('hello there')
}

// 描述函数
// 先定义再调用
const speak = function () {
    console.log('good day!')
}

greet()
speak()