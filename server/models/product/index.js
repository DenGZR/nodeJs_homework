import Sequelize from 'sequelize';
const sequelize = new Sequelize('hw6', null, null, {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Product = sequelize.define('product', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    }
});


// class Product {
//   constructor() {
//     console.log('Product module');
//   }
// }

export default Product;
