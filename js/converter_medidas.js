// Verificar qual vao ser o tipo de conversão
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

//---- TAMAMNHO ----

// Verificar qual formula será mostrada
function formula_tamanho(){
    var unmedida_atual = document.getElementById('medidatamanho_atual').value;
    var unmedida_nova = document.getElementById('medidatamanho_nova').value;
    var formula = '';

    if (unmedida_atual == 'Km' && unmedida_nova == 'M'){
        formula = 'M = Km x 1.000';
    }else if (unmedida_atual == 'M' && unmedida_nova == 'Km'){
        formula = 'Km = M ÷ 1.000';
    }else if (unmedida_atual == 'Km' && unmedida_nova == 'Cm'){
        formula = 'Cm = Km x 100.000';
    }else if (unmedida_atual == 'Cm' && unmedida_nova == 'Km'){
        formula = 'Km = Cm ÷ 100.000';
    }else if (unmedida_atual == 'Km' && unmedida_nova == 'mm'){
        formula = 'mm = Km x 1.000.000';
    }else if (unmedida_atual == 'mm' && unmedida_nova == 'Km'){
        formula = 'Km = mm ÷ 1.000.000';
    }else if (unmedida_atual == 'M' && unmedida_nova == 'Cm'){
        formula = 'Cm = M x 100';
    }else if (unmedida_atual == 'Cm' && unmedida_nova == 'M'){
        formula = 'M = Cm ÷ 100';
    }else if (unmedida_atual == 'M' && unmedida_nova == 'mm'){
        formula = 'mm = M x 1.000';
    }else if (unmedida_atual == 'mm' && unmedida_nova == 'M'){
        formula = 'M = mm ÷ 1.000';
    }else if (unmedida_atual == 'Cm' && unmedida_nova == 'mm'){
        formula = 'mm = Cm x 10';
    }else if (unmedida_atual == 'mm' && unmedida_nova == 'Cm'){
        formula = 'Cm = mm ÷ 10';
    }else if (unmedida_atual == unmedida_nova){
        formula = unmedida_atual + ' = ' + unmedida_atual;
    }

    document.getElementById('formula_tamanho').innerHTML = formula
}

// Converter tamanho
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

    document.getElementById('resultado_tamanho').innerHTML = 'Valor Convertido = ' + valor_novo.toString().replace('.', ',') + ' ' + unmedida_nova;
}



//---- TEMPERATURA ----

// Verificar qual formula será mostrada
function formula_temperatura(){
    var unmedida_atual = document.getElementById('medidatemperatura_atual').value;
    var unmedida_nova = document.getElementById('medidatemperatura_nova').value;
    var formula = '';

    if (unmedida_atual == 'K' && unmedida_nova == 'C'){
        formula = 'C = K - 273,15';
    }else if (unmedida_atual == 'C' && unmedida_nova == 'K'){
        formula = 'K = C + 273,15';
    }else if (unmedida_atual == 'K' && unmedida_nova == 'F'){
        formula = 'F = (K - 273,15) x 9÷5 + 32';
    }else if (unmedida_atual == 'F' && unmedida_nova == 'K'){
        formula = 'K = (F - 32) x 5÷9 + 273,15';
    }else if (unmedida_atual == 'C' && unmedida_nova == 'F'){
        formula = 'F = (C x 9÷5) + 32';
    }else if (unmedida_atual == 'F' && unmedida_nova == 'C'){
        formula = 'C = (F - 32) x 5÷9';
    }else if (unmedida_atual == unmedida_nova){
        formula = unmedida_atual + ' = ' + unmedida_atual;
    }

    document.getElementById('formula_temperatura').innerHTML = formula
}

// Converter temperatura
function converter_temperatura(){
    var valor_atual = 
   Number(document.getElementById('valor_temperatura').value);
    var unmedida_atual = document.getElementById('medidatemperatura_atual').value;
    var unmedida_nova = document.getElementById('medidatemperatura_nova').value;
    var valor_novo = 0;

    if (unmedida_atual == 'K' && unmedida_nova == 'C'){
        valor_novo = valor_atual - 273.15;
    }else if (unmedida_atual == 'C' && unmedida_nova == 'K'){
        valor_novo = valor_atual + 273.15;
    }else if (unmedida_atual == 'K' && unmedida_nova == 'F'){
        valor_novo = (valor_atual - 273.15) * 9/5 + 32;
    }else if (unmedida_atual == 'F' && unmedida_nova == 'K'){
        valor_novo = (valor_atual - 32) * 5/9 + 273.15;
    }else if (unmedida_atual == 'C' && unmedida_nova == 'F'){
        valor_novo = (valor_atual * 9/5) + 32;
    }else if (unmedida_atual == 'F' && unmedida_nova == 'C'){
        valor_novo = (valor_atual - 32) * 5/9;
    }else if (unmedida_atual == unmedida_nova){
        valor_novo = valor_atual;
    }

    valor_novo = Number(valor_novo.toFixed(2));

    if (unmedida_nova == 'C' || unmedida_nova == 'F'){
        document.getElementById('resultado_temperatura').innerHTML = valor_novo.toString().replace('.', ',') + ' °' + unmedida_nova;
    }else{
        document.getElementById('resultado_temperatura').innerHTML = valor_novo.toString().replace('.', ',') + ' ' + unmedida_nova;
    }
}

//---- PESO ----

// Verificar qual formula será mostrada
function formula_peso(){
    var unmedida_atual = document.getElementById('medidapeso_atual').value;
    var unmedida_nova = document.getElementById('medidapeso_nova').value;
    var formula = '';

    if (unmedida_atual == 'T' && unmedida_nova == 'Kg'){
        formula = 'Kg = T x 1.000';
    }else if (unmedida_atual == 'Kg' && unmedida_nova == 'T'){
        formula = 'T = Kg ÷ 1.000';
    }else if (unmedida_atual == 'T' && unmedida_nova == 'g'){
        formula = 'g = T x 1.000.000';
    }else if (unmedida_atual == 'g' && unmedida_nova == 'T'){
        formula = 'T = g ÷ 1.000.000';
    }else if (unmedida_atual == 'Kg' && unmedida_nova == 'g'){
        formula = 'Kg = g x 1.000';
    }else if (unmedida_atual == 'g' && unmedida_nova == 'Kg'){
        formula = 'Kg = g ÷ 1.000';
    }else if (unmedida_atual == 'Kg' && unmedida_nova == 'mg'){
        formula = 'mg = Kg x 1.000.000';
    }else if (unmedida_atual == 'mg' && unmedida_nova == 'Kg'){
        formula = 'Kg = mg ÷ 1.000.000';
    }else if (unmedida_atual == 'g' && unmedida_nova == 'mg'){
        formula = 'mg = g x 1.000';
    }else if (unmedida_atual == 'mg' && unmedida_nova == 'g'){
        formula = 'g = mg ÷ 1.000';
    }else if (unmedida_atual == unmedida_nova){
        formula = unmedida_atual + ' = ' + unmedida_atual;
    }

    document.getElementById('formula_peso').innerHTML = formula
}

// Converter peso
function converter_peso(){
    var valor_atual = 
   Number(document.getElementById('valor_peso').value);
    var unmedida_atual = document.getElementById('medidapeso_atual').value;
    var unmedida_nova = document.getElementById('medidapeso_nova').value;
    var valor_novo = 0;

    if (unmedida_atual == 'T' && unmedida_nova == 'Kg'){
        valor_novo = valor_atual * 1000;
    }else if (unmedida_atual == 'Kg' && unmedida_nova == 'T'){
        valor_novo = valor_atual / 1000;
    }else if (unmedida_atual == 'T' && unmedida_nova == 'g'){
        valor_novo = valor_atual * 1000000;
    }else if (unmedida_atual == 'g' && unmedida_nova == 'T'){
        valor_novo = valor_atual / 1000000;
    }else if (unmedida_atual == 'T' && unmedida_nova == 'mg'){
        valor_novo = valor_atual * 1000000000;
    }else if (unmedida_atual == 'mg' && unmedida_nova == 'T'){
        valor_novo = valor_atual / 1000000000;
    }else if (unmedida_atual == 'Kg' && unmedida_nova == 'g'){
        valor_novo = valor_atual * 1000;
    }else if (unmedida_atual == 'g' && unmedida_nova == 'Kg'){
        valor_novo = valor_atual / 1000;
    }else if (unmedida_atual == 'Kg' && unmedida_nova == 'mg'){
        valor_novo = valor_atual * 1000000;
    }else if (unmedida_atual == 'mg' && unmedida_nova == 'Kg'){
        valor_novo = valor_atual / 1000000;
    }else if (unmedida_atual == 'g' && unmedida_nova == 'mg'){
        valor_novo = valor_atual * 1000;
    }else if (unmedida_atual == 'mg' && unmedida_nova == 'g'){
        valor_novo = valor_atual / 1000;
    }else if (unmedida_atual == unmedida_nova){
        valor_novo = valor_atual
    }

    if (unmedida_nova == 'C' || unmedida_nova == 'F'){
        document.getElementById('resultado_peso').innerHTML = valor_novo.toString().replace('.', ',') + ' °' + unmedida_nova;
    }else{
        document.getElementById('resultado_peso').innerHTML = valor_novo.toString().replace('.', ',') + ' ' + unmedida_nova;
    }
}