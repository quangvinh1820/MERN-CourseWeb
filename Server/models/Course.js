const slug = require('slugify');
const mongoose = require('mongoose');
// const mongooseDelete = require('mongoose-delete');
const Slugify = require('../middlewares/Slugify');
const Schema = mongoose.Schema;

const Course = new Schema({
    nameCourse: { type: String },
    description: { type: String },
    image: { type: String },
    playlist: [
        {
        name: { type: String },
        des: { type: String },
        video: { type: String }
        }
    ],
    price: { type: String },
    author: { type: String },
    paymentDes: { type: String },
}, {
    timestamps: true
});

// Course.plugin(mongooseDelete, {
//     deletedAt: true,
//     overrideMethods: 'all'
// });

module.exports = mongoose.model('Course', Course);