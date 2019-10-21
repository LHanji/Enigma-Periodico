<?php
    session_start();
    $ult_enig = "'Yasmin'";
    $array_enig = $_SESSION['array_enig'];

    function titulo(){
        echo '<div id="Enigma1"></div>';
    }

    function logica_fase(){
        echo '<script type="text/javascript" src="main.js"></script>';
    }

    $elemento = '"a"';
    
    $tabela = "'../Arquivos Compartilhados/tabela1.jpg'";

    include "../Arquivos Compartilhados/template.php";
