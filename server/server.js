const express = require('express');
const fs = require('fs');

var data = fs.readFileSync('microfonos.json');
var microfonos = JSON.parse(data);
let server = express();

server.listen(3000, () => { console.log("Listen 3000!"); });

server.get('/get', getMics);

//FUNCTIONS
function getMics(request, response) {
    var promise = new Promise(function(resolve, reject) {
        if (microfonos != undefined) {
            resolve("Que bien que anda este codigo pibe!!");
        } else {
            reject("Hay que debuggear.");
        }
    });

    promise.then(function() {
        console.log("Este codigo es una maravilla!!");
        response.send(microfonos);
    }, function() {
        console.log("Algo salio muy mal... Hay que debuggear.");
    });
}