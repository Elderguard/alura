//função declarada
function minhaFuncao(param) {
    //bloco de código;
}

minhaFuncao("param");

//expressão de função

const soma = function(num1, num2) {return num1+num2}
console.log(soma(1,1))

//diferença principal expressão de função não pode ser chamada antes de ser declarada

console.log(apresentar())

function apresentar () {
    return "olá";
}

console.log(soma(1, 1));
const soma2 = function(num1, num2) {return num1+num2}