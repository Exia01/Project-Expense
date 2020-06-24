const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name: { type: String, required: true },
    isActive:{type:Boolean, required:true},
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Exercise = mongoose.model('File', fileSchema);

module.exports = Exercise;