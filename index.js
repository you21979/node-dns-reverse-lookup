'use strict';
var dns = require('dns');
var Promise = require('bluebird');

var lookup_ipv4 = exports.lookup_ipv4 = function(hostname){
    return new Promise(function(resolve, reject){
        dns.resolve4(hostname, function (err, ipaddresses) {
            if(err) reject(err)
            else resolve(ipaddresses)
        })
    })
}

var lookup_ipv6 = exports.lookup_ipv6 = function(hostname){
    return new Promise(function(resolve, reject){
        dns.resolve6(hostname, function (err, ipaddresses) {
            if(err) reject(err)
            else resolve(ipaddresses)
        })
    })
}

var reverse_lookup = exports.reverse_lookup = function(ipaddress){
    return new Promise(function(resolve, reject){
        dns.reverse(ipaddress, function (err, hostnames) {
            if(err) reject(err)
            else resolve(hostnames)
        })
    })
}

