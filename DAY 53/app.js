const http = require('http');
const { homedir } = require('os');
const PORT = 8900;

const server = http.createServer((req, res) => {
  const url = req.url;

  
  if (url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  } else if (url === '/filter') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Filter Page');
  } else if (url === '/details') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Details Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});