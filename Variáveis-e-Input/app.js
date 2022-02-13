const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
let teste = 'Teste';

readline.question('Informe sua idade:', input => {
    leituraDeCampo = input;
    console.log(`O usuário digitou: ${leituraDeCampo} e nossa variável de teste é: ${teste}`);
});