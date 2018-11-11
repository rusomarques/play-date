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
        type: DataTypes.INTEGER
        // allowNull: false
      },
      ageto: {
        type: DataTypes.INTEGER
        // allowNull: false
      }
    },
    {
      timestamps: true,
      createdAt: 'createdat',
      updatedAt: 'updatedat'
    }
  );

// const queryObject = {};
//     if (date) {
//       queryObject.date = date.format('YYYY-MM-DD');
//     }
//     if (free) {
//       queryObject.price = 0;
//     }
//     if (age || age === 0) {
//       queryObject.ageFrom = age;
//     }
//     if (searchText) {
//       queryObject.q = searchText;
//     }
//     console.log('queryObject', queryObject);
//     this.props.getEvents(queryObject);

// eventsModel.getAll = async function() {
//   return await eventsModel.Event.find({ date: { $gte: moment().format() } }) // only return events in the future.
//     // .find()
//     .sort({ date: 'asc' })
//     .exec();
// };

// eventsModel.create = async function(event) {
//   const newEvent = {
//     title: '',
//     date: '',
//     venue: ''
//   };
//   return await eventsModel.Event.create(Object.assign(newEvent, event));
// };

// INSERT INTO events (title, description, eventdate, eventtime, agefrom,
//   ageto, location, lng, lat, image, price)
// VALUES (${event.title}, ${event.description}, ${event.eventdate},
//   ${event.eventtime}, ${event.agefrom}, ${event.ageto},${event.location}, ${
//   event.lng
// }, ${event.lat}, ${event.image}, ${event.price});
