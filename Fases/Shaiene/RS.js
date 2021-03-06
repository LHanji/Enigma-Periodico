document.querySelector("form").hidden = true
//Declarando vars globais
var tree
var fig
var cod
var resp
var caixaTexto
var dificuldade 
var envia
var mensagemErro
var troca = false

//Funções pra determinar a dificuldade. Todas elas iniciam a próxima função

function facil() {
    dificuldade = 'f'
    iniciar(dificuldade)
}
function medio() {
    dificuldade = 'm'
    iniciar(dificuldade)
}
function dificil() {
    dificuldade = 'd'
    iniciar(dificuldade)
}

/*Função que estrutura o desafio antes de qualquer interação do usuário,
exceto selecionar a dificuldade*/

function iniciar(dificuldade){

    //Toda a seção da página que faz parte da seleção de dificuldade é escondida
    document.getElementById("dificuldade").hidden = true

    /*A variavel tree será um fragmento de documento html,
    ela irá carregar toda a estrutura do desafio que será apresentada assim que 
    a dificuldade for escolhida*/

    tree = document.createDocumentFragment()
    fig = document.createElement("img")

    //Um número aleatorio entre 1 e 4 será usado para determinar a figura

    var rand = ~~(Math.random()*(5-1)+1)
    console.log("A figura número "+rand+" será exibida")
    switch (rand) {
        case 1:
            fig.setAttribute("id","america")
            fig.setAttribute("src","america.png")
            resp = "america"
        break;

        case 2:
            fig.setAttribute("id","choco")
            fig.setAttribute("src","choco.png")
            resp = "chocolate"
        break;
            
        case 3:
            fig.setAttribute("id","gay")
            fig.setAttribute("src","gay.png")
            resp = "gay"
        break;
        
        case 4:
            fig.setAttribute("id","helio")
            fig.setAttribute("src","helio.png")
            resp = "helio"
        break;
    }

    //(struct ptr)* malloc(sizeof(struct ptr))

    /* Fig será inserida ao fim de tree, como tree não 
    possui nada ainda,será inserido no começo*/
    //tree.appendChild(fig)
    
    //Baseado na figura e na dificuldade, a resposta esperada será determinada

    cod = document.createElement("h1") 
    switch (dificuldade) {
        case 'f':
            switch(fig.id){
                case "america":
                    cod.innerHTML ="Z95 Z68 Z53 Z20 "
                break;
                case "choco":
                    cod.innerHTML ="Z6 Z1 Z8 Z57 Z52"
                break;
                case "gay":
                    cod.innerHTML ="Z31 Z39"
                break;
                case "helio":
                    cod.innerHTML ="Z2 Z3 Z8"
                break;
            }
            console.log("A formatação do código será Za Zb Zc (facil) ")
            //cod.innerHTML = "Za Zb Zc"
        break;
    
        case 'm':
            switch(fig.id){
                case "america":
                    cod.innerHTML ="Z 95 68 53 20 "
                break;
                case "choco":
                    cod.innerHTML ="Z 6 1 8 57 52"
                break;
                case "gay":
                    cod.innerHTML ="Z 31 39"
                break;
                case "helio":
                    cod.innerHTML ="Z 2 3 8"
                break;
            }
            console.log("A formatação do código será Z a b c (media) ")
            //cod.innerHTML = "Z a b c"
        break;

        case 'd':
            switch(fig.id){
                case "america":
                    cod.innerHTML ="Z95685320"
                break;
                case "choco":
                    cod.innerHTML ="Z6185752"
                break;
                case "gay":
                    cod.innerHTML ="Z3139"
                break;
                case "helio":
                    cod.innerHTML ="Z238"
                break;
            }
            console.log("A formatação do código será Zabc (dificil) ")
            //cod.innerHTML = "Zabc"
        break;
    }
    //O enigma será apresentado
    tree.appendChild(cod)

    //Caixa de texto para a resposta
    
    caixaTexto = document.createElement("input")
    caixaTexto.setAttribute("type","text")
    caixaTexto.setAttribute("id","resposta")
    caixaTexto.setAttribute("class","campo")
    tree.appendChild(caixaTexto)

    //Botão para enviar

    enviar = document.createElement("button")
    enviar.innerHTML = "Enviar"
    enviar.setAttribute("onclick","resposta()")
    enviar.setAttribute("id","enviar")
    enviar.setAttribute("class","button")
    tree.appendChild(enviar)
    document.getElementById("main").appendChild(tree)
    
}    

/*Função que verifica a resposta. Se estiver certa, uma imagem referente a resposta 
será mostrada e a página muda.
Se estiver errada, aparecerá uma mensagem de erro */

function resposta()
{
    caixaTexto = document.getElementById("resposta").value
    caixaTexto = caixaTexto.toLowerCase()
    console.log(caixaTexto)
    if(caixaTexto == resp)
    {
        document.getElementById("resposta").hidden = true
        document.getElementById("enviar").hidden = true
        if(troca == true)
        {
            document.getElementById("erro").hidden = true
        }    
        document.getElementById("main").appendChild(fig)
        document.querySelector("form").hidden = false
        document.getElementById("cxtxt").hidden = true
        document.getElementById("envia").value = "Continuar"

        /*setTimeout(() => {
            rand = ~~(Math.random()*(7-1)+1)
            location.replace("Prox.html")
        }, 4000);*/
    }
    else if (troca == false) 
    {        
        mensagemErro = document.createElement("h2")
        mensagemErro.setAttribute("id","erro")
        mensagemErro.setAttribute("style","color: rgba(223, 82, 82, 0.856)")
        mensagemErro.innerHTML = "Resposta Errada"
        document.getElementById("main").appendChild(mensagemErro)
        troca = true
    }
}


//Insira o texto que você queira que seja digitado na tela 
var texto = document.getElementById("main");
function maquinaEscrever(elemento){//conseguir o efeito de maquina de escrever.
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';//para nao repetir a frase.
    textoArray.forEach((letra,i)=> {
        setTimeout(function(){
            elemento.innerHTML +=letra;
        },75*i);
    });
}

