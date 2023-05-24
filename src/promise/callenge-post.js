import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

//Voy a agregar información

const postData = (urlApi, data) => 
    {
        //Voy a tener un objeto que tendrá la configuración necesaria para decirle el método a usar, el modo, las credenciales, que en el caso de guardar información vaya con un usuario y contraseña
        const response = fetch(urlApi, {
            method: `POST`,
            mode: `cors`,
            credentials: "same-origin", //Estándar de que si no hay alguna autenticación no está pasando nada
            headers: { 
                    'content-Type': `application/json` //Estoy diciendo que el valor que estoy enviando es de aplication/json, si estoy enviando otro archivo, lo que debo de hacer es cambiar el elemento y otras configuraciones
                },
            body: JSON.stringify(data)
        })
        return response;
    }
let newProduct = {
        "title": "plants",
        "price": 250,
        "description": "The better product from Colombia",
        "categoryId": 1,
        "images": ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
    }

postData(`${API}/products`, newProduct)
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log("Es usted un master mi gran Yisus"));