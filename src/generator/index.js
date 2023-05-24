//Declaración de la función del Generador
function* generator() // * me va a permitir identificar la estructura
    {
        yield 1; //yield me va a permitir los steps que vamos a tener
        yield 2;
        yield 3;        
    }

//Expresión de la función Generadora
const g = generator();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//Expresión de la función Generadora
function* iterate(array)
    {
        for(let value of array)
            {
                yield value;
            }
    }

//Declaración de la función del Generador
const i = iterate(["Jesus", "Ana", "Lucia", "Juan"]);
console.log(i.next()); //Me va a retornar el value Jesus y next retorna el done: FASLE
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next());
console.log(i.next()); //Cuando se queda sin elementos el array voy a arrojar undefined   
