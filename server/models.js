const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/belt-exam', { useNewUrlParser: true });


const PetSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: [true, 'Pet name is required!'], minlength: [3, 'Pet name must at least has 3 charaters'] },
    type: { type: String, required: [true, 'Pet type is required!'], minlength: [3, 'Pet type must at least has 3 charaters'] },
    des: { type: String, required: [true, 'Pet description is required!'], minlength: [3, 'Pet description must at least has 3 charaters'] },
    s1: { type: String },
    s2: { type: String },
    s3: { type: String },
    like: { type: String, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);