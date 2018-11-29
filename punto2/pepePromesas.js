// Reformulando las funciones como las explicó Adrián
// ACTIVIDAD 1:
function despertarTemprano(hora){
    return promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            return(!(hora == "06:00AM")) ?
                reject(new Error('No suena el despertador'))
                :
                resolve(true)
        }, 0)
    })
}

// ACTIVIDAD 2:
function tomarTransmilenio(hora){
    console.log('[06:00AM]\nSe despierta\n\n')
    return promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            return(!(hora == "07:00AM")) ?
            reject(new Error('Pepe, sufrió el paro en el portal y no pude coger transporte'))
            :
            resolve(true)
        }, 2000)
    })
}

// ACTIVIDAD 3:
function estudiarBictia(hora){
    console.log('[07:00AM]\nSe alista y sale a coger transmilenio\n\n')
    return promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            return(!(hora == "08:15AM")) ?
            reject(new Error('Pepe, llegó tarde y no puede entrar a clases'))
            :
            resolve(true)
        }, 2000)
    })
}

// ACTIVIDAD 4:
function salirAlmuerzo(hora){
    console.log('[08:15AM]\nEntra a estudiar a Bictia\n\n')
    return promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            return(!(hora == "12:00M")) ?
                reject(new Error('Pepe, no pudo almorzar porque le sale un pelo en la sopa'))
                :
                resolve(true)
        }, 2000)
    })
}

// ACTIVIDAD 5:
function trabajarBellatrix(hora){
    console.log('[12:00M]\nSale del estudio y almuerza\n\n')
    return promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            return(!(hora == "01:00PM")) ?
                reject(new Error('Pepe, se le olvidó el carnet y no lo dejan ingresar'))
                :
                resolve(true)
        }, 2000)
    })
}

// ACTIVIDAD 6:
function salirTrabajo(hora){
    console.log('[01:00PM]\nVa a trabajar en Bellatrix\n\n')
    return promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            return(!(hora == "08:00PM")) ?
                reject(new Error('Pepe es robado'))
                :
                resolve(true)
        }, 2000)
    })
}

// ACTIVIDAD 7:
function volverCasar(hora){
    console.log('[08:00PM]\nSale del trabajo a relajarse con sus compañeros de trabajo\n\n')
    return promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            return(!(hora == '11:00PM')) ?
                reject(new Error('Pepe ha perdido las llaves de su casa y le toca dormir en el parque'))
                :
                resolve(true)
        }, 2000)
    })
}

// ACTIVIDAD 8:
function verNetflix(hora) {
    console.log("[11:00PM]\nVuelve a casa\n\n")
    return promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            return (!(hora == "01:00AM")) ?
                reject(new Error('Pepe, olvidó pagar la mensualidad de Netflix... se desbarata la cama y no tiene donde dormir'))
                :
                resolve(true)
        }, 2000)
    })
}

despertarTemprano("06:00AM")
    .then((resolve)=>tomarTransmilenio("07:00AM")
    .then((resolve)=>estudiarBictia("08:15AM")
    .then((resolve)=>salirAlmuerzo("12:00M")
    .then((resolve)=>trabajarBellatrix("01:00PM"))
    .then((resolve)=>salirTrabajo("08:00PM"))
    .then((resolve)=>volverCasar("11:00PM"))
    .then((resolve)=>verNetflix("01:00AM"))
    .then((resolved)=>console.log('[01:00AM]\nSe acuesta para ver Netflix')))))
    .catch((err)=>{console.log(err.message)})