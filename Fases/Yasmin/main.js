function show_enigma(){
        var DOM_div = document.getElementById("Enigma1")
        if(!DOM_div){
            console.log("dom div existe");
        }
        var elements = ["Ca","Rb","O","No"]
        for(e of elements){
            var Image = document.createElement("img");
            Image.className = "enig-img"
            Image.src = "imagens/"+e+".png"
            DOM_div.appendChild(Image)   
        }
}
show_enigma()
