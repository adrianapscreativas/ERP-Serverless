'use strict'
import { Model, UUIDV4 } from 'sequelize'

type UserAttributes = {
  id: string
  firstName: string
  lastName: string
  email: string
  // other attributes...
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string
    firstName!: string
    email!: string
    // static associate(models: any): void {
    //   // define association here
    // }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}
