const sequelize=require('sequelize')

const db=new sequelize('users','userx','mypass',{
    host:'localhost',
    dialect:'mysql'
})

const user = db.define('users',{
    id : {type: sequelize.INTEGER, autoIncrement : true, primaryKey: true},
    name: {type: sequelize.STRING, allowNull: false},
    emailid: {type: sequelize.STRING, allowNull:false},
    password: {type: sequelize.STRING, allowNull:false}
    }
)

db.sync()
.then(()=>console.log("database created"))
.catch(()=>console.log("error in creating database"))

exports=module.exports={db,user}
