//let x = "";
//console.log(x);
//x = "oi";

//1)declarando a função
                      //string
function imprimeTexto(texto) {
    console.log(texto);
}

//2) executando a função

imprimeTexto("oi");
imprimeTexto("outro texto");

//três formas de escrever funções

function soma() {
    //outros códigos, return deve ser SEMPRE A ÚLTIMA LINHA ou os códigos posteriores não serão retornados
    return 2+2;
}

//console.log(soma());

imprimeTexto(soma());
