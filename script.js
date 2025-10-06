function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let palavras = ['ESTARRECEDOR', 'ATARRACADO', 'TANGENCIADO'];
let palavradaSessao =  palavras[getRandomInt(3)]
let quantidadeLetras = palavradaSessao.split(""); //separa as letras
//console.log(palavradaSessao, palavradaSessao.length, "letras"); //length mostra a quantidade de letas
let pressionouTecla = false;
let contadorFor = 0;
let letraDigitada; let arrayLetraDigitada = []; //letra digitada pelo jogador durante a partida e array que armazeza a palavra inteira

addEventListener("keydown", (event) => { 
    pressionouTecla = true;
  for (0; contadorFor < palavradaSessao.length && pressionouTecla == true && event.key != "Backspace"; contadorFor++){
      
      letraDigitada = event.key;
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

   if(event.key == "Backspace" && contadorFor >= 1){ //funcao de apagar
    contadorFor = contadorFor - 1;
    auxHtml[contadorFor] = `<div id="box1"><p></p></div>`;
      ReiniciarLetreiro();
    arrayLetraDigitada[contadorFor] = arrayLetraDigitada.pop();
    console.log(contadorFor);
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