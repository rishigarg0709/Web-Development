arr=[3,2,1,4,2,21,41,12]
arr.sort()   //sorts lexographically
console.log(arr)

function compare(a,b){
    return a-b
}

function fn(x){
    return 2*x
}

function filterit(item){
    if(item%3){
        return true
    }
}


sortedarr=arr.sort(compare)  //sorts according to values
console.log(sortedarr)

mappedarr=arr.map(fn)  // mapper function 
console.log(mappedarr)

filteredarr=arr.filter(filterit) // filter function 
console.log(filteredarr)