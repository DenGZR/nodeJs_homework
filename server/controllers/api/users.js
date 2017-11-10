import { users } from '../../db';

export const getUsers = (req, res, next) => {
    res.status(200).json(users);
};

