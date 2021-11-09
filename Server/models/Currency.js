const { Schema, model } = require('mongoose');

const currencySchema = new Schema({
    currency1: {
        type: String,
        required: true,
        unique: true,
    },
    currency2: {
        type: String,
        require: true,
        unique: true,
    },
});

const Currency = model('Currency', currencySchema);

module.exports = Currency;