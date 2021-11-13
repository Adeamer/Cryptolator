const { Schema, model } = require('mongoose');

const currencySchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    purchasedAmount: {
        type: String,
        require: true,
    },
    soldAmount: {
        type: String,
        require: true,
    },
    dateOfTransaction: {
        type: Date,
        require: true,
    },
    yearlyIncome: {
        type: String,
        require: true,
    },
    costOwning: {
        type: String,
        require: true, 
    },
    timeOfOwnership: {
        type: Boolean,
        require: true,
    }
});

const Tech = model('Currency', currencySchema);

module.exports = Currency;