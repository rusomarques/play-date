'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, userData) => {
  const user = sequelize.define('user', {
    name: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [3, 40],
          msg: 'The name must be between 3 and 40 characters'
        },
        notEmpty: {
          args: true,
          msg: 'Please enter your name'
        }
      }
    }
  });
  return user;
};
