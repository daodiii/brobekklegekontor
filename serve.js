const http = require('http');
const fs = require('fs');
const path = require('path');

const dir = '/Users/daodilyas/Desktop/brobekklege';
const port = 8081;

const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };

http.createServer((req, res) => {
    let url = req.url === '/' ? '/index.html' : req.url;
    const filePath = path.join(dir, url);
    const ext = path.extname(filePath);
    fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
        res.end(data);
    });
}).listen(port, () => console.log(`Serving on http://localhost:${port}`));
