'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    'event',
    {
      title: {
        type: Sequelize.STRING,
        validate: {
          len: [3, 40],
          notEmpty: true
        }
      },
      image: DataTypes.STRING,
      eventdate: {
        type: Sequelize.DATEONLY,
        validate: {
          notEmpty: true
        }
      },
      eventtime: DataTypes.DATE,
      location: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      lng: DataTypes.FLOAT,
      lat: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      price: {
        type: Sequelize.FLOAT,
        validate: {
          isNumeric: true
        }
      },
      agefrom: DataTypes.INTEGER,
      ageto: DataTypes.INTEGER
    },
    {}
  );
  return event;
};
