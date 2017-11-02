const products = [{
        id: 0,
        name: 'cookie',
        price: '40'
    },{
        id: 2,
        name: 'meet',
        price: '100'
    },{
        id: 3,
        name: 'bread',
        price: '10'
    },{
        id: 4,
        name: 'cofe',
        price: '65'
}];


export const getProducts = (req, res, next) => {
    res.status(200).json(products);
};

export const getProductsById = (req, res, next) => {
    res.status(200).json({ data: event });
};

export const getProductsReviews = (req, res, next) => {
    res.status(200).json({ data: event });
};