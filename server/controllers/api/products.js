import models from '../../models';

export const getProducts = (req, res, next) => {
    models.Products.findAll().then((allProducts) => {
        res.status(200).json(allProducts);
    });
};

// export const getProductsById = (req, res, next) => {
//     res.status(200).json({ data: event });
// };
//
// export const getProductsReviews = (req, res, next) => {
//     res.status(200).json({ data: event });
// };