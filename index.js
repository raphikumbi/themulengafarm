const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Helper function to get content type
function getContentType(filePath) {
    const ext = path.extname(filePath);
    if (ext === '.css') return 'text/css';
    if (ext === '.js') return 'text/javascript';
    if (ext === '.html') return 'text/html';
    return 'text/plain';
}

// Create HTTP server
const server = http.createServer((req, res) => {
    let requestedPath = req.url === '/' ? '/views/index.html' : req.url;
    let filePath = path.join(__dirname, requestedPath);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': getContentType(filePath) });
            res.end(content);
        }
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
