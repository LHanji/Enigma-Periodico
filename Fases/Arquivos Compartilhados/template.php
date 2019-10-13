<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="../Arquivos Compartilhados/body1.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>    
    </head>
    <body>
        <?php titulo();//Insira o que irá aparecer ao começar a fase ?>
        <div style="text-align: center">
            <form method="POST" action="../Arquivos Compartilhados/resposta.php">
                Resposta:
                <input type="hidden" value=<?=$ult_enig?> name="ult_enig">//Crie no seu .php uma var chamada $ult-enig que possua como valor o seu nome
                <input type="text" class="campo" name="resp" id="cxtxt">
                <input type="submit" class="button" value="ENVIA"id="envia">
            </form>
        </div>
        <a href="../Arquivos Compartilhados/tabela.html" style="text-align: center">Tabela Periodica</a>
        <script>
            //Insira o texto que você queira que seja digitado na tela 
            var texto = document.querySelector(<?=$elemento?>);
            function maquinaEscrever(elemento){//conseguir o efeito de maquina de escrever.
                var textoArray = elemento.innerHTML.split('');
                elemento.innerHTML = '';//para nao repetir a frase.
                textoArray.forEach((letra,i)=> {
                    setTimeout(function(){
                        elemento.innerHTML +=letra;
                    },75*i);
                });
            }
            maquinaEscrever(texto);
        </script>
        <?php logica_fase(); //Insira o javascript?>
    </body>
</html>