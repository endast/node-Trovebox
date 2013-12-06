var request = require('request');

function Trovebox(options) {
        if (!(this instanceof Trovebox)) return new Trovebox(options);

        this.host = options.host;
        this.oauth = {
            consumer_key: options.consumer_key,
            consumer_secret: options.consumer_secret,
            token: options.token,
            token_secret: options.token_secret
        };

        this.test = new TroveboxTest(this);
        this.action = new TroveboxAction(this);
        this.activity = new TroveboxActivity(this);
        this.photos = new TroveboxPhoto(this);
        this.tag = new TroveboxTag(this);
        this.group = new TroveboxGroup(this);
        this.webhook = new TroveboxWebhook(this);
}

module.exports = Trovebox;

function TroveboxTest(parent) {
    this.parent = parent;
}

function TroveboxAction(parent) {
    this.parent = parent;
}

function TroveboxActivity(parent) {
    this.parent = parent;
}

function TroveboxPhoto(parent) {
    this.parent = parent;
}

function TroveboxTag(parent) {
    this.parent = parent;
}

function TroveboxGroup(parent) {
    this.parent = parent;
}

function TroveboxWebhook(parent) {
    this.parent = parent;
}

function get(req, callback){
        request(req, function (err, response, body) {
                callback(err, body);
        })
}

TroveboxTest.prototype.hello = function(callback) {
        var request = {url:this.parent.host+'/hello.json', oauth:this.parent.oauth};
        get(request, callback)
};

TroveboxPhoto.prototype.list = function(callback) {
        var request = {url:this.parent.host+'/photos/list.json', oauth:this.parent.oauth};
        get(request, callback)
};

