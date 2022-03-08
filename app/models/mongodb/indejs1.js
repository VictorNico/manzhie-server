const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');
var options = { discriminatorKey: 'role' };

const TADC_userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false },
    name: { type: String, required: false, unique: false },
    surname: { type: String, required: false, unique: false },
    phone_number: { type: String, required: false, unique: true },
    // manage confirmation signup
    activate: { type: Boolean, required: false, unique: false, default: false },
    checkerKey: { type: String, required: false, unique: true }

}, options);

TADC_userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users', TADC_userSchema);