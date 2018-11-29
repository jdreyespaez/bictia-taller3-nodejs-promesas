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
            reject(new Error('Pepe, no pud almorzar porque le sale un pelo en la sopa'))
            :
            resolve(true)
        }, 2000)
    })
}

despertarTemprano("06:00AM")
    .then((resolved)=>tomarTransmilenio("07:00AM")
    .then((resolved)=>estudiarBictia("08:15AM")
    .then((resolved)=>salirAlmuerzo("12:00M")
    .then((resolved)=>console.log(`Se acuesta para ver Netflix`)))))
    .catch((err)=>{console.log(err.message)})