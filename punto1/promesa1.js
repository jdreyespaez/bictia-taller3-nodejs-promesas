var http = require('http');
var promesaUno = new Promise((resolve, reject) => {
    console.log('Iniciando la Promesa 1');
    http.createServer((req, res) => {
        return(!req) ? reject(new Error('Conexión fallida al servidor')) : resolve(res)
    }).listen(8080)
})

promesaUno.then(function(res){
    console.log(`Inicia ejecución`)
    res.end(
    function multiplicaPorSiMismo(valor, ejecuta) {
        console.log(`Inicia ejecución: el Valor es = ${valor}`)
        setTimeout(function() {
            ejecuta(valor, valor * valor);
            //ejecuta(2,2*2)
        }, 1000)
        multiplicaPorSiMismo(2, function(valor, resultado) {
            console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
        })
            console.log('Procesando')
    })
}).catch(function(err){
    console.log(err.message)
})