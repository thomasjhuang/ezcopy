// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Gets image information from screen capture
const fileName = ericInput;

// Read a local image as a text document
// Saves response in json file
var json_result = {
    response:[]
};
client
  .documentTextDetection(fileName)
  .then(results => {
      const fullTextAnnotation = results[0].fullTextAnnotation;
      const text = fullTextAnnotation.text;
      json_result.response.push({fullTextAnnotation});
      json_result.response.push({text});
      var json = JSON.stringify(json_result, null, "\t");
      var fs = require('fs');
      fs.writeFile('image_text.json', json, 'utf8');
  })
  .catch(err => {
      console.error('ERROR:', err);
  });