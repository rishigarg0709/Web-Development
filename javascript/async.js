function asyncfunc(printer){
    setTimeout(printer,3000)
}

asyncfunc(function (){
    console.log("HELLO WORLD !!")
})


// function download()
// {
//     console.log("downloading has been started")
//     setTimeout(function (){
//         console.log("downloading has been completed !!")
//     },3000)
// }

// download();