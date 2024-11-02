'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init({
    Patient_FirstName: DataTypes.STRING,
    Patient_LastName: DataTypes.STRING,
    Patient_Gender: DataTypes.STRING,
    DateofBirth: DataTypes.DATE,
    Patient_ContactNumber: DataTypes.BIGINT,
    Patient_Address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};