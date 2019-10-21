<?php
    session_start();
    $array_enig = $_SESSION['array_enig'];
    $ult_enig = "Lohana";
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
    $elemento = '"a"';
    $tabela = "'../Arquivos Compartilhados/tabela1.jpg'";

    include  '../Arquivos Compartilhados/template.php';
