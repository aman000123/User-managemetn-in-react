const mysql = require('mysql2/promise');


//create coonections




const getConnection = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'reactfullproject',
       
    });
    return connection;
}


module.exports ={
    getConnection
}