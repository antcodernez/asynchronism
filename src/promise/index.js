//Estructura base de las promesas
const promise = new Promise((resolve, reject) => {
    resolve("Hey everything is OK");   
});

const cows = 9;

const countCows = new Promise((resolve, reject) => {
    if(cows > 10)
        {
            resolve(`Tienes muchas vacas cabrón, tienes ${cows}`);
        } 
    else
        {
            reject(`No tienes muchas vacas en la granja por pobre`);
        }
})

countCows.then(result => 
    console.log(result)
    ).catch(error => 
        console.log(error)).finally(() => console.log("Se acabo :D"));
//Tengo los elementos que conforman la promesa
//.then para anidar solicitudes encadenadas
// .catch para el reject y ver que va a pasar cuando no se cumple con la promesa
//.finally cuando ya termino no importa si fue result o reject sino cuando la finalización de está ejecución a llegado a su final