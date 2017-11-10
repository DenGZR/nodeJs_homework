import { products } from '../../db';

export const getProducts = (req, res, next) => {
    res.status(200).json(products);
};

export const getProductsById = (req, res, next) => {
    res.status(200).json({ data: event });
};

export const getProductsReviews = (req, res, next) => {
    res.status(200).json({ data: event });
};