var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  const filename = (q.pathname=="/")?"./index.html":("."+q.pathname+".html");
  fs.readFile(filename, function(err, data) {
    if (err) {
        fs.readFile("./404.html",(error,dataa)=>{
            if(error){
                return res.end("Error 404!! Not Found")
            }
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write(dataa);
            return res.end();
        })
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();}
    });
}).listen(8080);