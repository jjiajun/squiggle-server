const express = require('express');

const predictionRouter = express.Router();

module.exports = (controller) => {
  predictionRouter.get('/getpredictiondata', controller.getPredictionData.bind(controller));

  predictionRouter.get('/addpredictiondata', controller.addPredictionData.bind(controller));

  // predictionRouter.post('/uploadimage', controller.uploadImage.bind(controller));

  // predictionRouter.post('/deleteimage', controller.deleteImage.bind(controller));

  return predictionRouter;
};
