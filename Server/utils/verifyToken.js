const jwt = require('jsonwebtoken');
const { createError } = require('./error');

class Verify {
    static verifyToken(req, res, next) {
        const token = req.cookies.access_token;
        console.log(token);
        if (!token) {
            return next(createError(401, "You are not authenticated!"));
        }

        jwt.verify(token, process.env.JWT, (err, user) => {
            if (err) return next(createError(403, "Token is not valid!"));
            req.user = user;
            next(); // Đảm bảo rằng req.user đã được gán trước khi gọi next()
        });
    }

    static verifyUser(req, res, next) {
        Verify.verifyToken(req, res, () => {
            if (!req.user) {
                return next(createError(403, "You are not authorized!"));
            }
            if (req.user.id === req.params.id || req.user.isAdmin) {
                next();
            } else {
                return next(createError(403, "You are not authorized!"));
            }
        });
    }

    static verifyAdmin(req, res, next) {
        Verify.verifyToken(req, res, () => {
            if (!req.user) {
                return next(createError(403, "You are not authorized!"));
            }
            if (req.user.isAdmin) {
                next();
            } else {
                return next(createError(403, "You are not authorized!"));
            }
        });
    }
}

module.exports = Verify;
