const {DataType} = require('sequelize');
const Sequelize = require('./sequelize.js');
const Article = require('./article.js');
const sequelize = require('./sequelize.js');

// Définition du Modéle comment pour représenter les commentaires dans la base de données

const Comment = sequelize.define('Comment', {
    body: {
        type: DataType.TEXT,
        allowNull: false,
    }
});

Comment .belongsTo (Article);// Définit une relation "appartient à" entre Comment et Article
Article.hasMany (Comment);// Définit une relation "a plusieurs" entre Article et Comment

module.exports=Comment;