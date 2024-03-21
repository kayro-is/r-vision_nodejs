const express = require('express');
// Importation des controlleurs pour les articles
const articlesController = require('./controllers/articlesController.js');

// création d'un router express
const router = express.Router();

// Déffinition des routes pour les opération Crud sur les articles
router.post('/articles', articlesController.createArticle); // Crée un article
router.get('/articles', articlesController.getAllArticles); // lire tous les articles 
router.get('/articles', articlesController.getAllArticles); // lire un article par son ID
router.put('/articles', articlesController.updateArticle); // mettre a jour un article par son ID
router.delete('/articles', articlesController.deleteArticle); //supprimer un article par son ID

// Routes d'authentification 
router.post('./register', register);
router.post('./login', login);



module.exports = router;
