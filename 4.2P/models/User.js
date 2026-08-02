const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    favourite_frog: String,
});

module.exports = mongoose.model('User', UserSchema);
