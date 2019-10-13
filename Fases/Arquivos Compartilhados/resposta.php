<?php
    session_start();
    $ult_enig = $_POST['ult_enig'];
    $resp = $_POST['resp'];
    $resp = strtolower($resp);
    $array_enig = [
        "Yasmin" => false,
        "Shaiene" => false,
        "Arlene"  => false,
        "Lohana" => false,
        "Gean" => false
    ];

    switch($ult_enig){
        case "Yasmin":
            if($resp == "carbono"){
                header('Location: nextpage.html');
                $array_enig["Yasmin"] = true;
            }
            else{
                header('Location: faseYasmin.php');
            }
            break;
        case "Shaiene":
            header('Location: nextpage.html');
            $array_enig["Shaiene"] = true;
            break;
        case "Arlene":
            break;
        case "Lohana":
            break;
        case "Gean":
            break;
    }
