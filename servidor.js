var fs = require('fs');
var express = require('express');

var app = express();

var servidor = app.listen(8080, function() {
    var porta = servidor.address().port;
    console.log("Servidor executando na porta %s", porta);
});

app.use(express.static('public'));

app.get('/', function(req, res) {
    fs.readFile('documento.html', function(erro, dado) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(dado);
        res.end();
    });
});