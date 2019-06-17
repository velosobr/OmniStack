const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostControllers = require('./controllers/PostController');
const likeControllers = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostControllers.index);
routes.post('/posts', upload.single('image'), PostControllers.store);


routes.post('/posts/:id/like', likeControllers.store);
//http://localhost:3333/posts
module.exports = routes; 