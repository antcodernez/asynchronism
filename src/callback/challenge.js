const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //Ya tengo una referencia de lo que voy a implementar de este recuso

const API = "https://api.escuelajs.co/api/v1";// Esta en mayusculas porque hace referencia a un valor que no va a cambiar, tengo mi referencia del root de mi API

//Mis dos elementos necesarios para crear mi app

//Voy a crear una función que me va a permitir recibir la URL y el callback, que será una función anónima que servira para recibir la solicitud del llamado a la APi

function fetchData(urlApi, callback)
    {
        //urlAPi es a donde va a hacer el llamado
        //callback información que va a retornar los elementos, ya sea la data que reciba o el error de la llamada

        // Vamos a usar elemento de xmlhttprequest, para controlar el flujo del llamado
        
        let xhttp = new XMLHttpRequest(); 
        // Estoy instanciando XMLHttpRequest

        xhttp.open("GET", urlApi, true); // para abrir una conexión a mi API
        // primero especifico  el tipo de petición que es obtener, despues paso la URL que va a usar, por ultimo le paso el valor de true para habilitarlo, ahora tengo mi primer recurso

        // .onreadystatechange Es parte de los elementos de xmlhttprequest, para saber los diferentes estados de la solicitud y saber cuando esta disponible la información
        xhttp.onreadystatechange = function(event)
            {
                //Aquí adentro voy a validar el tipo de estado
                // Hay varios tipos de estados 0; es que no se a inicializado, 1; que es el de que todavía no se ha llamado el valor de sent cuando se ejecuta, 2; cuando ya se ejecuto el valor de sent, 3; que es el de interactuando se esta trabajando con la solicitud, 4; cuando se a completado la llamada
                if(xhttp.readyState === 4)
                    {
                        //Si el estado de la llamada ha sido completada
                        if(xhttp.status === 200) //El servidor responde de forma correcta
                            {
                                callback(null, JSON.parse(xhttp.responseText)); // Dentro de xhttp.responseText recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
                            }
                    }
                else
                    {
                        const error = new Error(`Error ${urlApi}`);
                        return callback(error, null); // Es un null porque no se está regresando ningún dato
                    }
            } 
        xhttp.send();
    }

