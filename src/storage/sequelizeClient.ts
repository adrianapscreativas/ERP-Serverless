import  {Sequelize}  from 'sequelize';
import getConfiguration from './config/config';

const {databaseName, databaseUser, databasePassword, databaseHost} = getConfiguration();

/**
 * Create a new instance for the database connection.
 */
const sequelizeClient = new Sequelize(databaseName, databaseUser, databasePassword, {
  host: databaseHost,
  dialect: 'postgres',
});

console.log("clientSequelize ", sequelizeClient );

export default sequelizeClient;
