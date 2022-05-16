const { AuthenticationError } = require('apollo-server-express');
// import user model
const { User } = require('../models');
const bookSchema = require('../models/Book');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: { 
    // get all users
    users: async () => {
      return User.find()
      .select('-__v -password')
      .populate('savedBooks')
    },
    // get user by username
    user: async(parent, { username }) => {
      return User.findOne ({ username })
      .select('-__v -password')
      .populate('savedBooks')
    },
    savedBooks: async(parent, { username }) => {
      const params = username ? { username } : {};
      return bookSchema.find(params);
    }
  },


};

module.exports = resolvers;