// const mysql = require('mysql2/promise');


// //create coonections




// const getConnection = async () => {
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         database: 'reactfullproject'
//     });
//     return connection;
// }

//save connection in one files

const {getConnection}  = require('./connection')


// const validateUserLogin = async (email, password)=>{
//     const query = `SELECT id, email, name, status FROM user WHERE email = '${email}' AND password = '${password}'`

//     const connection = await getConnection();
//    // const res = await connection.execute(query);

//     //we needs only rows so destructurings to rows
//     const [rows] = await connection.execute(query);
//      return rows;

//     //return res;
// }

//now usings hash passwords 

const validateUserLogin = async (email) => {

    const query = `SELECT id, email, name, password, status  FROM user WHERE email = '${email}'`;

    console.log("database query",query);


    const connection = await getConnection();
    // const res = await connection.execute(query);

    //we needs only rows so destructurings to rows
    const [rows] = await connection.execute(query);
    console.log("rows from database",rows)
    return rows;
   

    //return res;
}




module.exports = {
    validateUserLogin
}
