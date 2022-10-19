const http = require('http');
const fs = require('fs');

//the above two lines of code import the fs and http modules.



//here the createserver method is used to make a server
//this server listens for requests on port 8080
//the req argument represents the client request
//set header is used 

http.createServer(function (req, res) {
    console.log(req.url,req.method);

    //set header is used to tell the server about the request like what kind of response the request wants i.e. html, text, json, etc here it wants text
    res.setHeader('Content-Type', 'text/html');


    //initial value of path set
    let path = './project/'

    //switch case which takes in the url of the request which was given when you type a url on the port. this then updates the path variable and sets the status code
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            path += 'contact-me.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // this uses the proper path to know which file to read and then does res.end accordingly.
  fs.readFile(path, function(err, data) {
    
    if (err) {
        //if its an error then its logs it and ends the response process.
        console.log(err);
        res.end();
    } else {
        //this sends the data of the file to the browser
        res.end(data);
        //this is equavalient to res.write(data) & res.end()
    }

  });
}).listen(8080);