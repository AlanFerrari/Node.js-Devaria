const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);    
    if(!resultado){
        console.log('Número informado é inválido!!!');
    }
    return resultado;
}

const validarOperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Operador informado é inválido!!!');
            return null;
    }
}

readLine.question('Favor informar um número: ', (numero1) => {
    const numeroValido1 = validarNumeroInformado(numero1);

    if(numeroValido1){
        readLine.question('Favor informar outro número: ', (numero2) => {
            const numeroValido2 = validarNumeroInformado(numero2);

            if(numeroValido2){
                readLine.question('Favor informar o operador: ', (operador) => {
                    const operadorValido = validarOperador(operador);

                    if(operadorValido){
                        switch(operadorValido){
                            case '+':
                                console.log(`Operador selecionado foi Adição - Resultado ${numeroValido1} + ${numeroValido2} = ${numeroValido1 + numeroValido2}`);
                                break;
                            case '-':
                                console.log(`Operador selecionado foi Subtração - Resultado ${numeroValido1} - ${numeroValido2} = ${numeroValido1 - numeroValido2}`);
                                break;
                            case '*':
                                console.log(`Operador selecionado foi Multiplicação - Resultado ${numeroValido1} x ${numeroValido2} = ${numeroValido1 * numeroValido2}`);
                                break;
                            case '/':
                                console.log(`Operador selecionado foi Divisão - Resultado ${numeroValido1} / ${numeroValido2} = ${numeroValido1 / numeroValido2}`);
                                break;
                            case '%':
                                console.log(`Operador selecionado foi Modulo - Resultado ${numeroValido1} % ${numeroValido2} = ${numeroValido1 % numeroValido2}`);
                                break;
                            default:
                                break;
                        }
                    }
                });
            }
        });
    }
})