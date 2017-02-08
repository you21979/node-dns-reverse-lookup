const rev = require('..')
rev.reverse_lookup("216.58.220.238").
    then(hosts =>
        hosts.map(host =>
            ({host:host,check:host.match("1e100.net$") ? true : false })
        )
    ).then(console.log)
