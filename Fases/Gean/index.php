<?php
    session_start();
    echo '<head><title>Falta um aí</title></head>';
    $ult_enig = "Gean";
    function titulo(){
        echo '
            <div id="Fase" style="
                margin: auto;
                text-align: center;">
            </div>
            <div id="inputResp" style="
                margin: 100px;
                text-align: center;">
            </div>';
    }

    function logica_fase(){
        echo '<script src="script.js"></script>';
    }
    $elemento = '"something"';
    $tabela = "'../Arquivos Compartilhados/tabela1.jpg'";

    include  '../Arquivos Compartilhados/template.php';
?>
