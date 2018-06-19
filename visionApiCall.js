function visionApiCall(filenameInput) {

    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Gets image information from screen capture
    const fileName = filenameInput;

    // Read a local image as a text document
    // Saves response in json file
    var json_result = {
        response:[]
    };
    var string_text = "";
    client
    .documentTextDetection(fileName)
    .then(results => {
        const fullTextAnnotation = results[0].fullTextAnnotation;
        json_result.response.push({fullTextAnnotation});
        var json = JSON.stringify(json_result, null, 2);
        var fs = require('fs');
        fs.writeFile('image_text.json', json, 'utf8');

        string_text = fullTextAnnotation.text;
        //console.log(string_text);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });

    return string_text;
}