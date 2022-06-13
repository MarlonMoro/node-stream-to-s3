import { sequelize, Model, DataTypes } from "./db.js";

export default class Movie extends Model {}

Movie.init({
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        field: 'movie_db_id'
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Movie',
    tableName: 'movies'
})

