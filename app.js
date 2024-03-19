// Création du serveur

const express = require('express');
const sequelize = require('./models/sequelize.js');


const app = express();


// synchronidation des modéle avec la base de données 
// cette opération crée les tables si elles n'éxistent pas deja 

sequelize.sync().then(() => {
    console.log('Modeles synchronisés avec la base de données')
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 le serveur tourne sur le port ${PORT}☄️`);
})