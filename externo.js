
var player = "idoso1";
var numJog = 0;
var fimjogo = false;
var iniciar = false;


function iniciojogo() {
    iniciar = true;
    document.getElementById("jogar").disabled = true;
    document.getElementById("cpu").disabled = true;
    document.getElementById("player").disabled = true;
    document.getElementById("restart").disabled = false;
}


function checkjogo(id) {

    var opt = verificaSrc(id);
    var pc = document.getElementById('cpu').checked;

    if (iniciar) {

        if (fimjogo) {
            return false;
        }

        if (opt == "transp.png") {
            document.getElementById(id).src = "img/" + player + ".png";

            if (wincheck()) {

                fimjogo = true;
                alert("Fim de jogo " + player + " venceu!!");
                // location.reload();
                return false;
            }
            
            numJog++;
        
            if (numJog >= 9) {
        
                fimjogo = true;
                alert("Fim de jogo! Deu velha!!");
                // location.reload();
                return false;
        
            }
            
            if (player == "idoso1") {

                player = "idoso2";

            } else {

                player = "idoso1";

            }
        }

        if (pc && player == "idoso2") {
            checkjogo(jogodoPC());
        }

        function jogodoPC() {
            if (verificaSrc('c5') == "transp.png") {
        
                return 'c5';
        
            }
        
            return 'c' + Math.floor((Math.random() * 9) + 1)
        
        }
    } else {
        return false;
    }
}

function verificaSrc(id) {

    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);

}

function wincheck() {

    if (((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && (verificaSrc('c1') != "transp.png")) ||
        ((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && (verificaSrc('c1') != "transp.png")) ||
        ((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && (verificaSrc('c1') != "transp.png")) ||
        ((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && (verificaSrc('c2') != "transp.png")) ||
        ((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && (verificaSrc('c3') != "transp.png")) ||
        ((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && (verificaSrc('c3') != "transp.png")) ||
        ((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && (verificaSrc('c4') != "transp.png")) ||
        ((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && (verificaSrc('c7') != "transp.png"))) {
        return true;

    }
    return false;

}


