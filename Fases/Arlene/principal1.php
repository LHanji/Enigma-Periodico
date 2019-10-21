<?php
    session_start();
    $array_enig = $_SESSION['array_enig'];
    $ult_enig = "Arlene";
    include  '../Arquivos Compartilhados/template.php';
    function titulo()
    {
        echo '<div id="kaka" margin: auto; style="text-align: center;"></div>';   
        echo '<h1 id="keke" margin: auto; style="text-align: center;"></h1>';   
    }
    function logica_fase()
    {
        echo '<script src="arq.js"></script>';
    }
    $tabela = "'../Arquivos Compartilhados/tabela2.jpeg'";
    //$elemento = "Foi Cláudio o Bravo quem invadiu Atenas.";
?>
