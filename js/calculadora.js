var resultado = '';

function inserir(num){
    var display = document.getElementById('display').innerHTML;

    if (resultado.toString().length <= 19){
        resultado = resultado+num;
        if (num == '*'){
            document.getElementById('display').innerHTML = display + 'x';
        }else if (num == '/'){
            document.getElementById('display').innerHTML = display + '÷';
        }else if (num == '.'){
            document.getElementById('display').innerHTML = display + ',';
        }else{
            document.getElementById('display').innerHTML = display + num;
        }
    }else{
        document.getElementById('display').innerHTML = resultado.length;
    }

}

function limpar(){
    document.getElementById('display').innerHTML =  "";
    resultado = '';
}

function voltar(){
    var display = document.getElementById('display').innerHTML;

    document.getElementById('display').innerHTML = display.substring(0, display.length -1);
    resultado = resultado.substring(0, display.length -1);
}

function calcular(){
    if (resultado){
        document.getElementById('display').innerHTML = eval(resultado).toString().replace('.', ',');
        resultado = eval(resultado);
    }
}

function raiz(){
    if (resultado){
        document.getElementById('display').innerHTML = Math.sqrt(eval(resultado)).toString().replace('.', ',');
        resultado = Math.sqrt(eval(resultado));
    }
}

function potencia(){
    if (resultado){
        document.getElementById('display').innerHTML = (eval(resultado)**2).toString().replace('.', ',');
        resultado = eval(resultado)**2;
    }
}