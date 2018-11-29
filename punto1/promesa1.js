var http = require('http');

// Se inicia la función que se ejecutará en la promesa cuando haya una petición del servidor
function multiplicaPorSiMismo(valor, ejecuta) {
    console.log(`Inicia ejecuación. El Valor es = ${valor}`)
    setTimeout(() => {
        ejecuta(valor, valor * valor);
        //ejecuta(2,2*2)
    }, 2000)
}

var promesaUno = new Promise((resolve, reject) => {
    console.log('Iniciando la Promesa 1\n\n Hacer GET al servidor\n');
    // Una vez hecha la petición a http://localhost:8080/ se resuelve ésta
    http.createServer((req, res) => {
        return((multiplicaPorSiMismo(2, (valor, resultado)=> {
            console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
        }))) ? reject(new Error('Conexión fallida al servidor')) : resolve(res)
    }).listen(8080)
})


promesaUno.then((resolve) => {
    console.log('Procesando la multiplicación, espere 2 segundos\n...\n')
}).catch((err) => {
    console.log(err.message)
})