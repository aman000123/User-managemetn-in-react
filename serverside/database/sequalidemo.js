
const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('sequlize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(res => console.log("connection has been stablished"))
.catch(error =>  console.log("unable connection  stablished",error)) 