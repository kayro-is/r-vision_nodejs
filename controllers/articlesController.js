// Importation du Modél Article pour intérfagire avec la base de données

const Article = require('../models/article.js');

//Crée une nouvel article
//cette fonction est asynchrone car elle attend l'operation de base de données

exports.createArticle = async (req, res) => {
    try {
        // extraction des données du corp de la requête
        const {title, body} = req.body;
        // création d'un nouvel article dans la base de données
        const article = await Article.create({title, body});
        // envoi de l'article crée en reponse
        res.send(article);
    }catch (err) {
        res.status(500).send({message: err.message});
    }
};


// lire tous les article 
exports.getAllArticles = async (req, res) => {
    try {
        // recuperer tous les article de la base de données
        const articles = await Article.findAll();
        res.send(articles);
    } catch (err) {
        res.status(500).send({message:err.message});
    }
};

// lire un article avec son id 

exports.getArticleById = async (req, res) => {
    // récupération d'un article avec son id
    try {
        const article = await Article.findBypk(req.params.id);
        if (article) {
            res.send(article);
        }else{
            res.status(404).send({message:'Article not found'});
        }
    }catch (err){
        res.status(500).send({message: err.message});
    }
};

// mettre a jour un article par son id
exports.updateArticle = async (req, res) => {
    try {
        const {title, body} = res.body;
        // Mise a jour de l'article spécifié par son id avec les nouvelles données
        const updated = await Article.update({title,body}, {
            where: {id: req.params.id},
        });
        if (updated) {
            res.send({message: 'Article mise a jour'});
        } else {
            res.status(404).send({message: 'Article non trouvée'});
        }
    } catch (err) {
        res.status(500).send({message : err.message});
    }
};

// supprimée un article pas son id 
exports.deleteArticle = async (req, res) => {
    try {
        // supression de l'article spécifié par son id 
        const deleted = await Article.destroy ({
            where : {id: req.params.id},
        });
        if (deleted) {
            res.send({message:'Article supprimé.'});
        }else{
            res.status(404).send({message :'Article non trouvé.'});
        }
    }catch (err) {
        res.status(500).send({message : err.message});
    }
};