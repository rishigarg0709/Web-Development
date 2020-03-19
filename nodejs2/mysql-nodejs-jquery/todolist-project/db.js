const mysql=require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    user:'myuser',
    database:'mydb',
    password:'mypass'
})

function create_table(){
    return new Promise(function(resolve,reject){
        connection.query(
            `CREATE TABLE IF NOT EXISTS tasktable(
                id INTEGER PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(50) NOT NULL
            )`
 
        )
    })
}

function add_task(name){
    return new Promise(function(resolve,reject){
        connection.query(
            `INSERT INTO tasktable (name) values(?)`,
            [name],
            function(err,result){
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

function show_task(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT * FROM tasktable`,
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

exports=module.exports=({
    create_table,
    add_task,
    show_task
})