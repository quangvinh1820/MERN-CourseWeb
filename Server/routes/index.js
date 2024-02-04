const authRouter = require('./auth');
const userRouter = require('./users');
const courseRouter = require('./courses');
const orderRouter = require('./order');

function route(app){
    app.use('/api/auth', authRouter);
    app.use('/api/users', userRouter);
    app.use('/api/courses', courseRouter);
    app.use('/api/orders', orderRouter);
}

module.exports = route;