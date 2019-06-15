const express = require('express');
const PostControllers = require('./controllers/PostController');
const routes = new express.Router();


routes.post('/posts', PostControllers.store);

//http://localhost:3333/posts
module.exports = routes; 