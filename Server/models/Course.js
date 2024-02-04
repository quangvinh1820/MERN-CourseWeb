const slug = require('slugify');
const mongoose = require('mongoose');
// const mongooseDelete = require('mongoose-delete');
const Slugify = require('../middlewares/Slugify');
const Schema = mongoose.Schema;

const Course = new Schema({
    TenKhoa: { type: String, required: true },
    moTa: { type: String, required: true },
    Nhom: { type: String, required: true },
    Hinh: { type: String, required: true },
    BaiGiang: [
        {
        Ten: { type: String, required: true },
        Mota: { type: String, required: true },
        video: { type: String, required: true },
        BaiTap: { type: String, required: true },
        }
    ],
    Ma_so: { type: String, required: true },
    Gia: { type: String, required: true },
    Tacgia: { type: String, required: true },
    Thoiluong: { type: String, required: true },
    gioithieu: { type: String, required: true },
}, {
    timestamps: true
});

// Course.plugin(mongooseDelete, {
//     deletedAt: true,
//     overrideMethods: 'all'
// });

module.exports = mongoose.model('Course', Course);