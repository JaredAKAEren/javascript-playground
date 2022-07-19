// primitive type - store in stack(栈)
let scoreOne = 50
// this is a copy, and it's different from the original one
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne}, scoreTwo ${scoreTwo}`)

scoreOne = 80

console.log(`scoreOne: ${scoreOne}, scoreTwo ${scoreTwo}`)

// referenc type - store in heap(堆)
// and also store a pointer(with the variable name) into stack
let userOne = { name: 'makima', age: 24 }
// this is a copy of pointer
// they are both point to the same variable
let userTwo = userOne
console.log(userOne, userTwo)

userOne.name = 'pochita'
// they change both
console.log(userOne, userTwo)