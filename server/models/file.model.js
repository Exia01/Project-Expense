const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name: { type: String, required: [true, 'File name is required'] },
    originalName: { type: String, required: [true, 'Original file name is required'] },
    fileLocation: { type: String, required: [true, 'File location is required'] },
    size: { type: Number, },
    mimeType: { type: String },
    date: { type: Date, },
    isActive: { type: Boolean, required: [true,'File status is Required'] },

}, {
    timestamps: true,
});

const FileUpload = mongoose.model('Upload', fileSchema);

module.exports = FileUpload;



// Embedding vs referencing:https://stackoverflow.com/questions/5373198/mongodb-relationships-embed-or-reference

//Vide from MongoDB:https://www.youtube.com/watch?v=leNCfU5SYR8&t=0s