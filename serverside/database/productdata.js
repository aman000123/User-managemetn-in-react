
const { getConnection } = require('./connection');

const getProducts = async () => {


    const query = `SELECT * FROM products`;


    const connection = await getConnection();

    const [rows] = await connection.execute(query);

    return rows

    // console.log(rows)
}
//pooling coonection poool

const getIndividualsProducts = async (id) => {
    const query = `SELECT * FROM products WHERE id=${id}`;
    const connection = await getConnection();
    const [rows] = await connection.execute(query);
    console.log("rows by id", rows)
    return rows


}



const saveProduct = async (product) => {
    const query = `INSERT INTO products(name,brand,description,price,quantity) 
    VALUES ('${product.name}','${product.brand}','${product.description}','${product.price}',
    '${product.quantity}' );`
    const connection = await getConnection();
    const [rows] = await connection.execute(query);
    return rows;
}


//for delete data


const deleteProducts = async (id) => {

    const query = `DELETE  FROM products WHERE id=${id}`;

    console.log("delete query", query)

    const connection = await getConnection();

    const results = await connection.execute(query);

    return results

}





const updateproducts = async (id, name, brand, description, price, quantity) => {
    const query = `UPDATE products SET name = '${name}',brand ='${brand}', description='${description}',price='${price}',quantity ='${quantity}' WHERE id=${id}`;
    console.log(query);
    const connection = await getConnection()
    const result = await connection.execute(query);
    return result;
}

module.exports = {
    getProducts,
    saveProduct,
    getIndividualsProducts,
    deleteProducts,
    updateproducts
}