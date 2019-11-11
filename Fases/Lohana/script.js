document.querySelector("form").hidden = true

var tree
var resp
var caixaTexto
var enviar
var mensagemErro
var troca = false
var react

react = document.createElement("h2")
react.setAttribute("id","erro")
react.setAttribute("style","color: darkgreen")
react.innerHTML = "Droga! Você acertou."

startFase();

function startFase() {

    tree = document.createDocumentFragment()

    var elements = []
    /* Pick random number to be the current fase */
    var number = Math.floor(Math.random() * 5)
    /* get number */
    /* document.getElementById("faseNum").value = number */

    /* Put the elements of that number on an array */
    if (number == 0 || number == 4) {
        for (i = 0; i < 2; i++) {
            var element = {
                src: "elements/" + number + "/" + i + ".png",
            }
            elements.push(element)
        }
        if(number == 0){
            resp = "sodio"
        } else{
            resp = "mendeleev"
        }

    } else if (number == 1) {
        for (i = 0; i < 3; i++) {
            var element = {
                src: "elements/" + number + "/" + i + ".png",
            }
            elements.push(element)
        }
        resp = "kriptonio"
    } else if (number == 2) {
        for (i = 0; i < 5; i++) {
            var element = {
                src: "elements/" + number + "/" + i + ".png",
            }
            elements.push(element)
        }
        resp = "fosforo"
    } else if (number == 3) {
        for (i = 0; i < 4; i++) {
            var element = {
                src: "elements/" + number + "/" + i + ".png",
            }
            elements.push(element)
        }
        resp = "einstenio"
    }
    elements = randomSort(elements)

    showFase(elements)

    function showFase(elements) {
        var DOM_div = document.getElementById("Fase")
        for (i = 0; i < elements.length; i++) {
            var Image = document.createElement("img");
            Image.className = "enig-img"
            Image.src = elements[i].src
            Image.style = "width: 200px;"
            DOM_div.appendChild(Image)
        }
    }

    /* Function that randoms the array of elements */
    function randomSort(elements) {
        var randomElements = [];
        while (randomElements.length !== elements.length) {
            var i = Math.floor(Math.random() * elements.length);
            if (randomElements.indexOf(elements[i]) < 0) {
                randomElements.push(elements[i]);
            }
        }
        return randomElements;
    }

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
    document.getElementById("inputResp").appendChild(tree)

}
function resposta() {
    caixaTexto = document.getElementById("resposta").value
    caixaTexto = caixaTexto.toLowerCase()
    if(caixaTexto == resp)
    {
        document.getElementById("resposta").hidden = true
        document.getElementById("enviar").hidden = true
        if(troca == true)
        {
            document.getElementById("erro").hidden = true
        }    
        document.getElementById("inputResp").appendChild(react)
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
        mensagemErro.setAttribute("style","color: darkgreen")
        mensagemErro.innerHTML = "Hah! Você errou."
        document.getElementById("inputResp").appendChild(mensagemErro)
        troca = true
    }
}