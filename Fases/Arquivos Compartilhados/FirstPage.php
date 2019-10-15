<?php
    session_start();
    $_SESSION['array_enig'] = $array_enig = [
        "Yasmin" => false,
        "Shaiene" => false,
        "Arlene"  => false,
        "Lohana" => false,
        "Gean" => false
    ];
    echo 'heyo';
    firstChallenge();

    function firstChallenge(){//Essa função seleciona a primeira fase
        $rand = mt_rand(1,5);
        switch ($rand) {
            case 1:
                    header('Location: ../Yasmin/faseYasmin.php');
            break;
            
            case 2:
                    header('Location: ../Shaiene/RS.php');
            break;
            
            case 3:
                    header('Location: ../Arlene/aaa.php');
            break;

            case 4:
                    header('Location: ../Lohana/paget.php');
            break;

            case 5:
                    header('Location: ../Gean/aaa.php');
            break;
        }
            
    }



    //Façam a 1a pagina aqui
    
    ?>