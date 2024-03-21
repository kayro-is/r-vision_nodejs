const {DataType} = require('sequelize');
const sequelize = require('./sequelize.js');

// Définition du modèle User pour représenter les utilisateurs dans la base de données

const User = sequelize.define('User', {
    username: {
        type: DataType.String,
        unique: true,// S'assure que le nom d'utilisateur est unique
        allowNull: false,// Champ obligatoire
    },

    password: {
        type: DataType.String,
        allowNull: false,
    }
});

module.exports = User;