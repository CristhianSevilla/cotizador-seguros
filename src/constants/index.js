export const MARCAS = [
    {id: 1, nombre: "Europeo"},
    {id: 2, nombre: "Americano"},
    {id: 3, nombre: "Asiatico"},
]


//"YEARMAX" que almacena el año actual obtenido a través de la función "getFullYear()" de la clase Date.

const YEARMAX = new Date().getFullYear();

//Array.from()". Esta función crea un nuevo array a partir de un objeto iterable, en este caso, un array de 25 elementos con valores undefined, que se crea con "new Array(25)

//El segundo argumento de "Array.from()" es una función de mapeo que se ejecuta en cada elemento del array, y que en este caso, utiliza la variable "YEARMAX" para restar un índice específico del array y así obtener un año retroactivo. En otras palabras, se crea un array de 25 años retroactivos al año actual.

export const YEARS = Array.from(
    new Array(25),
    (valor, index) => YEARMAX - index
);


export const PLANES = [
    {id: 1, nombre: "Básico"},
    {id: 2, nombre: "Completo"},    
]
