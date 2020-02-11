'use strict';

console.log('hello world');

//key to node's http functionality
var http = require("http");
//capability to interact with file system
var fs = require("fs");
//allows us to handle file paths
var path = require("path");
//allows us to determine a files mime type (media type)
var mime = require("mime");

// npm init -- to get out package.json
// npm i -S mime -- installs mime adds dependancy and node_modules folder

function send404(response) {
  response.writeHead(404, {"Content-type": "text/plain"});
  response.write("Error 404: resource not found");
  response.end();
}

function sendPage(response, filePath, fileContents) {
  response.writeHead(200, {"Content-type": mime.getType(path.basename(filePath))}); //mime.getType replace mime.lookup
  response.end(fileContents);
}

function serverWorking(response, absPath) {
  fs.exists(absPath, function(exists) {
    if (exists){
      fs.readFile(absPath, function(err, data){
        if (err){
          send404(response)
        } else {
          sendPage(response, absPath, data);
        }
      });
    } else {
      send404(response);
    }
  });
}

var server = http.createServer(function(request, response){
  var filePath = false;

  if(request.url == '/'){
    filePath = "public/index.html";
  } else {
    filePath = "public" + request.url;
  }
  var absPath = "./" + filePath;
  serverWorking(response, absPath);
});

var port_number = server.listen(process.env.PORT || 3000);

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("it's alive!");
  response.end();
})  // .listen(3000);

// console.log(`listening on port ${port_number}`) //fix this



//in cmd line -> node server.js
//ctrl c to exit

//for heroku
//once server is working
  // specify node version in json file
  // example "engines": {
   	//  "node": "12.13.x"
    // }
  //apply buildpack
  //https://github.com/heroku/heroku-buildpack-nodejs#v83 -a heroku-app-name
 //git add .
 //git commit -m "message"
 //heroku create
 //git push heroku master

 //ensure an instance of app is running?
//  heroku ps:scale web=1

//rename
// heroku apps:rename myfirstserver
//heroku open -- to open your page!
