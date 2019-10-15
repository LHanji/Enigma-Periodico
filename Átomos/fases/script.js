function startFase(){

    var elements = []

    /* Pick random number to be the current fase */
    var number = Math.floor(Math.random() * 5)
    console.log(number)

    /* get number */
    document.getElementById("faseNum").value = number

    /* Put the elements of that number on an array */
    if(number == 0 || number == 4){
        for(i = 0; i < 2; i++){
            var element = {
                src: "elements/" + number + "/" + i + ".png",
            }
            elements.push(element)
        }
    } else if(number == 1){
        for(i = 0; i < 3; i++){
            var element = {
                src: "elements/" + number + "/" + i + ".png",
            }
            elements.push(element)
        }
    } else if(number == 2){
        for(i = 0; i < 5; i++){
            var element = {
                src: "elements/" + number + "/" + i + ".png",
            }
            elements.push(element)
        }
    } else if(number == 3){
        for(i = 0; i < 4; i++){
            var element = {
                src: "elements/" + number + "/" + i + ".png",
            }
            elements.push(element)
        }
    }

    elements = randomSort(elements)
    console.log(elements)
    showFase(elements)

    function showFase(elements){
        var DOM_div = document.getElementById("Fase")
        for(i = 0; i < elements.length; i++){
            var doc = document.createElement("div");
            doc.className = "col-sm"
            DOM_div.appendChild(doc)
            var Image = document.createElement("img");
            Image.className = "enig-img"
            Image.src = elements[i].src
            doc.appendChild(Image)
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
}
startFase();