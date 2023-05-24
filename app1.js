const http=require('http');
const Routes=require('./route1');
console.log(Routes.someText);
const server=http.createServer(Routes.handler);
server.listen(2222)
