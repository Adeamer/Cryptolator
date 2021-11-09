const { AuthenticationError } = require('apollo-server-express');
const { User, Wallet, Currency, Graph } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if(context.user){
                const userData = await User.findOne({ _id: context.user._id }).select("-_v -password").populate("wallet")
                return userData;
            }

            throw new AuthenticationError("Not Logged in");
        }

    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            
            return {token, user};
        },

        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});
            
            if(!user) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);
            return {token, user};
        },

        addCurrency: async (parent, args, context) => {
            if(conext.user) {

                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { currency: args.input } },
                    { new: true }
                );
            return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        removeCurrency: async (parent, args, contaxt) => {
            if(context.user) {
                const updatedUser = await User.findOneAndupdate(
                    { _id: context.user._id },
                    { $pull: { currency: { currencyId: args.currencyId } } },
                    { new: true }
                );
            return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
    }
};

module.exports = resolvers;