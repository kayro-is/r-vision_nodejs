const Comment = require('../models/comment.js');
const Article = require('../models/article.js');

// function pour ajouter un commentaire a un article

exports.addComment = async (req, res) => {
    try {
        const { body } = req.body;
        const articleId = req.params.article; // recupérer l'id de larticle a partir des paramétre de la route
        const comment = await comment.createComment({body, ArticleId: articleId});// Crée un nouveau commentaire associé à l'article

        res.status(200).send(comment); 

    }catch (err) {
        res.status(500).send(err.message);
    }
};