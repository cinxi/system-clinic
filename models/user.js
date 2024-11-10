
//MODELS
//user.js

//MAO NI TINOODD

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
