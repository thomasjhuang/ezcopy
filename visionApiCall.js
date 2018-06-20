/*
 * visionApiCall
 *
 * Takes input from screen capture (Eric's output), makes
 * a call to the Google Vision Api and copies the text to the
 * clipboard.
 *
 */
function visionApiCall(filenameInput) {

    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
    var ncp = require("copy-paste");  //uses copy-paste

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Read a local image as a text document
    // Copies text to clipboard
    var string_text = "fghjkl";
    client
        .documentTextDetection(filenameInput)
        .then(results => {
            const fullTextAnnotation = results[0].fullTextAnnotation;
            string_text = fullTextAnnotation.text;
            ncp.copy(string_text);
        }
        )
        .catch(err => {
            console.error('ERROR:', err);
        });
}