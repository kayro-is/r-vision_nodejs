const bcrypt = require('bcrypt'); // utiliser pour hacher les mot de passe
const jwt = require('jsonwebtoken'); // utiliser pour crée des Tokens jwt pour l'authentification 
const User = require('../models/user.js'); // Importer le model User

// Fonction pour gérer l'inspection d'un utilisateur
exports.register = async (req, res) => {
    try {
        const {username, password} = req.body;// récupérer username et password du corps de la requête
        const HashedPassword = await bcrypt.hash(password, 10);// hash le mot de passe
        const user = await User.create({username, password: HashedPassword});// Crée un nouvel utilisateur avec le mot de passe haché
        res.status(201).send(user);//Renvoi l'utilisateur crée avec un status 201
    }catch (err) {
        res.status(500).send(err.message);
    }
};

// Fonction pour gérer les connexion de l'utilisateur

exports.login = async (req, res) => {
    try {
        const {username,password} = req.body;
        const user = await User.findOne({where: {username}}); // cherche l'utilisateur par son nom de d'utilisateur
        if (!user || !(await bcrypt.compare(password, user.password))){ //verifié le mot de passe
            return res.status(401).send({message: 'Authentification échouée'});// Échec de l'authentification
        }

        const token = jwt.sign({userId: user.id}, 'secret', { expresIn: '1h'}); // crée un token JWT 
        res.send({ user, token}); // renvoi l'utilisateur est le token 

    }catch (err) {
        res.status(500).send( err.message);
    }
}