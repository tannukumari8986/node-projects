http = require("http")

server = http.createServer((req,res) =>{
    data = {name: 'Tannu', age:20, location: 'Patna', mail: 'Tkumari930451@gmail.com'};
    res.writeHead(200, {'Content-Type':"application/json"})
    res.end(JSON.stringify(data))
    
})

server.listen(3000, ()=>{console.log('server Up')})