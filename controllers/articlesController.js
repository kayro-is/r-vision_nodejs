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
        res.status(500).send({message: error.message});
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

exports.getAllArticleById = async (res, res) => {
    // récupération d'un article avec son id
    try {
        const article = await Article.findBypk(req.params.id);
        if (article) {
            res.send(article);
        }else{
            res.status(404).send({message:'Article not found'});
        }
    }catch (err){
        res.status(500).send({message: err.message})
    }
};