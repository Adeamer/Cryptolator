const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String
        email: String
        wallet: [Wallet]
    }

    type Wallet {
        currency: [Currency]
    }

    type Currency {
        currencyType: String
        purchasedAmount: Int
        soldAmount: Int
        DateOfTransaction: Date
        yearlyIncome: Int
        costOwning: Int
        timeOfOwnership: Boolean
    }

    type Graph {
        tax-amount: Int
        profit: Int
    }

    type Query {
        users: [User]
        wallets: [Wallet]
        currencies: [Currency]
        graphs: [Graph]
    }

    type Mutations {
        addUser(name: String!, email: String!): User
        addCurrency(currencyType: String!, purchasedAmount: Int!, soldAmount: Int!, DateOfTransaction: Date!, yearlyIncome: Int!, timeOfOwnership: Boolean!): Currency
    }
`

    module.exports = typeDefs;