let user = {
    name: 'makima',
    age: 23,
    email: 'makima@gmail.com',
    location: 'China',
    blogs: ['Chainsaw man', 'Look back'],
    login: function () {
        console.log('the user is logged in')
    },
    logout: () => console.log('the user is logged out'),
    logBlogs() {
        // 这里的this指代当前的user object
        // 仅仅适用于常规的函数形式
        // 在箭头函数中，this指代window object
        // console.log(this)
        console.log('this user has written the following blogs:')
        this.blogs.forEach((blog, index) => {
            console.log(`${index+=1}. "${blog}"`)
        })
    }
}

user.logBlogs()

// 这个this指代的是Window Object
console.log(this)