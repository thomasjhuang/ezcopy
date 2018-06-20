/*
 * visionApiCall
 * 
 * Takes input from screen capture (Eric's output), makes
 * a call to the Google Vision Api and returns a string 
 * variable with the text from the input image file. 
 * 
 */
function visionApiCall(filenameInput) {

    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Read a local image as a text document
    // Saves response in string variable
    var string_text = "";
    client
    .documentTextDetection(filenameInput)
    .then(results => {
        const fullTextAnnotation = results[0].fullTextAnnotation;
        string_text = fullTextAnnotation.text;
    })
    .catch(err => {
        console.error('ERROR:', err);
    });

    return string_text;
}

var ncp = require("copy-paste");  //uses copy-paste
ncp.copy(visionApiCall("/mnt/c/Users/mhugheytestMeme.png"), function () {
    //optional callback after copy
});