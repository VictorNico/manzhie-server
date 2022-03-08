const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

const TADC_connectionSchema = mongoose.Schema({
    login_time: { type: Date, required: true, unique: false, default: Date.now },
    logout_time: { type: Date, required: true, unique: false, default: Date.now },
    online: { type: Boolean, required: true, unique: false, default: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true }
});

TADC_connectionSchema.plugin(uniqueValidator);

module.exports = mongoose.model('connections', TADC_connectionSchema);