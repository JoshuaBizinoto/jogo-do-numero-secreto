/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 e 10';*/
let listaDeNumerosSorteados =[]; //receber os numeros sorteados na lista
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1;

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag); //como que essa variavel ''posssui'' dois valores
campo.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2} );
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value; //capturando o valor do chute do usuario
    if (numeroSecreto == chute){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = `Parabéns você acertou com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled'); //habilitando o botão apos acertar o chute
        
    } else{
        if (numeroSecreto > chute){
            exibirTextoNaTela('p', 'O número secreto é maior');
        } else{
            exibirTextoNaTela('p', 'O número secreto é menor');
        } 
        tentativas ++
        limparCampo()
    }
}
function gerarNumeroAleatorio() {
   let numeroSorteado =  parseInt(Math.random() * numeroLimite + 1); //armazena o retorno da função
   let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeNumerosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }
    if(listaDeNumerosSorteados.includes(numeroSorteado)){ //se já existe o numero dentro da lista, gere outro numero
        return gerarNumeroAleatorio(); 
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados);
        return numeroSorteado; //? gpt
    }
}



function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas =1;
    limparCampo();
    exibirMensagemInicial();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}