<?php
    /* put the verify function here */
    $number = $_POST["faseNum"];
    $answer = $_POST["answer"];
    if(rightAnswers($number, $answer) == true){
        header('Location: https://google.com'); 
    } else {
        header('Location: https://github.com'); 
    }
    function rightAnswers($number, $answer){
        //$answer = strtolower($answer);
        if($number == 0){
            if( $answer == "sódio" or $answer == "sodio"){
                return true;
            }
            return false;
        }
        if($number == 1){
            if( $answer == "kriptônio" or $answer == "kriptonio"){
                return true;
            }
            return false;
        }
        if($number == 2){
            if( $answer == "fósforo" or $answer == "fosforo"){
                return true;
            }
            return false;
        }
        if($number == 3){
            if( $answer == "einstênio" or $answer == "einstenio"){
                return true;
            }
            return false;
        }
        if($number == 4){
            if( $answer == "mendeleev"){
                return true;
            }
            return false;
        }
    }
?>