let winner, vencedor = null
let winnerSelected = document.getElementById('winnerSelected');
let VencedSelected = document.getElementById('vencedSelected');
let mapCp = document.getElementsByClassName('cp');

mudarJogador('x');

function escolhaCp(id){
    if(vencedor !== null){
        return
    }

    let cp = document.getElementById(id);
    if(cp.innerHTML !== '-'){
        return;
    }

    cp.textContent = winner;
    cp.style.color = '#000';


    if(winner === 'x'){
        winner = '0'
    } else {
        winner = 'x'
    }

    mudarJogador(winner);
    checkVenced();
};

function mudarJogador(valor){
    winner = valor;
    winnerSelected.innerHTML = winner
}

function checkVenced(){
    let cp1 = document.getElementById('1')
    let cp2 = document.getElementById('2')
    let cp3 = document.getElementById('3')
    let cp4 = document.getElementById('4')
    let cp5 = document.getElementById('5')
    let cp6 = document.getElementById('6')
    let cp7 = document.getElementById('7')
    let cp8 = document.getElementById('8')
    let cp9 = document.getElementById('9')

    if(checkSequencie(cp1, cp2, cp3)){
        mudaCorCp(cp1, cp2, cp3);
        mudarVenced(cp1);
        return;
    }
    if(checkSequencie(cp4, cp5, cp6)){
        mudaCorCp(cp4, cp5, cp6);
        mudarVenced(cp4);
        return;

    }
    if(checkSequencie(cp7, cp8, cp9)){
        mudaCorCp(cp7, cp8, cp9);
        mudarVenced(cp7);
        return;

    }
    if(checkSequencie(cp1, cp4, cp7)){
        mudaCorCp(cp1, cp4, cp7);
        mudarVenced(cp1);
        return;

    }
    if(checkSequencie(cp2, cp5, cp8)){
        mudaCorCp(cp2, cp5, cp8);
        mudarVenced(cp2);
        return;

    }
    if(checkSequencie(cp3, cp6, cp9)){
        mudaCorCp(cp3, cp6, cp9);
        mudarVenced(cp3);
        return;
    }
    if(checkSequencie(cp1, cp5, cp9)){
        mudaCorCp(cp1, cp5, cp9);
        mudarVenced(cp1);
        return;
    }
    if(checkSequencie(cp3, cp5, cp7)){
        mudaCorCp(cp3, cp5, cp7);
        mudarVenced(cp2);
    }
    
}

function mudarVenced(cp){
vencedor = cp.innerHTML
VencedSelected.innerHTML = vencedor
}

function mudaCorCp(cp1, cp2, cp3){
    cp1.style.background = '#0f0';
    cp2.style.background = '#0f0';
    cp3.style.background = '#0f0';

}

function checkSequencie(cp1, cp2, cp3){
    let eigual = false;

    if(cp1.innerHTML !== '-' && cp1.innerHTML === cp2.innerHTML && cp2.innerHTML === cp3.innerHTML) {
        eigual = true
    }
    return eigual
}

function reniciarJogo(){
    vencedor = null
    VencedSelected.innerHTML = ' '
    for(let i = 1; i <= 9; i++){
        let cp = document.getElementById(i);
        cp.style.background = 'aqua';
        cp.style.color = 'aqua';
        cp.innerHTML = '-';
    }
    mudarJogador('x');
}



