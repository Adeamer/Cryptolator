const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String
        email: String
        wallet: [Wallet]
    }

    type Auth {
        token: ID
        user: User
    }

    type Wallet {
        currency: [Currency]
    }

    type Currency {
        currencyType: String
        purchasedAmount: String
        soldAmount: String
        dateOfTransaction: Date
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
        user: User
        wallets: [Wallet]
        currencies: [Currency]
        graphs: [Graph]
    }

    type Mutations {
        addUser(name: String!, email: String!, password: String!): Auth
        addCurrency(currencyType: String!, purchasedAmount: String!, soldAmount: String!, DateOfTransaction: Date!, yearlyIncome: String!, timeOfOwnership: Boolean!): Currency
        updateUser(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;