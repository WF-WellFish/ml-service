const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');

async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeBilinear([150, 150])
      .expandDims();
    
    const normalizedTensor = tensor.div(tf.scalar(255));

    const prediction = model.predict(normalizedTensor);
    const score = await prediction.data();
    console.log(score)
    const confidenceScore = Math.max(...score);
    console.log(confidenceScore)
    const maxIndex = score.indexOf(confidenceScore);
    console.log(maxIndex)


    return {maxIndex};
  } catch (error) {
    throw new InputError(`Terjadi kesalahan input: ${error.message}`);
  }
}

module.exports = predictClassification;
