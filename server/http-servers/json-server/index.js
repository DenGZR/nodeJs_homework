import http from 'http';

const product = {
    id: 1,
    name: 'Supreme T-Shirt',
    brand: 'Supreme',
    price: 99.99,
    options: [
        {color: 'blue'},
        {size: 'XL'}
    ]
};

const jsonServer = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(product));
    res.end();
});

export default jsonServer;