let teste2 = document.querySelector('.wrapper').clientWidth;
console.log(teste2);
window.onload = function() {

  //FUNCAO DO ARQUIVO AQUI EM BAIXO
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let palavras = ['ESTARRECEDOR', 'ATARRACADO', 'TANGENCIADO'];
let palavradaSessao =  palavras[getRandomInt(3)] //aumentar conforme a quantidade de palavras no array e depois mudar o array pra json
let quantidadeLetras = palavradaSessao.split(""); //separa as letras
//console.log(palavradaSessao, palavradaSessao.length, "letras"); //length mostra a quantidade de letas
let pressionouTecla = false;
let contadorFor = 0;
let letraDigitada; let arrayLetraDigitada = []; //letra digitada pelo jogador durante a partida e array que armazeza a palavra inteira



'use strict';
const container = document.querySelector('.container');
const textarea = document.querySelector('.text');
const alphabet = document.querySelectorAll('.alpha');
const key = document.querySelectorAll('.key');
let checkCaps = false;
let checkLights = false;
//CAPSLOCK
const caps = function () {
  if (checkCaps == false) {
    for (let i = 0; i < alphabet.length; i++) {
      let getAlpha = alphabet[i].textContent;
      const up = getAlpha.toUpperCase();
      alphabet[i].textContent = up;
    }
    checkCaps = true;
  } else {
    for (let i = 0; i < alphabet.length; i++) {
      let getAlpha = alphabet[i].textContent;
      const low = getAlpha.toLowerCase();
      alphabet[i].textContent = low;
    }
    checkCaps = false;
  }
};
//Lights
const blink = function () {
  if (checkLights == false) {
    key.forEach((key) => key.classList.add('lightOn'));
    checkLights = true;
  } else {
    key.forEach((key) => key.classList.remove('lightOn'));
    checkLights = false;
  }
};
//Event listener
//const getContent = e.target.textContent;
caps();
let getContent;
console.log(getContent);
container.addEventListener('click', function (e) {
  if (e.target.classList.contains('key')) {
    // if (e.target.classList.contains('spaceBar')) {
    //   textarea.textContent += ' ';
    // }
    // if (e.target.classList.contains('caps')) {
    //   caps();
    // }
    if (e.target.classList.contains('content')) {
      getContent = e.target.textContent;
      textarea.textContent += getContent;
      //console.log(getContent); //teste
      pressionouTecla = true;
  for (0; contadorFor < palavradaSessao.length && pressionouTecla == true; contadorFor++){
      
      letraDigitada = getContent;//event.key; //Aqui detecta a tecla
      auxHtml[contadorFor] = `<div id="box1"><p>${letraDigitada}</p></div>`;
      ReiniciarLetreiro();
      arrayLetraDigitada[contadorFor] = letraDigitada; //testar
      console.log(arrayLetraDigitada.join(''));//palavra completa
      pressionouTecla = false;
      
      if(palavradaSessao == arrayLetraDigitada.join('').toUpperCase()){
         console.log(palavradaSessao);
         console.log(arrayLetraDigitada);
         document.body.innerHTML +=  '<p id="textoVitoria">VOCÊ VENCEU</p>' //quando vencer proibir a digitacao no teclado até a proxima rodada
            }
   }

   




      //console.log(getContent);
    }
     if (e.target.classList.contains('backSpace') && contadorFor >= 1) {
       textarea.textContent = textarea.textContent.substring(
         0,
         textarea.textContent.length - 1
       );

       //console.log("ss");
     
    // if(getContent == "Backspace" && contadorFor >= 1){ //funcao de apagar
    contadorFor = contadorFor - 1;
    auxHtml[contadorFor] = `<div id="box1"><p></p></div>`;
      ReiniciarLetreiro();
    arrayLetraDigitada[contadorFor] = arrayLetraDigitada.pop();
    //console.log(contadorFor);
   //}
     
     
     
     
      }
     if (e.target.classList.contains('light')) {
       blink();
     }
  } else {
    return;
  }
});


let numeroLista = -1;
let auxHtml = [];
let adicionar = true;
let publicIdButton;
        
        function listarPalavras(lista) { 
           for (let i = 0; i < lista; i++){
           if(adicionar == true){
            numeroLista++;
            auxHtml[numeroLista] =
                `<div id="box1"><p></p></div>`;
            }else{
            auxHtml[publicIdButton] = '2';
            console.log('p');
            }
           }
           return auxHtml;
        }
         let listadasPalavras = [];
        //window.onload = function() {
            //evento.preventDefault();
            //let planetaCadastrado = new Palavra(nome, quantidadeLetras, significado);
            adicionar = true;
            let arraywordBox = listarPalavras(palavradaSessao.length);//ou +=
            ReiniciarLetreiro();
            function ReiniciarLetreiro(){
            document.getElementById("linhadasPalavras").innerHTML = arraywordBox.join('');
            }

            
        //LIMPAR OS ARRAYS DEPOIS QUANDO O JOGADOR VENCER O JOGO


        class Planeta {
            constructor(nome, classificacao, tamanho, massa, distancia){
            this.nome = nome; //usar o this antes de propriedade
            this.classificacao = classificacao;
            this.tamanho = tamanho;
            this.massa = massa;
            this.distancia = distancia;
            }
        }
}