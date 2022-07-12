const blogs = [
    { title: 'Chainsaw man', likes: 114 },
    { title: 'Look back', likes: 514 }
]

// console.log(blogs)

let user = {
    name: 'makima',
    age: 23,
    email: 'makima@gmail.com',
    location: 'China',
    blogs: [
        { title: 'Chainsaw man', likes: 114 },
        { title: 'Look back', likes: 514 }
    ],
    login: () => console.log('the user is logged in'),
    logout: () => console.log('the user is logged out'),
    logBlogs() {
        console.log('this user has written the following blogs:')
        this.blogs.forEach((blog, index) => {
            console.log(`${index += 1}. "${blog.title}" has ${blog.likes} likes`)
        })
    }
}

user.logBlogs()