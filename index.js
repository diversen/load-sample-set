var tinySampleLoader = require('tiny-sample-loader');
var audioBufferInstrument = require('audio-buffer-instrument');

function loadSampleSet(ctx, dataUrl, cb) {
    
    fetch(dataUrl).then(function(response) {
        
        if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' +  response.status);  
            return;  
        }

        response.json().then(function(data) {  
            
            var baseUrl = data.samples;
            var buffers = {};
            var promises = [];

            data.filename = [];
            var i = 0;
            data.files.forEach(function (val) {
                var filename = val.replace(/\.[^/.]+$/, "");
                data.filename.push(filename);
                var remoteUrl = baseUrl + val;
                
                let loaderPromise = tinySampleLoader(remoteUrl, ctx, (buffer) => {
                    buffers[filename] = new audioBufferInstrument(ctx, buffer);
                });
                
                promises.push(loaderPromise);
                
            });
            
            Promise.all(promises).then(values => { 
                cb(data, buffers);
            }).catch(e => {
                console.log(e);
            });
            
            
        });    
    }).catch(function(err) {  
        console.log('Fetch Error :-S', err);  
    });
}

module.exports = loadSampleSet;