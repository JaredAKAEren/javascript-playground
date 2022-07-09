const ul = document.querySelector('.people')

const people = ['makima', 'pochita', 'denji', 'ruisei']

let html = ``

people.forEach(person => {
    html += `<li>${person}<li>`
})

console.log(html)

ul.innerHTML = html