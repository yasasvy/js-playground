
// setTimeout(() => {
//     console.log("done")
// }, 2000)

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y)
    },2000)

}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, [1,3,5])
        callback("Oops something has gone wrong!",undefined)
    }, 2000)
}

doWorkCallback((error, result) => {
    if(error) {
        return console.log(error)
    }
    console.log(result)
})