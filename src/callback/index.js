//callback
function suma (num1, num2)
    {
        return num1 + num2;
    }
 
function calc(num1, num2, callback) 
    {
        return callback(num1, num2);
    }

console.log(calc(4, 7, suma)); //No es necesario poner parentesis sino se va a invocar, y no pasará lo que quiero que suceda.

// callback 2
function saludar(name)
    {
        console.log("Hola " + name);
    } 

function procesarEntradaUsuario(callback)
    {
        var name = prompt("Ingrese su nombre: ");
        callback(name);
    }

procesarEntradaUsuario(saludar) 

// setTimeout() recibe una función, el tiempo y argumentos que vayamos a necesitar

setTimeout(function () {
    console.log("Hola Javascript");
}, 2000); //En este caso no estoy usando los argumentos pero si estoy usando una función anónima

function saludo(name)
    {
        console.log("Hola " + name);
    }

setTimeout(saludo, 2000, "Jesús");
//Primero paso mi función, después el tiempo y al final los argumentos que va recibir la función que le estoy pasando