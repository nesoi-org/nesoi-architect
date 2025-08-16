import nesoi from "$";

export default nesoi.constants('core')
    .values($ => ({
        CREDENTIALS_CRYPTO_KEY: $.app('CREDENTIALS_CRYPTO_KEY')
    }))

    .enum('network_protocol', $ => ({
        'http': $.opt({
            alias: 'HTTP'
        }),
        'https': $.opt({
            alias: 'HTTPS'
        }),
        'ws': $.opt({
            alias: 'WebSocket'
        }),
        'wss': $.opt({
            alias: 'WebSocket+TLS'
        }),
        'psql': $.opt({
            alias: 'PostgreSQL'
        })
    }))

    .enum('credentials_type', $ => ({
        'pass': $.opt({
            alias: 'Password'
        }),
        'user:pass': $.opt({
            alias: 'Username and Password separated by a :'
        }),
        'ssh_key': $.opt({
            alias: 'SSH Key'
        })
    }))

    .enum('device_type', $ => ({
        'digitalocean.droplet': $.opt({
            alias: 'Digital Ocean Droplet'
        }),
        'db': $.opt({
            alias: 'Database'
        }),
        'ext': $.opt({
            alias: 'External Application'
        }),
    }))

    .enum('container_type', $ => ({
        'docker': $.opt({
            alias: 'Docker'
        })
    }))

    .enum('node_type', $ => ({
        'app': $.opt({
            alias: 'Nesoi Application'
        }),
        'db': $.opt({
            alias: 'Database'
        }),
        'ext': $.opt({
            alias: 'External Application'
        }),
    }))

    .enum('node_visibility', $ => ({
        'public': $.opt({
            alias: 'Public',
            description: 'A node thats accessible through the public internet'
        }),
        'hidden': $.opt({
            alias: 'Hidden',
            description: 'A node thats on a publicly accessible device, but not publicly exposed'
        }),
        'vpn': $.opt({
            alias: 'VPN',
            description: 'A node thats only accessible through a VPN'
        }),
    }))

    .enum('link_type', $ => ({
        'read': $.opt({
            alias: 'Read'
        }),
        'read_write': $.opt({
            alias: 'Read/Write'
        }),
        'api': $.opt({
            alias: 'API'
        })
    }))