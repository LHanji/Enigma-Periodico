<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../Arquivos Compartilhados/body1.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head> 
    <body>
        <div style="text-align: center">
            <h1> 3N1GM4 </h1>
             <p>Você é um estágiario no laborátorio de química nº 3.n1gma. Tudo ia bem, quando, acidentalmente,
                você aciona os alarmes do laborátorio se trancando lá dentro. Agora, terá que resolver uma série
                de enigmas nas portas para poder escapar. Está dentro? </p>
            <form method="GET" action="../Arquivos Compartilhados/FirstPage.php">
                <button onclick="submit" class="button">Começar?</button>
            </form>
        </div>
        <script>
            function start(){
                location.replace = 'FirstPage.php';
            }
            var texto = document.querySelector('h1');
            var texto2 = document.querySelector('p')

            function maquinaEscrever(elemento) { //conseguir o efeito de maquina de escrever.
                var textoArray = elemento.innerHTML.split('');
                elemento.innerHTML = ''; //para nao repetir a frase.
                textoArray.forEach((letra, i) => {
                    setTimeout(function() {
                        elemento.innerHTML += letra;
                    }, 75 * i);
                });
            }
            maquinaEscrever(texto);
            maquinaEscrever(texto2);
        </script>
        

    </body>

</html>