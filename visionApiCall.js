// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Gets image information from screen capture
const fileName = ericInput;

// Read a local image as a text document
// Saves in variable result 
var result = "";
client
  .documentTextDetection(fileName)
  .then(results => {
      const fullTextAnnotation = results[0].fullTextAnnotation;
      result = fullTextAnnotation.text;
      //console.log(result);
  })
  .catch(err => {
      console.error('ERROR:', err);
  });