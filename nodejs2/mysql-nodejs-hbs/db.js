const mysql=require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    database:'mydb',
    user:'myuser',
    password:'mypass'
})

function create_table()
{
    return new Promise(function(resolve,reject){
        connection.query(
            `CREATE TABLE IF NOT EXISTS persons(
                id INTEGER AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(40) NOT NULL,
                email VARCHAR(50),
                pwd VARCHAR(50) NOT NULL
            )`,
            function(err,results){
                if(err){
                    console.log(err)
                }
                else{
                    console.log("Table created succesfully !!")
                    resolve()
                }
            }
        )
    })
}

function show_data(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT * FROM persons`,
            function(err,rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )
    })
}

function add_data(name,email,pwd){
    return new Promise(function(resolve,reject){
        console.log(name+" "+email+" "+pwd)
        connection.query(
            `INSERT INTO persons(name,email,pwd) VALUES(?,?,?)`,
            [name,email,pwd],
            function(err,results){
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }
            }     
        )
    })
}


exports=module.exports={
    create_table,
    add_data,
    show_data
}