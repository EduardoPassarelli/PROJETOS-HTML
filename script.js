//let linhadasPalavras = document.getElementById("linhadasPalavras"); //colocar pra carregar no DOM
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


let palavras = ['ESTARRECEDOR', 'ATARRACADO', 'TANGENCIADO'];
let palavradaSessao =  palavras[getRandomInt(3)]
let quantidadeLetras = palavradaSessao.split(""); //separa as letras
console.log(palavradaSessao, palavradaSessao.length, "letras"); //length mostra a quantidade de letas
//console.log(quantidadeLetras[1]);
let pressionouTecla = false;
let contadorFor = 0;

addEventListener("keydown", (event) => { 
    pressionouTecla = true;
    
  for (0; contadorFor < palavradaSessao.length && pressionouTecla == true; contadorFor++){
      //console.log(contadorFor);
      //console.log(auxHtml);
      auxHtml[contadorFor] = `<div id="box1"><p>${event.key}</p></div>`;
      ReiniciarLetreiro();
     //addEventListener("keydown", (event) => { 
    
      //})
      //console.log(event.key);
    //console.log(listarPalavras(palavradaSessao.length));
     pressionouTecla = false;
   }

});


class Planeta {
            constructor(nome, classificacao, tamanho, massa, distancia){
            this.nome = nome; //usar o this antes de propriedade
            this.classificacao = classificacao;
            this.tamanho = tamanho;
            this.massa = massa;
            this.distancia = distancia;
            }
        }

let numeroLista = -1;
let auxHtml = [];
let adicionar = true;
let publicIdButton;
        //let quantidadeLetras = document.getElementById('qtdLetras').value;
        function listarPalavras(lista) { 
           for (let i = 0; i < lista; i++){
           if(adicionar == true){
            numeroLista++;
            //numeroLista = lista;
            //console.log(lista,numeroLista);
               auxHtml[numeroLista] =
                `<div id="box1"><p></p></div>`;
                //numeroLista = 0 //zera para receber novo valor do input lista e não acrescentar a mais
    }
    else{
        auxHtml[publicIdButton] = '2';
        console.log('p');
        
    }
           }
           return auxHtml;
        }
         let listadasPalavras = [];
        //window.onload = function() {
              //document.getElementById("linhadasPalavras").innerHTML = listarPalavras(4);

            //document.getElementById('formulario').onsubmit = function(evento) {
            //evento.preventDefault();
            //let quantidadeLetras = document.getElementById('qtdLetras').value;
            
            //let planetaCadastrado = new Palavra(nome, quantidadeLetras, significado);
            //listadasPalavras.push(planetaCadastrado);
            //numeroLista++;////////////
            
            adicionar = true;
            let arraywordBox = listarPalavras(palavradaSessao.length);//ou +=
            
            ReiniciarLetreiro();
            function ReiniciarLetreiro(){
            document.getElementById("linhadasPalavras").innerHTML = arraywordBox.join('');
            }


            //console.log(listarPalavras(0));
            console.log(palavradaSessao.length);
            //console.log(arraywordBox);
            //document.getElementById('nome').value = '';
            //document.getElementById('tamanho').value = '';
            //document.getElementById('massa').value = '';
            //document.getElementById('distancia').value = '';
            //}
            //       } do botao     
        //}//ON LOAD
        
        //LIMPAR OS ARRAYS DEPOIS QUANDO O JOGADOR VENCER O JOGO