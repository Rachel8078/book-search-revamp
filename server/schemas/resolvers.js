const { AuthenticationError } = require('apollo-server-express');
// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: { 
    users: async () => {
      return User.find()
    }
  }
};

module.exports = resolvers;