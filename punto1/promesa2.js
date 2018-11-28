var http = require('http');
var promesaDos = new Promise((resolve, reject) => {
    console.log('Iniciando la Promesa 2');
    http.createServer((req, res) => {
        return(!req) ? reject(new Error('Conexión fallida al servidor')) : resolve(res)
    }).listen(8080)
})

var max = 10;
var cnt = 0;

promesaDos.then(function(res){
    console.log(`Inicia ejecución`);
    
        function asincrono(valor, ejecucion) {
            console.log(`Inicia ejecución: el Valor es = ${valor}`)
                setTimeout(function() {
                    ejecucion(valor, valor * valor)
                }, 0 | Math.random() * 100)
        }
        
        for (var i = 0; i < max; i++) {
            asincrono(i, function(valor, resultado) {
                console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
            if (++cnt === max) {
                console.log('Éxito')
            }
        });
    }
    
}).catch(function(err){
    console.log(err.message)
})