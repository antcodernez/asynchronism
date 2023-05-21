import fetch from "node-fetch";
// Estoy importando la lógica necesaria para ejecutar mi archivo

const API = "https://api.escuelajs.co/api/v1";
// crear una función que va a recibir como argumento la URL de la API y me va a retornar el llamado consecuente de fetch

function fetchData(urlAPI)
    {
        return fetch(urlAPI);
    }

// fetchData(`${API}/products`) //Voy a transformar la API
//     .then(response => response.json()) // utiliza el elemento .then para saber que hay es su respuesta, response => response.json() para transformar la información del primer llamado en este caso a products con la data que me está regresando a un objeto json
//     .then(products => {
//         console.log(products)
//     }) //Quiero mostrarlo para saber que incluye, puedo anidar muchos .then
//     .then(() => console.log("XD"))
//     .catch(error => console.log(`Un error mi master ${error}`))

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        //Mostrar todos los productos
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product =>{
        //Mostrar el title del producto que accedimos en la segunda solicitud
        console.log(product.title);
        return fetchData(`${API}/categorues/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
        //Ya estoy haciendo el llamado
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Es usted un master que lo logro, pronto tendrá un empleo mi master :D"));