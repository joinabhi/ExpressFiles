const fs=require('fs');

const requestHandler=(req, res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/login'){
        fs.readFile('message.txt',{encoding:'utf-8'}, (err, data)=>{
            if(err){
                console.error('error')
            }
            console.log(`data from file `+ data)

        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>')
        res.write('</html>')
        return res.end();
        })
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
       return req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString();
            const message=parsedbody.split('=')[1];
            fs.writeFile('message.txt',message, err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();  
            });
        })
     }
  else{
    res.setHeader('content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my node.js server</h1></body>')
    res.write('</html>')
    res.end();
  }
   
};

module.exports={
    handler:requestHandler,
    someText:'some hard coded text'
}