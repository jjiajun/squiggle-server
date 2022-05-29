const express = require('express');

const predictionRouter = express.Router();

module.exports = (controller) => {

  predictionRouter.get('/getpredictiondata', controller.getPredictionData.bind(controller));

  predictionRouter.post('/uploadimage', controller.uploadImage.bind(controller));

  predictionRouter.get('/:key', downloadImage);

  predictionRouter.post('/deleteimage', controller.deleteImage.bind(controller));

  return predictionRouter;
};
