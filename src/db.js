import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize('movies', process.env.db_user, process.env.db_password, {
    host: 'localhost',
    dialect:'mysql'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1)
}

export {
    sequelize,
    Model, 
    DataTypes
}