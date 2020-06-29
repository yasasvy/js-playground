const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([2,4,6])
        reject("something has gone wrong!")
    },2000)
})

doWorkPromise.then((result) => {
    console.log("Success!", result)
}).catch((error) => {
    console.log("Error!",error)
})


//                                  fulfilled
//                                /
// promise   ----  pending  ---> 
//                                \
//                                  rejected