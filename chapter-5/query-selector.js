// const para = document.querySelector('div')
// const para = document.querySelector('.error')
const para = document.querySelector('div.error')

console.log(para)
console.log(typeof para)

const paras = document.querySelectorAll('p')

console.log(paras)
paras.forEach(para => {
    console.log(para.innerText)
})