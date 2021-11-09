const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: String,
    name: String,
    email: String,
    wallet: [
        {
            name: String,
            purchasedAmount: String,
            soldAmount: String,
            dateOfTransaction: Date,
            yearlyIncome: String,
            costOwning: String,
            timeOfOwnership: Boolean
        }
    ]
});

const User = model('User', userSchema);

module.exports = User;