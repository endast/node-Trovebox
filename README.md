# Trovebox API client library for node.js

node-Trovebox is a client library for 

## Requirements
* Python 2.7
* Trovebox Python Library 

## Installation

    npm install trovebox 

## Usage

    var trovebox = require('trovebox');

    var serveropts = {
      host:"http://photo.example.com",
        consumer_key: "consumer_key",
        consumer_secret: "consumer_secret",
        token: "token",
        token_secret: "token_secret"
    }

    var client = new trovebox(serveropts);

    client.photo.list(function(err, data) {
        if(!err){
           console.log(data);
        }
    });
## Versions

0.0.1 - First version
