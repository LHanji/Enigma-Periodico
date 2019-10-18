<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../Arquivos Compartilhados/body1.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head> 
    <body>
        <div style="text-align: center">
            <h1> PERIÓDICOS </h1>
             <p>Você é um estágiario no laborátorio de química nº 3.n1gma. Tudo ia bem, quando, acidentalmente,
                você aciona os alarmes do laborátorio se trancando lá dentro. Agora, terá que resolver uma série
                de enigmas nas portas para poder escapar. Está dentro? </p>
            <button onclick="start()" class="button">Começar?</button>
        </div>
        <script>
            function start(){
                window.location.href = 'FirstPage.php';
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