import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

//Lógica de async: ir por los datos, luego esperar por ellos y finalmente retornarlos hacia el usuario
async function fetchData(urlApi) //siempre async antes de function
    {
        const response = await fetch(urlApi) //hacemos uso del fetch()
        const data = await response.json(); //estructura de los datos transformandolos en json
        return data//retorna la información de la API que estamos solicitando
    }    

//también se puede colocar la palabra async antes del argumento y se usa arrow function
const anotherFunction = async urlApi => 
    {
        //En try estará todo lo que queremos que suceda con la lógica de la aplicación
        try 
            {
                const products = await fetchData(`${urlApi}/products`);
                const product = await fetchData(`${urlApi}/products/${products[0].id}`);
                const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

                console.log(products);
                console.log(product.title);
                console.log(category.name);
            }   
        catch (error)
            {
                console.error(error);
            }
    }
anotherFunction(API);

// Cuando se ejecuta console.log(products); en fetchData se solicita todos los productos de la API con ${urlApi}/products es por eso que vemos en la salida una larga lista de bloques entre corchetes [] y separados por llaves {}.
// .
// Cuando se ejecuta console.log(product.title); en fetchData se solicita el título de un producto en particular accediendo al atributo title, para ello tenemos que con ${urlApi}/products/${products[0].id} el cero 0 indica la posición de products que acabamos de almacenar la lista de productos, pero debe finalizar con id porque esa es la forma para acceder al objeto con ese identificador en la posición cero.
// Si solo colocamos ${urlApi}/products/${products[0]} sin el .id, en la consola tendríamos un error de tipo: TypeError: Cannot read properties of undefined (reading 'id') así que no podemos acceder.
// .
// Cuando se ejecuta console.log(category.name); en fetchData se solicita el nombre de la categoría que corresponda al producto que se llamó anteriormente, para ello tenemos ${urlApi}/categories/${product.category.id} y no es necesario indicar la posición porque por cada producto, solo hay un bloque de categoría.