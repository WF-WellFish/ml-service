const predictClassification = require('../services/inferenceService');
const crypto = require('crypto');
const storeData = require('../services/storeData');

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;

  const {maxIndex} = await predictClassification(model, image);

  const data = {
    "index": maxIndex
  }

  // await storeData(id,data);

  const response = h.response({
    status: 'success',
    message: 'Model is predicted successfully.',
    data
  })
  response.code(201);
  return response;
}

module.exports = postPredictHandler;
