function putImage(){
    let faseContainer = document.getElementById("Fase");
    let tabela = document.createElement("img");
    tabela.src = "tabel1.png";
    tabela.style = "transform: translate(0%, 50%); width: 60%;";
    faseContainer.appendChild(tabela);
    let periodica = document.getElementsByClassName("tabela");
    periodica.style += " width: 1185; height:580";
}
putImage();
