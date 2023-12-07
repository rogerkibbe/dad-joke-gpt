const https = require('https');
const url = require('url');

// Configurable variables for target API
const targetHostname = 'icanhazdadjoke.com';

// Create a server to handle incoming requests
const server = require('http').createServer((req, res) => {
    // Parse the incoming request URL
    const parsedUrl = url.parse(req.url, true);

    // Determine the path for the request to the target API
    let targetPath = '/';
    if (req.url.includes('/search')) {
        // Handle search queries
        targetPath = '/search';
        if (parsedUrl.search) {
            targetPath += parsedUrl.search; // Append query parameters
        }
    }

    // Options for the target API request
    const options = {
        hostname: targetHostname,
        path: targetPath,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'Node.js Server Proxy'
        }
    };

    // Make a request to the target API
    const apiReq = https.request(options, (apiRes) => {
        let data = '';
        apiRes.on('data', (chunk) => {
            data += chunk;
        });
        apiRes.on('end', () => {
            res.writeHead(apiRes.statusCode, {
                'Content-Type': 'application/json'
            });
            res.end(data);
        });
    });

    apiReq.on('error', (e) => {
        console.error(e);
        res.writeHead(500);
        res.end('Server error');
    });

    apiReq.end();
});

server.listen();
