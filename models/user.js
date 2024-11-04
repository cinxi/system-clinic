// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class user extends Model {
//     static associate(models) {
//     }
//   }
//   user.init({
//     Users_ID: {
//       type: DataTypes.BIGINT,
//       primaryKey: true,
//       autoIncrement: true,  // Enable auto-increment
//       allowNull: false       // Prevent null values
//     },
//     FirstName: DataTypes.STRING,
//     LastName: DataTypes.STRING,
//     Users_Birthdate: DataTypes.DATE,
//     Users_Gender: DataTypes.STRING,
//     ContactNumber: DataTypes.BIGINT,
//     User_Role: DataTypes.STRING,
//     Username: DataTypes.STRING,
//     Password: DataTypes.STRING,
//     ConfirmPassword: DataTypes.STRING
//   }, 
//   {
//     sequelize,
//     modelName: 'user',
//     tableName: 'users', // Ensure this matches your actual table name in the database
//   });
//   return user;
// };



// Example user model (models/user.js)
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
      Users_ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      Users_Birthdate: DataTypes.DATE,
      Users_Gender: DataTypes.STRING,
      ContactNumber: DataTypes.STRING,
      User_Role: DataTypes.STRING,
      Username: {
          type: DataTypes.STRING,
          unique: true
      },
      Password: DataTypes.STRING,
      // Remove any reference to ConfirmPassword here
  });
  return User;
};
