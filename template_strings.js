const nomeApresentacao = "Ju";
const anoAtual = 2022;
const idadeApresentacao = anoAtual-1981;
const cidadeDeNascimento = "São Paulo";


//const apresentacao = "Meu nome é " +nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

//transformando a linha abaixo em uma linha mista, template de string
//const apresentacao = "meu nome é XXX, minha idade é XXX e nasci na cidade de XXX";

const apresentacao = `meu nome é ${nomeApresentacao}, minha idade é ${idadeApresentacao} e nasci na cidade de ${cidadeDeNascimento}`;


console.log(apresentacao);

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

//Leo diz: "por favor, quero beber cerveja"
