const Order = require('../models/Order.js');

class OrderController {
    createOrder(res, req, next) {
        const newOrder = new Order(req.body);
        newOrder.save()
            .then(savedOrder => res.status(200).json(savedOrder))
            .catch(next);
    };
    updateOrder(res, req, next) {
        Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true })
                .then(updatedOrder => res.status(200).json(updatedOrder))
                .catch(next);
    };
    deleteOrder(res, req, next) {
        Order.findByIdAndDelete(req.params.id)
            .then(res.status(200).json("Order has been deleted!!!"))
            .catch(next);
    };
    getUserOrders(res, req, next) {
        Order.find({ userId: req.params.id })
            .then(orders => res.status(200).json(orders))
            .catch(next);
    };
    getOrders(res, req, next) {
        Order.find()
            .then(orders => res.status(200).json(orders))
            .catch(next);
    };
    income(res, req, next) {
        const productId = req.query.pid;
        const date = new Date();
        const lastMonth = new Date(date.setDate())

        Order.aggregate([
            {
                $match: {
                    createdAd: { $gte: previousMonth },
                    ...(productId && {
                        products: { $elemMatch: { productId }}
                    })
                },
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                },
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ])
        .then(income => res.status(200).json(income))
        .catch(next);
    };
}

module.exports = new OrderController;
