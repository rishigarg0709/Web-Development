console.log("hello everyone !!")


function myfunc(name){
    // console.log("this fubction is createrd by "+name)

    function mysecfunc(surname)
    {
        console.log("this function is createrd by "+name+" "+surname)
    }
    return mysecfunc
}

secname=myfunc("rishi")
secname()

