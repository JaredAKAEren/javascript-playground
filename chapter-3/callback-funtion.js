// 定义一个回调函数
const speak = (callbackfn) => {
    let name = 'makima'
    let gender = 'girl'
    callbackfn(name, gender)
}

speak((n, g) => console.log(`${n} is a ${g}`))

// Array.forEach()是一个回调函数
let people = ['makima', 'pochita', 'denji', 'ruisei']

const logPersonName = (personName, index) => {
    console.log(`${index} hello ${personName}`)
}

people.forEach(logPersonName)