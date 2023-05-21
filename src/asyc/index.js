// Lógica de mi promesa a incorporar
const fnAsyc = () =>
    {
        return new Promise((resolve, reject) =>
            {
                //Se está usando un operador ternario
                (true) ? setTimeout(() => resolve("Async!!"), 2000) : reject(new Error("Error!"));
            });
    }

//Quiero una función que va usar el concepto de async
//Async es el cuerpo de la función
const anotherFunction = async () =>
    {
        //Una vez dentro puedo usar await, de la lógica a implementar
        const something = await fnAsyc(); 
        // Cuando sea resuleto, voy a poder mostrar la informacion
        console.log(something);
        console.log("Hello");
    }
console.log("Before"); //Primero orden en mostrarse
anotherFunction(); //Tercera orden en ejecutarse porque tarda 2s en ejecutarse 
console.log("After"); // Segunda orden en ejecutarse porque el programa no se detiene por anotherFuntion() está esperando una promesa y aún así el programa no se detiene