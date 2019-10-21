function putImage(){
    let faseContainer = document.getElementById("Fase");
    let tabela = document.createElement("img");
    tabela.src = "/Enigmas-Periodicos/Fases/Gean/tabel1.png";
    tabela.style = "transform: translate(0%, 50%); width: 60%;";
    faseContainer.appendChild(tabela);
}
putImage();
