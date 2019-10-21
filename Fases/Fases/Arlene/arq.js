function show(){
    frase = "Foi Cláudio o Bravo quem invadiu Atenas."
    var image = {src: "vs1.png"}
    var img = document.createElement("img")
    var txt = document.createElement("p")
    var txt = document.createTextNode(frase); 
    img.src = image.src
    document.getElementById("kaka").appendChild(img)
    document.getElementById("keke").appendChild(txt)
}
show()