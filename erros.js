//SyntaxError: Missing initializer in const declaration
const numero;

//SyntaxError: Missing ) after argument list
console.log(numero;

//ReferenceError: variavelInexistente is not defined
console.log(variavelInexistente);

//Uso do console error errado
console.log("deu erro");
console.error ("deu erro");

//Uso do console error correto
console.log("deu erro");
console.error (new Error("deu erro"));
