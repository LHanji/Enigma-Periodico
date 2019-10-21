<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <style>
        img{
            opacity: 0;
            filter: alpha(opacity=40);
            width: 100vw;
            height: 100vh;
            margin: 0;
        }
        h1{
            text-align: center;
            color: black;
            font-family: 'Lucida Sans TypeWriter';
            position: absolute;
            top: 55px;
            left: 85px;
            width: 1185px; 
            height: 580px;
        }
        body{
            margin:0;
        }
        
    </style>
</head> 
    <body style="text-align: center; background-color:black" onload=showpage() >
            <h1> Você escapou </h1>
            <img src='montanhas.jpg'>
        <script>
            function showpage(){
                var elem = document.querySelector('img')
                fadeIn(elem)
            }
            function showtext(){
                var elem = document.querySelector('h1')
                fadeIn(elem)
            }

            function fadeIn(elem) {
                elem.style.opacity = 0
                var tick = function () {
                    elem.style.opacity = +elem.style.opacity + 0.01
                    if (+elem.style.opacity < 1) {
                        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
                    }
                }
                tick()
                showtext()
            }
            var texto = document.querySelector('h1');

            function maquinaEscrever(elemento) { //conseguir o efeito de maquina de escrever.
                var textoArray = elemento.innerHTML.split('');
                elemento.innerHTML = ''; //para nao repetir a frase.
                textoArray.forEach((letra, i) => {
                    setTimeout(function() {
                        elemento.innerHTML += letra;
                    }, 400 * i);
                });
            }
            maquinaEscrever(texto);
        </script>
        

    </body>

</html>