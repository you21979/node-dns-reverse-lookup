'use strict';
var dns = require('dns');
var Promise = require('bluebird');

var lookup = exports.lookup = function(ipaddress){
    return new Promise(function(resolve, reject){
        dns.reverse(ipaddress, function (err, hostnames) {
            if(err) reject(err)
            else resolve(hostnames)
        })
    })
}

var match = exports.match = function(ipaddress, str){
    return lookup(ipaddress).then(function(res){
        return res.map(function(r){
            return {
                host : r,
                match : r.match(str) ? true : false,
            }
        })
    })
}

