module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'events',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING
        // allowNull: false
      },
      image: {
        type: DataTypes.STRING
        // allowNull: false
      },
      eventdate: {
        type: DataTypes.DATE
        // allowNull: false
      },
      eventtime: {
        type: DataTypes.DATE
        // allowNull: false
      },
      location: {
        type: DataTypes.STRING
        // allowNull: false
      },
      lng: {
        type: DataTypes.FLOAT
        // allowNull: false
      },
      lat: {
        type: DataTypes.FLOAT
        // allowNull: false
      },
      description: {
        type: DataTypes.TEXT
        // allowNull: false
      },
      price: {
        type: DataTypes.FLOAT
        // allowNull: false
      },
      agefrom: {
        type: DataTypes.BIGINT
        // allowNull: false
      },
      ageto: {
        type: DataTypes.BIGINT
        // allowNull: false
      }
    },
    {
      timestamps: true,
      createdAt: 'createdat',
      updatedAt: 'updatedat'
    }
  );
