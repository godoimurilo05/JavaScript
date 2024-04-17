
let numeroDecimal = 10
let numeroSecreto =parseInt(Math.random() * numeroDecimal + 1);
let numeroEscolhido;
let tentativas = 1;
console.log(numeroSecreto);

while (numeroSecreto != numeroEscolhido) {
    numeroEscolhido = prompt(`Escolha um numero de 1 a ${numeroDecimal}`);
   
    if(numeroSecreto == numeroEscolhido) {
        break;

    } else {
        if (numeroSecreto > numeroEscolhido){
            alert(`O numero secreto é maior que ${numeroEscolhido}`);
        }else {
            alert(`O numero secreto é menor que ${numeroEscolhido}`);
        }

        tentativas++
    }
}
let palavraTentativa = tentativas > 1 ?'tentativas' : 'tentativa';
alert(`Você acertou o numero secreto ${numeroEscolhido} com ${tentativas} ${palavraTentativa}`)
