function myclass(name,age,sex){
    this.name=name
    this.age=age
    //sex becomes a private member
    this.isadult=function ()
    {
        return age>18
    }
}

let obj=new myclass("rishi",20,"male")
console.log(obj.name)
console.log(obj.isadult())