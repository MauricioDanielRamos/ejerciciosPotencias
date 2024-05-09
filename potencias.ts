import * as rls from "readline-sync";

let nroBase : number = rls.questionInt("Ingrese un numero para determinar el numero base: ");  
let nroExponente : number = rls.questionInt("Ingrese un numero para determinar la potencia: ");
let resultadoPotencia : number=0;

/* Función para calcular la potencia de un número */
function calcularPotencia(base: number, exponente: number): number {
    if (exponente == 0) {                                            // Si el numero elegido para la potencia es 0,
        return 1;                                                    // se retorna el valor de 1.
    } else {
        let resultadoPotencia = 1;                                   // Aqui se inicializa el resultado con 1, porque
        for (let i = 0; i < exponente; i++) {                        // con 0 ya fue determinado anteriormente.
            resultadoPotencia *= base;                               // Aqui se utiliza la formula de potencia.
        }
        return resultadoPotencia;                                    // Aqui se retorna el resultado de la funcion
    };                                                               // "calcularPotencia".
};

resultadoPotencia = calcularPotencia (nroBase, nroExponente);

console.log("el resultado de ", nroBase, " elevado a ", nroExponente, " es: ", resultadoPotencia);