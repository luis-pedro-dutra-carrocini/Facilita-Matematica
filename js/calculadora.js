function inserir(num){
    var display = document.getElementById('display').innerHTML;

    if (display.length <= 19){
        document.getElementById('display').innerHTML = display+num;
    }

}

function limpar(){
    document.getElementById('display').innerHTML =  "";
}

function voltar(){
    var display = document.getElementById('display').innerHTML;

    document.getElementById('display').innerHTML = display.substring(0, display.length -1);
}

function calcular(){
    var display = document.getElementById('display').innerHTML;

    if (display){
        document.getElementById('display').innerHTML = eval(display);
    }
}

function raiz(){
    var display = document.getElementById('display').innerHTML;

    if (display){
        document.getElementById('display').innerHTML = Math.sqrt(eval(display));
    }
}

function potencia(){
    var display = document.getElementById('display').innerHTML;

    if (display){
        document.getElementById('display').innerHTML = eval(display)**2;
    }
}