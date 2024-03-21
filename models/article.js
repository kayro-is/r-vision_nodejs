const {DataTypes} = require('sequelize');
const sequelize = require('./sequelize.js'); // Importation de l'instance de sequelize initialisée

// Définitgion du Model 'Article' avec ses attributs
const Article = sequelize.define('Article', {
    // Attributs du modéle Article
    title: {
        type:DataTypes.STRING, // Type de données string pour le titre
        allowNull:false, //le titre ne peux pas etre null
    },

    body: {
        type: DataTypes.TEXT, //Type de données text pour le cors de l'article
        allowNull:false, //le corp de l'article ne peux pas etre null
    },

    createdAt: {
        type: DataTypes.DATE, //Type de donnée DATE pour la date de création 
        defaultValue:DataTypes.NOW,// valeur pas défaut a la date et heur actuelle
    },

    updatedAt: {
        type : DataTypes.DATE,// type de données pour la date de misez a jour
        defaultValue: DataTypes.NOW,// Valeur par défaut a la date et heur actuel
    },
});


module.exports = Article ;