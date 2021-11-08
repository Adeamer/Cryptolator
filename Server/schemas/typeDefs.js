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
        purchasedAmount: String
        soldAmount: String
        DateOfTransaction: Date
        yearlyIncome: String
        costOwning: String
        timeOfOwnership: Boolean
    }
    
    scalar Date

    type MyType {
        created: Date
    }

    type Graph {
        taxAmount: String
        profit: String
    }

    type Query {
        users: [User]
        wallets: [Wallet]
        currencies: [Currency]
        graphs: [Graph]
    }

    type Mutations {
        addUser(name: String!, email: String!): User
        addCurrency(currencyType: String!, purchasedAmount: String!, soldAmount: String!, DateOfTransaction: Date!, yearlyIncome: String!, timeOfOwnership: Boolean!): Currency
    }
`

module.exports = typeDefs;