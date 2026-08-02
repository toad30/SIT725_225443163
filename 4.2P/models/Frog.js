const mongoose = require('mongoose');

const FrogSchema = new mongoose.Schema({
    frog_name: String,
    image_path: String,
    link: String,
});

module.exports = mongoose.model('Frog', FrogSchema);
