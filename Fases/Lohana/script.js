function startFase() {

    var elements = []

    for (i = 0; i < 5; i++) {
        var element = {
            src: "elements/2/" + i + ".png",
        }
        elements.push(element)
    }

    elements = randomSort(elements)
    console.log(elements)
    showFase(elements)

    function showFase(elements) {
        var DOM_div = document.getElementById("Fase")
        for (i = 0; i < elements.length; i++) {
            var Image = document.createElement("img");
            Image.className = "enig-img"
            Image.src = elements[i].src
            Image.style = "max-width: 200px;"
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
}
startFase();