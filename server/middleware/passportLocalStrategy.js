import passport from 'passport';
import LocalStrategy from 'passport-local';
import BearerStrategy from 'passport-http-bearer';
import jsonwebtoken from 'jsonwebtoken';
import _ from 'lodash';
import { users } from '../db';


passport.use(new LocalStrategy({
    usernameField: 'login',
    passwordField: 'password',
    session: false
    }, (username, password, cb) => {
    const user = _.find(users, { login : username});
    if (!user) { return cb(null, false); }
    if (user.password != password) { return cb(null, false); }
    return cb(null, user);
}));

passport.use(new BearerStrategy(
    function (token, done) {
        let result = jsonwebtoken.decode(token);

        if (!result) {
            done(null, false);
        } else {
            done(null, result, { scope: 'all' })
        }

    }
));

export default passport;