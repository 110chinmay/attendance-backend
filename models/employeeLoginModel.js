

module.exports= (sequelize,DataTypes)=>{
return EmployeeLoginDetails = sequelize.define('employee_login_details', {
  id: {
    type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
  },
  userLoginTiming: {
    type: DataTypes.STRING,
    allowNull: false
  },
  logOutTiming: {
    type: DataTypes.STRING,
    allowNull: true
  },
  locationDetails: {
    type: DataTypes.STRING,
    allowNull: true
  },
  latLong: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  photo: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  }
});
}


