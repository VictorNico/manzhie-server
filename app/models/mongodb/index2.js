const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');
const User = require('./user');


const TADC_driverSchema = mongoose.Schema({
    registration_plate: { type: String, required: true, unique: true },
    driver_license: { type: String, required: true, unique: true },
    taxi_number: { type: String, required: true, unique: true },
    cni: { type: String, required: true, unique: true },
});

TADC_driverSchema.plugin(uniqueValidator);

module.exports = User.discriminator('driver', TADC_driverSchema);