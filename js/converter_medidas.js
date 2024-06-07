function verf_calculo(){
    var urlAtual = window.location.href;
    var urlClass = new URL(urlAtual);
    var tipo_calculo = urlClass.searchParams.get("tipo_calculo");

    if (tipo_calculo == 'tamanho'){
        document.getElementById('div_tamanho').style.display = 'block';
    }else if (tipo_calculo == 'forca'){
        document.getElementById('div_forca').style.display = 'block';
    }else if (tipo_calculo == 'peso'){
        document.getElementById('div_peso').style.display = 'block';
    }else if (tipo_calculo == 'temperatura'){
        document.getElementById('div_temperatura').style.display = 'block';
    }else if (tipo_calculo == 'tempo'){
        document.getElementById('div_tempo').style.display = 'block';
    }else if (tipo_calculo == 'velocidade'){
        document.getElementById('div_velocidade').style.display = 'block';
    }else{
        window.location.href = "index.html";
    }
}

function converter_tamanho(){
    var valor_atual = document.getElementById('valor_tamanho').value;
    var unmedida_atual = document.getElementById('medidatamanho_atual').value;
    var unmedida_nova = document.getElementById('medidatamanho_nova').value;
    var valor_novo = 0;

    if (unmedida_atual == 'Km' && unmedida_nova == 'M'){
        valor_novo = valor_atual * 1000;
    }else if (unmedida_atual == 'M' && unmedida_nova == 'Km'){
        valor_novo = valor_atual / 1000;
    }else if (unmedida_atual == 'Km' && unmedida_nova == 'Cm'){
        valor_novo = valor_atual * 100000;
    }else if (unmedida_atual == 'Cm' && unmedida_nova == 'Km'){
        valor_novo = valor_atual / 100000;
    }else if (unmedida_atual == 'Km' && unmedida_nova == 'mm'){
        valor_novo = valor_atual * 1000000;
    }else if (unmedida_atual == 'mm' && unmedida_nova == 'Km'){
        valor_novo = valor_atual / 1000000;
    }else if (unmedida_atual == 'M' && unmedida_nova == 'Cm'){
        valor_novo = valor_atual * 100;
    }else if (unmedida_atual == 'Cm' && unmedida_nova == 'M'){
        valor_novo = valor_atual / 100;
    }else if (unmedida_atual == 'M' && unmedida_nova == 'mm'){
        valor_novo = valor_atual * 1000;
    }else if (unmedida_atual == 'mm' && unmedida_nova == 'M'){
        valor_novo = valor_atual / 1000;
    }else if (unmedida_atual == 'Cm' && unmedida_nova == 'mm'){
        valor_novo = valor_atual * 10;
    }else if (unmedida_atual == 'mm' && unmedida_nova == 'Cm'){
        valor_novo = valor_atual / 10;
    }else if (unmedida_atual == unmedida_nova){
        valor_novo = valor_atual;
    }

    document.getElementById('resultado_tamanho').innerHTML = valor_novo.toString().replace('.', ',') + ' ' + unmedida_nova;
}