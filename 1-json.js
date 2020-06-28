const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
console.log(dataJson)
const user = JSON.parse(dataJson)
console.log(user)


user.name = "yasasvy"
user.age = 21

const userJson = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJson)