// console.log('hello world');

const os = require('os');

const host = os.hostname();
const platform = os.platform();
const cpuCores = os.cpus().length;

// console.log(`Host: ${host}`);
// console.log(`Platform: ${platform}`);
// console.log(`Number of CPUs: ${cpuCores}`); 

const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;

console.log(`Server Connected...`);
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(`
Creator By: 66013716 พุฒิเทพ แก้วเกษ 
Welcome to CSI203-Laboratory: Demo-ServerNode.js...
Server: ${hostname}
Port: ${port}
Platform: ${platform}
Number of CPUs: ${cpuCores}
`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});