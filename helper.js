var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');


var visualRecognition = new VisualRecognitionV3({

    version: '2018-03-19',
    api_key: ''

});

/*

var params = {
    name: 'FaceRecognition',
    BarackObama_positive_examples: fs.createReadStream('./BarackObama.zip'),
    DonaldTrump_positive_examples: fs.createReadStream('./DonaldTrump.zip'),
    WenboYu_positive_examples: fs.createReadStream('./WenboYu.zip'),
};

visualRecognition.createClassifier(params,
    function (err, response) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(response, null, 2))
    });

*/

visualRecognition.getClassifier({
        classifier_id: 'FaceRecognition_1498123913'
    },
    function (err, response) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(response, null, 2))
    }
);
