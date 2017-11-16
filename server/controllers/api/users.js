import models from '../../models';

export const getUsers = (req, res, next) => {
    models.User.findAll().then((allUsers) => {
        res.status(200).json(allUsers);
    });
};

