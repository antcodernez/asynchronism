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
                        else
                            {
                                const error = new Error(`Error ${urlApi}`);
                                return callback(error, null); // Es un null porque no se está regresando ningún dato
                            }
                        //Debe ir dentro del segundo if, así el primer if con forma, es solo el estado constante mente cambiando, según lo que me entrege el servidor
                    }
    
            } 
        xhttp.send();
    }

// Se va a ejecutar el llamado
//Primero le voy a pasar un string con mi variable API, le estoy poniendo un /products para que vaya a esa petición.
//Despues voy a pasar un función anónima que tienen como argumentos error y data
fetchData(`${API}/products`, (error1, data1) => {
    // Voy a valdiar si me regresa un error, si lo hace quiero que me detenga todo
    if(error1) 
        {
            return console.error(error1);
        }
    //Cuando la petición es correcta y tengo la info, la tengo en data1
    //Dentro de fetch data vuelva a llamar a fetch data con otra logica consecuente de optener la información, en este caso es cuando la petición a sido correcta y tengo datos. ahora dispongo de la información en data1, así puedo jugar con esta misma y pasarla de nuevo a fetchData(), volviendola a llamar y pasar otro callback para recibir el valor de error así como los datos consecuentes de la segunda petición hecha
    
    //Voy a llamar a un producto en particular, no products, ese valor se encuentra en data1, sobre el primer elemento de un array que yo obtengo
    //(`${API}/products/${data1[0].id}) Así voy a realizar mi segunda petición, pero del primer elemento del array que me trajo la primer petición
    fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
        if(error2) return console.error(error2);

        //Puedo anidar otro llamado de fetchData() esperando a obtener la infomación de data2 y así usarla para este mismo
        //Voy a llamar la categoría dentro del segundo llamado, dado que tengo un producto en particular
        fetchData(`${API}/categories/${data2?.category.id}`, (error3, data3) =>{
            //Hay que tener cuidado con anidar multiples llamadas
            if(error3) return console.error(error3);
            // Quiero mostrar la información en consecuencia de cada una de las peticiones, quiero el valor de los opjetos que traje  
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
            //Estoy haciendo mis 3 peticiones de manera encadenada con lo que viene siendo mi lógica de mis callbacks

        }) //Si hago este acceso a datos, entrando a cada uno de los elementos de un objeto podemos tener detalles en donde si me equivoco con el nombre, en este caso ID y le ponga "IDS", puede que no lo encuentre o no este todavía presente, para solucionar esto, puedo usar un valor dentro de JS llamado optional chaiging, así no me causaría un error, es una opción. >>Ver curso ECMACScript6+     
    });
});

