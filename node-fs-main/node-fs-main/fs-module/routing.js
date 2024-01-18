http = require('http')


server = http.createServer((req,res)=>{
    //res.end(req.url)
    if(req.url === '/')
    
    {
        res.writeHead(200, {"Content-Type": 'text/plane'})
        res.end("Hello World!")
    }
    else if(req.url === '/about')

    {
        res.writeHead(200, {"Content-Type": 'text/plane'})
        res.end("Welcome to nsti patna")
    }
    else if (req.url === '/contact')
    {
        res.writeHead(200, {"Content-Type": 'text/plane'})
        res.end("i am from patna")
    }
    else
    {
        res.writeHead(200, {"Content-Type": 'text/plane'})
        res.end("Sorry, the requested resource could't find")
    }
    
})

server.listen(3000, ()=>{console.log('server Up')})