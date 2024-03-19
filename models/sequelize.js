// models/sequelize.js

const { Sequelize } = require('sequelize');
const config = require('../config/config.js').development; // Assurez-vous que ce chemin correspond à l'emplacement de votre fichier de configuration

// Assurez-vous que 'sequelize' n'est déclaré qu'une seule fois dans ce fichier
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: console.log, // Mettez 'console.log' pour voir les requêtes SQL dans la console, ou 'false' pour les désactiver
});

module.exports = sequelize;
