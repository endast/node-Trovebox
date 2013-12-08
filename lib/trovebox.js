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
        this.photo = new TroveboxPhoto(this);
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


Trovebox.prototype.get = function(req, callback) {
        _.extend(req, {json: true})
        request(req, function (err, response, body) {
                callback(err, body);
        })
}

Trovebox.prototype.post = function(req, callback) {
        _.extend(req, {json: true})
        request.post(req, function (err, response, body) {
                callback(err, body);
        })
}

// TEST

TroveboxTest.prototype.hello = function(opts, callback) {
        var request = {url:this.parent.host+'/hello.json', oauth:this.parent.oauth, qs:opts};
        this.parent.get(request, callback)
}

// PHOTO

// Convert array of tags to commaseparated string
function parseTags(tags){
    if(Array.isArray(tags)){
        return tags.join(",")
    }
    return tags
}

TroveboxPhoto.prototype.list = function(opts, callback) {
        if (typeof callback === 'undefined') {
            callback = opts;
            opts = {};
        }

        if(opts.tags){
            opts.tags = parseTags(opts.tags);
        } 
        var request = {url:this.parent.host+'/photos/list.json', oauth:this.parent.oauth, qs:opts};
        this.parent.get(request, callback)
}

TroveboxPhoto.prototype.view = function(photoid, opts, callback) {
        if (typeof callback === 'undefined') {
            callback = opts;
            opts = {};
        }
        var request = {url:this.parent.host+'/photo/'+photoid+'/view.json', oauth:this.parent.oauth, qs:opts};
        this.parent.get(request, callback)
}

TroveboxPhoto.prototype.nextprevious = function(photoid, opts, callback) {
        if (typeof callback === 'undefined') {
            callback = opts;
            opts = {};
        }
        var request = {url:this.parent.host+'/photo/'+photoid+'/nextprevious.json', oauth:this.parent.oauth};
        this.parent.get(request, callback)
}

