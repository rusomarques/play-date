'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    'event',
    {
      title: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 40],
            msg: 'The title must be between 3 and 40 characters'
          },
          notEmpty: {
            args: true,
            msg: 'Pleas title the event'
          }
        }
      },
      image: DataTypes.STRING,
      eventdate: {
        type: Sequelize.DATEONLY,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please set the date of the event'
          }
        }
      },
      eventtime: DataTypes.DATE,
      location: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please set the location of the event'
          }
        }
      },
      lng: DataTypes.FLOAT,
      lat: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      price: {
        type: Sequelize.FLOAT,
        validate: {
          isNumeric: {
            args: true,
            msg: 'Price should be a number'
          }
        }
      },
      agefrom: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: true,
          min: {
            args: 0,
            msg: 'Please correct age from'
          }
        }
      },
      ageto: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: true,
          min: {
            args: 0,
            msg: 'Please correct age to'
          }
        }
      }
    },
    {}
  );
  return event;
};
