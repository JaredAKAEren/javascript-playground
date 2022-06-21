// 以往的声明变量方式
var gender = 'male'
// 现在的声明变量方式
let age = 23

// 字符串strings
let email = 'makima@gmail.com'
console.log(email)

// 结合字符串strings concatenation
let firstName = 'Minato'
let lastName = 'Aqua'

let fullName = firstName + ' ' + lastName
console.log(fullName)

// 获取字符串中的单个字符
console.log(fullName[2])

// 字符串长度
console.log(fullName.length)

// 字符串的相关方法
console.log(fullName.toUpperCase())
let result = fullName.toLowerCase()
console.log(result)

let index = email.indexOf('@')
console.log('index of the @ sign:', index)