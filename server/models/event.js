'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    'event',
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      eventdate: DataTypes.DATE,
      eventtime: DataTypes.TIME,
      location: DataTypes.STRING,
      lng: DataTypes.FLOAT,
      lat: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      price: DataTypes.FLOAT,
      agefrom: DataTypes.INTEGER,
      ageto: DataTypes.INTEGER
    },
    {}
  );
  event.associate = function(models) {
    // associations can be defined here
  };
  return event;
};
