// Création du serveur
const cors = require('cors');
const express = require('express');
const sequelize = require('./models/sequelize.js');



const app = express();

// Définir EJS comme moteur de rendu
app.set('view engine', 'ejs');

// importation du routeur depui routes.js
const routes = require('./routes.js');
app.use(routes);

// synchronidation des modéle avec la base de données 
// cette opération crée les tables si elles n'éxistent pas deja 

sequelize.sync().then(() => {
    console.log('Modeles synchronisés avec la base de données')
})


app.use(cors());



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 le serveur tourne sur le port ${PORT}☄️`);
})