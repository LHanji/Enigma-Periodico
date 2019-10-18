
<?php 
    include "template.php";
    function titulo(){
        echo '<div id="main">
        <div id="dificuldade">
                <h2>Selecione uma dificuldade: </h2>
                <button type="button" onclick="facil()" >Fácil</button>
                <button type="button" onclick="medio()" >Média</button>
                <button type="button" onclick="dificil()" >Difícil</button>    
        </div>     
    </div>';
    }

    function logica_fase(){
        echo '<script type="text/javascript" src="RS.js"></script>';
    }
    $n = '"h2"';
    $tabela = "'../Arquivos Compartilhados/tabela1.jpg'";
?>