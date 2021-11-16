import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($name: String!, $password: String!, $email: String!) {
    addUser(name: $name, password: $password, email: $email) {
        
        user {
            _id
            name
            email
            currency
        }
    }
}
`;

export const ADD_CURRENCY = gql`
mutation addCurrency($currencyType: String!, $purchasedAmount: String!, $soldAmount: Sring!, $dateOfTransaction: Date!, $yearlyIncome: String!, $timeOfOwnership: Boolean!) {
    addCurrency(currencyType: $currencyType, purchasedAmount: $purchasedAmount, soldAmount: $soldAmount, dateOfTransaction: $dateOfTransaction, yearlyIncome: $yearlyIncome, timeOfOwnership: $timeOfOwnership) {

        currency{
            currencyType
            purchasedAmount
            soldAmount
            dateOfTransaction
            yearlyIncome
            timeOfOwnership
        }
    }
}
`;

export const REMOVE_CURRENCY = gql`
mutation removeCurrency($currencyId: ID!) {
    removeCurrency(currencyID: $currencyId) {
        _id
        name
        email
        currency
    }
}
`;