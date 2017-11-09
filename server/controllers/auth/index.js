import jsonwebtoken from 'jsonwebtoken';
import config from '../../config/config.json';
import _ from 'lodash';
import {users} from '../../db';


export default function getLogin(req, res, next) {
    const {login, password} = req.body;

    const user = _.find(users, {login, password});
    console.log('user ', user);

    if (user) {
        const token = jsonwebtoken.sign({name: user.name}, config.secret, {expiresIn: '7 days'});
        res.json({
            code: '200',
            message: 'OK',
            data: {
                user: {
                    email: user.email,
                    username: user.name
                }
            },
            token
        });
    } else {
        res.json({
            code: '404',
            message: 'Not Found',
            data: 'additional error response data if needed'
        });
    }
};