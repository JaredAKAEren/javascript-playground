const title = document.getElementById('page-title')
console.log(`(${typeof title})`, title)

const errors = document.getElementsByClassName('error')
console.log(`(${typeof errors})`, errors)
console.log(errors[1])

const paras = document.getElementsByTagName('p')
console.log(`(${typeof paras})`, paras)
console.log(paras[2])