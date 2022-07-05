const age = 23
console.log(`you are ${age} years old,`)

if (age > 20) {
    console.log('which is old enough to drink alcohol.')
}

let passwd = 'j@redakaeren'
passwd = 'jaredakaeren'
passwd = 'j@redaka'
passwd = 'j@red'

if (passwd.length >= 10 && passwd.includes('@')) {
    console.log('your password is strong enough.')
} else if (passwd.length > 5 || passwd.includes('@') && passwd.length > 5) {
    console.log('your password is not strong enough.')
} else {
    console.log('your password is too short.')
}