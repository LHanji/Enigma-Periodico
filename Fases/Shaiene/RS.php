<?php
    session_start();
    //titulo(), logica_fase()
    $ult_enig = "Shaiene";
    function titulo(){
        echo ' <div style="text-align:center" id="main">
                    <div id="dificuldade">
                        <h1>Selecione uma dificuldade: </h1>
                        <button type="button" onclick="facil()" >Fácil</button>
                        <button type="button" onclick="medio()" >Média</button>
                        <button type="button" onclick="dificil()" >Difícil</button>    
                    </div>     
                </div>';
    }

    function logica_fase(){
        echo '<script src="RS.js"></script>';
    }
    $elemento = '"h1"';
    $tabela = "'../Arquivos Compartilhados/tabela1.jpg'";

    include  '../Arquivos Compartilhados/template.php';
