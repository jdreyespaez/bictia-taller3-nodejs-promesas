var despertarTemprano = function() {
    return new Promise(function(resolve, reject) {
        resolve('Pepe se despertó a las 6:00am \n');
    });
};
  
var tomarTransmilenio = function(mensaje) {
    return new Promise(function(resolve, reject) {
      resolve(mensaje + 'Se alistó y tomó Transmilenio a las 7:00am \n');
    });
};
  
var estudiarBictia = function(mensaje) {
    return new Promise(function(resolve, reject) {
        resolve(mensaje + 'Entró a estudiar a las 8:15am \n');
    });
};

var salirAlmuerzo = function(mensaje) {
    return new Promise(function(resolve, reject) {
        resolve(mensaje + 'Salió del estudio y almorzó a las 12:00 \n');
    });
};

var trabajarBellatrix = function(mensaje) {
    return new Promise(function(resolve, reject) {
        resolve(mensaje + 'Fue a trabajar a Bellatrix a la 1:00pm \n');
    });
};

var relaxCompas = function(mensaje) {
    return new Promise(function(resolve, reject) {
        resolve(mensaje + 'Salió del trabajo a relajarse con sus compañeros de trabajo a las 8:00pm \n');
    });
};

var vuelveCasa = function(mensaje) {
    return new Promise(function(resolve, reject) {
        resolve(mensaje + 'Volvió a casa a las 11:00pm \n');
    });
};

var verNetflix = function(mensaje) {
    return new Promise(function(resolve, reject) {
        resolve(mensaje + 'Se acuesta para ver Netflix a la 1:00am \n');
    });
};
  
despertarTemprano().then(function(result){
    return tomarTransmilenio(result);
}).then(function(result){
    return estudiarBictia(result);
}).then(function(result){
    return salirAlmuerzo(result);
}).then(function(result){
    return trabajarBellatrix(result);
}).then(function(result){
    return relaxCompas(result);
}).then(function(result){
    return vuelveCasa(result);
}).then(function(result){
    return verNetflix(result);
}).then(function(result){
    console.log('Así fue el día de Pepe:\n \n' + result);
});
