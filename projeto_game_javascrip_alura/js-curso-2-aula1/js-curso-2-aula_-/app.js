const btChute = document.querySelector('#chute');
const btReiniciar = document.querySelector('#reiniciar');
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag,texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial() {

    mensagemInicialParagrafo = `escolha um numero entre 1 a ${numeroLimite}`;  
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p', mensagemInicialParagrafo);
}

exibirMensagemInicial()

function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(campo, tag){

    campo = document.querySelector(tag);
    campo.value = '';
}

btChute.addEventListener('click', () =>{

    let chute = Number(document.querySelector('.container__input').value);
    
    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;     
        exibirTextoNaTela('p', mensagemTentativas);
        btReiniciar.removeAttribute('disabled');
        
    }else{
        exibirTextoNaTela('h1','Errado')

        if(numeroSecreto > chute){
            exibirTextoNaTela('p','O numero secreto é maior');
        }else{
            exibirTextoNaTela('p','O numero secreto é menor');
        }
        tentativas++;
    }   
    limparCampo(chute,'.container__input')
})

btReiniciar.addEventListener('click', () =>{
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    btReiniciar.setAttribute('disabled',true);
})



