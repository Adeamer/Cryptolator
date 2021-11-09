const db = require('../config/connection');
const { Currency } = require('../models');
const { User } = require('../models');

const currencyData = require('./currency.json');
const userData = require('./user.json');

db.once('open', async () => {
  await Currency.deleteMany({});
  await User.deleteMany({});

  const currencies = await Tech.insertMany(currencyData);
  const users = await Tech.insertMany(userData);

  console.log('data seeded!');
  process.exit(0);
});