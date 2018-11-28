var http = require('http');
var promesa = new Promise((resolve, reject) => {
    console.log('Iniciando las promesas de Pepe');
    http.createServer((req, res) => {
        return(!req) ? reject(new Error('Conexión fallida al servidor')) : resolve(res)
    }).listen(8080)
})


promesa.then(function(res){
    console.log(`Inicia el día de Pepe`);
    
        res.end(function despierto(accion, ejecucion) {
                setTimeout(function() {
                    console.log(`Inicia ejecución: Pepe se despiera a las 6:00am`)
                }, 2000)

                setTimeout(function() {
                    console.log(`Inicia ejecución: se alista y sale a coger Transmilenio a las 6:00am`)
                }, 2000)

        })
    
}).catch(function(err){
    console.log(err.message)
    console.log('No suena el despertador')
})