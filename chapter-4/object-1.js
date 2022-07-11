// object type have key-value pair in it
let user = {
    name: 'makima',
    age: 23,
    email: 'makima@gmail.com',
    location: 'China',
    blogs: ['Chainsaw man', 'Look back']
}

console.log(user)
user.name = 'pochita'
console.log(user.name)
console.log(user.blogs.length)

// another way to access value
user['email'] = 'mak1ma@gmail.com'
console.log(user['email'])

console.log(typeof user)