const postPredictHandler = require('../server/handler');

const routes = [
  {
    path: '/classify',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true
      }
    }
  }
]

module.exports = routes;