// Verificar qual vao ser o tipo de conversão
function verf_calculo(){
    var urlAtual = window.location.href;
    var urlClass = new URL(urlAtual);
    var tipo_calculo = urlClass.searchParams.get("tipo_calculo");

    if (tipo_calculo == 'tamanho'){
        document.getElementById('div_tamanho').style.display = 'block';
    }else if (tipo_calculo == 'peso'){
        document.getElementById('div_peso').style.display = 'block';
    }else if (tipo_calculo == 'temperatura'){
        document.getElementById('div_temperatura').style.display = 'block';
    }else if (tipo_calculo == 'tempo'){
        document.getElementById('div_tempo').style.display = 'block';
    }else if (tipo_calculo == 'velocidade'){
        document.getElementById('div_velocidade').style.display = 'block';
    }else if (tipo_calculo == 'forca'){
        document.getElementById('div_forca').style.display = 'block';
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

    document.getElementById('formula_tamanho').innerHTML = formula;
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

    document.getElementById('formula_temperatura').innerHTML = formula;
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

    document.getElementById('formula_peso').innerHTML = formula;
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

    document.getElementById('resultado_peso').innerHTML = valor_novo.toString().replace('.', ',') + ' ' + unmedida_nova;
}


//---- VELOCIDAE ----

// Verificar qual formula será mostrada
function formula_velocidade(){
    var unmedida_atual = document.getElementById('medidavelocidade_atual').value;
    var unmedida_nova = document.getElementById('medidavelocidade_nova').value;
    var formula = '';

    if (unmedida_atual == 'Km/h' && unmedida_nova == 'M/s'){
        formula = 'M/s = Km/h ÷ 3,6';
    }else if (unmedida_atual == 'M/s' && unmedida_nova == 'Km/h'){
        formula = 'Km/h = M/s X 3,6';
    }else if (unmedida_atual == 'Km/h' && unmedida_nova == 'Kt'){
        formula = 'Kt = Km/h ÷ 1,852';
    }else if (unmedida_atual == 'Kt' && unmedida_nova == 'Km/h'){
        formula = 'Km/h = Kt X 1,852';
    }else if (unmedida_atual == 'Km/h' && unmedida_nova == 'Mi/h'){
        formula = 'Mi/h = Km/h ÷ 1,609';
    }else if (unmedida_atual == 'Mi/h' && unmedida_nova == 'Km/h'){
        formula = 'Km/h = Mi/h X 1,609';
    }else if (unmedida_atual == 'Km/h' && unmedida_nova == 'Fp/s'){
        formula = 'Fp/s = Km/h ÷ 1,097';
    }else if (unmedida_atual == 'Fp/s' && unmedida_nova == 'Km/h'){
        formula = 'Km/h = Fp/s X 1,609';
    }else if (unmedida_atual == 'M/s' && unmedida_nova == 'Kt'){
        formula = 'Kt = M/s X 1,944';
    }else if (unmedida_atual == 'Kt' && unmedida_nova == 'M/s'){
        formula = 'M/s = Kt ÷ 1,944';
    }else if (unmedida_atual == 'M/s' && unmedida_nova == 'Mi/h'){
        formula = 'Mi/h = M/s X 2,237';
    }else if (unmedida_atual == 'Mi/h' && unmedida_nova == 'M/s'){
        formula = 'M/s = Mi/h ÷ 2,237';
    }else if (unmedida_atual == 'M/s' && unmedida_nova == 'Fp/s'){
        formula = 'Fp/s = M/s X 3,281';
    }else if (unmedida_atual == 'Fp/s' && unmedida_nova == 'M/s'){
        formula = 'M/s = Fp/s ÷ 3,281';
    }else if (unmedida_atual == 'Kt' && unmedida_nova == 'Mi/h'){
        formula = 'Mi/h = Kt X 1,151';
    }else if (unmedida_atual == 'Mi/h' && unmedida_nova == 'Kt'){
        formula = 'Kt = Mi/h ÷ 1,151';
    }else if (unmedida_atual == 'Kt' && unmedida_nova == 'Fp/s'){
        formula = 'Fp/s = Kt X 1,688';
    }else if (unmedida_atual == 'Fp/s' && unmedida_nova == 'Kt'){
        formula = 'Kt = Fp/s ÷ 1,688';
    }else if (unmedida_atual == 'Mi/h' && unmedida_nova == 'Fp/s'){
        formula = 'Fp/s = Mi/h X 1,467';
    }else if (unmedida_atual == 'Fp/s' && unmedida_nova == 'Mi/h'){
        formula = 'Mi/h = Fp/s ÷ 1,467';
    }else if (unmedida_atual == unmedida_nova){
        formula = unmedida_atual + ' = ' + unmedida_atual;
    }

    document.getElementById('formula_velocidade').innerHTML = formula;
}

// Converter Velocidade
function converter_velocidade(){
    var valor_atual = Number(document.getElementById('valor_velocidade').value);
    var unmedida_atual = document.getElementById('medidavelocidade_atual').value;
    var unmedida_nova = document.getElementById('medidavelocidade_nova').value;
    var valor_novo = 0;

    if (unmedida_atual == 'Km/h' && unmedida_nova == 'M/s'){
        valor_novo = valor_atual / 3.6;
    }else if (unmedida_atual == 'M/s' && unmedida_nova == 'Km/h'){
        valor_novo = valor_atual * 3.6;
    }else if (unmedida_atual == 'Km/h' && unmedida_nova == 'Kt'){
        valor_novo = valor_atual / 1.852;
    }else if (unmedida_atual == 'Kt' && unmedida_nova == 'Km/h'){
        valor_novo = valor_atual * 1.852;
    }else if (unmedida_atual == 'Km/h' && unmedida_nova == 'Mi/h'){
        valor_novo = valor_atual / 1.609;
    }else if (unmedida_atual == 'Mi/h' && unmedida_nova == 'Km/h'){
        valor_novo = valor_atual * 1.609;
    }else if (unmedida_atual == 'Km/h' && unmedida_nova == 'Fp/s'){
        valor_novo = valor_atual / 1.097;
    }else if (unmedida_atual == 'Fp/s' && unmedida_nova == 'Km/h'){
        valor_novo = valor_atual * 1.097;
    }else if (unmedida_atual == 'M/s' && unmedida_nova == 'Kt'){
        valor_novo = valor_atual * 1.944;
    }else if (unmedida_atual == 'Kt' && unmedida_nova == 'M/s'){
        valor_novo = valor_atual / 1.944;
    }else if (unmedida_atual == 'M/s' && unmedida_nova == 'Mi/h'){
        valor_novo = valor_atual * 2.237;
    }else if (unmedida_atual == 'Mi/h' && unmedida_nova == 'M/s'){
        valor_novo = valor_atual / 2.237;
    }else if (unmedida_atual == 'M/s' && unmedida_nova == 'Fp/s'){
        valor_novo = valor_atual * 3.281;
    }else if (unmedida_atual == 'Fp/s' && unmedida_nova == 'M/s'){
        valor_novo = valor_atual / 3.281;
    }else if (unmedida_atual == 'Kt' && unmedida_nova == 'Mi/h'){
        valor_novo = valor_atual * 1.151;
    }else if (unmedida_atual == 'Mi/h' && unmedida_nova == 'Kt'){
        valor_novo = valor_atual / 1.151;
    }else if (unmedida_atual == 'Kt' && unmedida_nova == 'Fp/s'){
        valor_novo = valor_atual * 1.688;
    }else if (unmedida_atual == 'Fp/s' && unmedida_nova == 'Kt'){
        valor_novo = valor_atual / 1.688;
    }else if (unmedida_atual == 'Mi/h' && unmedida_nova == 'Fp/s'){
        valor_novo = valor_atual * 1.467;
    }else if (unmedida_atual == 'Fp/s' && unmedida_nova == 'Mi/h'){
        valor_novo = valor_atual / 1.467;
    }else if (unmedida_atual == unmedida_nova){
        valor_novo = valor_atual;
    }

    document.getElementById('resultado_velocidade').innerHTML = valor_novo.toString().replace('.', ',') + ' ' + unmedida_nova;
}



//---- TEMPO ----

// Verificar qual formula será mostrada
function formula_tempo(){
    var unmedida_atual = document.getElementById('medidatempo_atual').value;
    var unmedida_nova = document.getElementById('medidatempo_nova').value;
    var formula = '';

    if (unmedida_atual == 'A' && unmedida_nova == 'M'){
        formula = 'M = A X 12';
    }else if (unmedida_atual == 'M' && unmedida_nova == 'A'){
        formula = 'A = M ÷ 12';
    }else if (unmedida_atual == 'A' && unmedida_nova == 'Sm'){
        formula = 'Sm = A X 52,143';
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'A'){
        formula = 'A = Sm ÷ 52,143';
    }else if (unmedida_atual == 'A' && unmedida_nova == 'D'){
        formula = 'D = A X 365';
    }else if (unmedida_atual == 'D' && unmedida_nova == 'A'){
        formula = 'A = D ÷ 365';
    }else if (unmedida_atual == 'A' && unmedida_nova == 'H'){
        formula = 'H = A X 8.760';
    }else if (unmedida_atual == 'H' && unmedida_nova == 'A'){
        formula = 'A = H ÷ 8.760';
    }else if (unmedida_atual == 'A' && unmedida_nova == 'm'){
        formula = 'm = A X 525.600';
    }else if (unmedida_atual == 'm' && unmedida_nova == 'A'){
        formula = 'A = m ÷ 525.600';
    }else if (unmedida_atual == 'A' && unmedida_nova == 's'){
        formula = 's = A X 31.536.000';
    }else if (unmedida_atual == 's' && unmedida_nova == 'A'){
        formula = 'A = s ÷ 31.536.000';
    }else if (unmedida_atual == 'A' && unmedida_nova == 'Ms'){
        formula = 'Ms = A X 31.536.000.000';
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'A'){
        formula = 'A = Ms ÷ 31.536.000.000';
    }else if (unmedida_atual == 'M' && unmedida_nova == 'Sm'){
        formula = 'Sm = M X 4,345';
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'M'){
        formula = 'M = Sm ÷ 4,345';
    }else if (unmedida_atual == 'M' && unmedida_nova == 'D'){
        formula = 'D = M X 30,417';
    }else if (unmedida_atual == 'D' && unmedida_nova == 'M'){
        formula = 'M = D ÷ 30,417';
    }else if (unmedida_atual == 'M' && unmedida_nova == 'H'){
        formula = 'H = M X 730';
    }else if (unmedida_atual == 'H' && unmedida_nova == 'M'){
        formula = 'M = H ÷ 730';
    }else if (unmedida_atual == 'M' && unmedida_nova == 'm'){
        formula = 'm = M X 43.800';
    }else if (unmedida_atual == 'm' && unmedida_nova == 'M'){
        formula = 'M = m ÷ 43.800';
    }else if (unmedida_atual == 'M' && unmedida_nova == 's'){
        formula = 's = M X 2.628.000';
    }else if (unmedida_atual == 's' && unmedida_nova == 'M'){
        formula = 'M = s ÷ 2.628.000';
    }else if (unmedida_atual == 'M' && unmedida_nova == 'Ms'){
        formula = 'Ms = M X 2.628.000.000';
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'M'){
        formula = 'M = Ms ÷ 2.628.000.000';
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'D'){
        formula = 'D = Sm X 7';
    }else if (unmedida_atual == 'D' && unmedida_nova == 'Sm'){
        formula = 'Sm = D ÷ 7';
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'H'){
        formula = 'H = Sm X 168';
    }else if (unmedida_atual == 'H' && unmedida_nova == 'Sm'){
        formula = 'Sm = H ÷ 168';
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'm'){
        formula = 'm = Sm X 10.080';
    }else if (unmedida_atual == 'm' && unmedida_nova == 'Sm'){
        formula = 'Sm = m ÷ 10.080';
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 's'){
        formula = 's = Sm X 604.800';
    }else if (unmedida_atual == 's' && unmedida_nova == 'Sm'){
        formula = 'Sm = s ÷ 604.800';
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'Ms'){
        formula = 'Ms = Sm X 604.800.000';
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'Sm'){
        formula = 'Sm = Ms ÷ 604.800.000';
    }else if (unmedida_atual == 'D' && unmedida_nova == 'H'){
        formula = 'H = D X 24';
    }else if (unmedida_atual == 'H' && unmedida_nova == 'D'){
        formula = 'D = H ÷ 24';
    }else if (unmedida_atual == 'D' && unmedida_nova == 'm'){
        formula = 'm = D X 1.440';
    }else if (unmedida_atual == 'm' && unmedida_nova == 'D'){
        formula = 'D = m ÷ 1.440';
    }else if (unmedida_atual == 'D' && unmedida_nova == 's'){
        formula = 's = D X 86.400';
    }else if (unmedida_atual == 's' && unmedida_nova == 'D'){
        formula = 'D = s ÷ 86.400';
    }else if (unmedida_atual == 'D' && unmedida_nova == 'Ms'){
        formula = 'Ms = D X 86.400.000';
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'D'){
        formula = 'D = Ms ÷ 86.400.000';
    }else if (unmedida_atual == 'H' && unmedida_nova == 'm'){
        formula = 'm = H X 60';
    }else if (unmedida_atual == 'm' && unmedida_nova == 'H'){
        formula = 'H = m ÷ 60';
    }else if (unmedida_atual == 'H' && unmedida_nova == 's'){
        formula = 's = H X 3.600';
    }else if (unmedida_atual == 's' && unmedida_nova == 'H'){
        formula = 'H = s ÷ 3.600';
    }else if (unmedida_atual == 'H' && unmedida_nova == 'Ms'){
        formula = 'Ms = H X 3.600.000';
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'H'){
        formula = 'H = Ms ÷ 3.600.000';
    }else if (unmedida_atual == 'm' && unmedida_nova == 's'){
        formula = 's = m X 60';
    }else if (unmedida_atual == 's' && unmedida_nova == 'm'){
        formula = 'm = s ÷ 60';
    }else if (unmedida_atual == 'm' && unmedida_nova == 'Ms'){
        formula = 'Ms = m X 60.000';
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'm'){
        formula = 'm = Ms ÷ 60.000';
    }else if (unmedida_atual == 's' && unmedida_nova == 'Ms'){
        formula = 'Ms = s X 1.000';
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 's'){
        formula = 's = Ms ÷ 1.000';
    }else if (unmedida_atual == unmedida_nova){
        formula = unmedida_atual + ' = ' + unmedida_atual;
    }

    document.getElementById('formula_tempo').innerHTML = formula;
}

// Converter Tempo
function converter_tempo(){
    var valor_atual = Number(document.getElementById('valor_tempo').value);
    var unmedida_atual = document.getElementById('medidatempo_atual').value;
    var unmedida_nova = document.getElementById('medidatempo_nova').value;
    var valor_novo = 0;

    if (unmedida_atual == 'A' && unmedida_nova == 'M'){
        valor_novo = valor_atual * 12;
    }else if (unmedida_atual == 'M' && unmedida_nova == 'A'){
        valor_novo = valor_atual / 12;
    }else if (unmedida_atual == 'A' && unmedida_nova == 'Sm'){
        valor_novo = valor_atual * 52.143;
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'A'){
        valor_novo = valor_atual / 52.143;
    }else if (unmedida_atual == 'A' && unmedida_nova == 'D'){
        valor_novo = valor_atual * 365;
    }else if (unmedida_atual == 'D' && unmedida_nova == 'A'){
        valor_novo = valor_atual / 365;
    }else if (unmedida_atual == 'A' && unmedida_nova == 'H'){
        valor_novo = valor_atual * 8760;
    }else if (unmedida_atual == 'H' && unmedida_nova == 'A'){
        valor_novo = valor_atual / 8760;
    }else if (unmedida_atual == 'A' && unmedida_nova == 'm'){
        valor_novo = valor_atual * 525600;
    }else if (unmedida_atual == 'm' && unmedida_nova == 'A'){
        valor_novo = valor_atual / 525600;
    }else if (unmedida_atual == 'A' && unmedida_nova == 's'){
        valor_novo = valor_atual * 31536000;
    }else if (unmedida_atual == 's' && unmedida_nova == 'A'){
        valor_novo = valor_atual / 31536000;
    }else if (unmedida_atual == 'A' && unmedida_nova == 'Ms'){
        valor_novo = valor_atual * 31536000000;
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'A'){
        valor_novo = valor_atual / 31536000000;
    }else if (unmedida_atual == 'M' && unmedida_nova == 'Sm'){
        valor_novo = valor_atual * 4.345;
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'M'){
        valor_novo = valor_atual / 4.345;
    }else if (unmedida_atual == 'M' && unmedida_nova == 'D'){
        valor_novo = valor_atual * 30.417;
    }else if (unmedida_atual == 'D' && unmedida_nova == 'M'){
        valor_novo = valor_atual / 30.417;
    }else if (unmedida_atual == 'M' && unmedida_nova == 'H'){
        valor_novo = valor_atual * 730;
    }else if (unmedida_atual == 'H' && unmedida_nova == 'M'){
        valor_novo = valor_atual / 730;
    }else if (unmedida_atual == 'M' && unmedida_nova == 'm'){
        valor_novo = valor_atual * 43800;
    }else if (unmedida_atual == 'm' && unmedida_nova == 'M'){
        valor_novo = valor_atual / 43800;
    }else if (unmedida_atual == 'M' && unmedida_nova == 's'){
        valor_novo = valor_atual * 2628000;
    }else if (unmedida_atual == 's' && unmedida_nova == 'M'){
        valor_novo = valor_atual / 2628000;
    }else if (unmedida_atual == 'M' && unmedida_nova == 'Ms'){
        valor_novo = valor_atual * 2628000000;
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'M'){
        valor_novo = valor_atual / 2628000000;
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'D'){
        valor_novo = valor_atual * 7;
    }else if (unmedida_atual == 'D' && unmedida_nova == 'Sm'){
        valor_novo = valor_atual / 7;
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'H'){
        valor_novo = valor_atual * 168;
    }else if (unmedida_atual == 'H' && unmedida_nova == 'Sm'){
        valor_novo = valor_atual / 168;
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'm'){
        valor_novo = valor_atual * 10080;
    }else if (unmedida_atual == 'm' && unmedida_nova == 'Sm'){
        valor_novo = valor_atual / 10080;
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 's'){
        valor_novo = valor_atual * 604800;
    }else if (unmedida_atual == 's' && unmedida_nova == 'Sm'){
        valor_novo = valor_atual / 604800;
    }else if (unmedida_atual == 'Sm' && unmedida_nova == 'Ms'){
        valor_novo = valor_atual * 604800000;
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'Sm'){
        valor_novo = valor_atual / 604800000;
    }else if (unmedida_atual == 'D' && unmedida_nova == 'H'){
        valor_novo = valor_atual * 24;
    }else if (unmedida_atual == 'H' && unmedida_nova == 'D'){
        valor_novo = valor_atual / 24;
    }else if (unmedida_atual == 'D' && unmedida_nova == 'm'){
        valor_novo = valor_atual * 1440;
    }else if (unmedida_atual == 'm' && unmedida_nova == 'D'){
        valor_novo = valor_atual / 1440;
    }else if (unmedida_atual == 'D' && unmedida_nova == 's'){
        valor_novo = valor_atual * 86400;
    }else if (unmedida_atual == 's' && unmedida_nova == 'D'){
        valor_novo = valor_atual / 86400;
    }else if (unmedida_atual == 'D' && unmedida_nova == 'Ms'){
        valor_novo = valor_atual * 86400000;
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'D'){
        valor_novo = valor_atual / 86400000;
    }else if (unmedida_atual == 'H' && unmedida_nova == 'm'){
        valor_novo = valor_atual * 60;
    }else if (unmedida_atual == 'm' && unmedida_nova == 'H'){
        valor_novo = valor_atual / 60;
    }else if (unmedida_atual == 'H' && unmedida_nova == 's'){
        valor_novo = valor_atual * 3600;
    }else if (unmedida_atual == 's' && unmedida_nova == 'H'){
        valor_novo = valor_atual / 3600;
    }else if (unmedida_atual == 'H' && unmedida_nova == 'Ms'){
        valor_novo = valor_atual * 3600000;
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'H'){
        valor_novo = valor_atual / 3600000;
    }else if (unmedida_atual == 'm' && unmedida_nova == 's'){
        valor_novo = valor_atual * 60;
    }else if (unmedida_atual == 's' && unmedida_nova == 'm'){
        valor_novo = valor_atual / 60;
    }else if (unmedida_atual == 'm' && unmedida_nova == 'Ms'){
        valor_novo = valor_atual * 60000;
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 'm'){
        valor_novo = valor_atual / 60000;
    }else if (unmedida_atual == 's' && unmedida_nova == 'Ms'){
        valor_novo = valor_atual * 1000;
    }else if (unmedida_atual == 'Ms' && unmedida_nova == 's'){
        valor_novo = valor_atual / 1000;
    }else if (unmedida_atual == unmedida_nova){
        valor_novo = valor_atual;
    }

    document.getElementById('resultado_tempo').innerHTML = valor_novo.toString().replace('.', ',') + ' ' + unmedida_nova;
}



// --- Força ---
// Verificar qual formula será mostrada
function formula_forca(){
    var unmedida_atual = document.getElementById('medidaforca_atual').value;
    var unmedida_nova = document.getElementById('medidaforca_nova').value;
    var formula = '';

    if (unmedida_atual == 'Dyn' && unmedida_nova == 'Kgf'){
        formula = 'Kgf = Dyn x 0,000001020408163265306';
    }else if (unmedida_atual == 'Kgf' && unmedida_nova == 'Dyn'){
        formula = 'Dyn = Kgf ÷ 0,000001020408163265306';
    }else if (unmedida_atual == 'Dyn' && unmedida_nova == 'Kp'){
        formula = 'Dyn = Kp X 0,000001020408163265306';
    }else if (unmedida_atual == 'Kp' && unmedida_nova == 'Dyn'){
        formula = 'Dyn = Kp ÷ 0,000001020408163265306';
    }else if (unmedida_atual == 'Dyn' && unmedida_nova == 'Lbf'){
        formula = 'Lbf = Dyn x 0,000002248089430997358';
    }else if (unmedida_atual == 'Lbf' && unmedida_nova == 'Dyn'){
        formula = 'Dyn = Lbf ÷ 0,000002248089430997358';
    }else if (unmedida_atual == 'Dyn' && unmedida_nova == 'N'){
        formula = 'N = Dyn X 0,00001';
    }else if (unmedida_atual == 'N' && unmedida_nova == 'Dyn'){
        formula = 'Dyn = N ÷ 0,00001';
    }else if (unmedida_atual == 'Kgf' && unmedida_nova == 'Kp'){
        formula = 'Kp = Kgf X 1';
    }else if (unmedida_atual == 'Kp' && unmedida_nova == 'Kgf'){
        formula = 'Kgf = Kp ÷ 1';
    }else if (unmedida_atual == 'Kgf' && unmedida_nova == 'Lbf'){
        formula = 'Lbf = Kgf X 2,2031276423774107';
    }else if (unmedida_atual == 'Lbf' && unmedida_nova == 'Kgf'){
        formula = 'Kgf = Lbf ÷ 2,2031276423774107';
    }else if (unmedida_atual == 'Kgf' && unmedida_nova == 'N'){
        formula = 'N = Kgf X 9,8';
    }else if (unmedida_atual == 'N' && unmedida_nova == 'Kgf'){
        formula = 'Kgf = N ÷ 9,8';
    }else if (unmedida_atual == 'Kp' && unmedida_nova == 'Lbf'){
        formula = 'Lbf = Kp X 2,2031276423774107';
    }else if (unmedida_atual == 'Lbf' && unmedida_nova == 'Kp'){
        formula = 'Kp = Lbf ÷ 2,2031276423774107';
    }else if (unmedida_atual == 'Kp' && unmedida_nova == 'N'){
        formula = 'N = Kp X 9,8';
    }else if (unmedida_atual == 'N' && unmedida_nova == 'Kp'){
        formula = 'Kp = N ÷ 9,8';
    }else if (unmedida_atual == 'Lbf' && unmedida_nova == 'N'){
        formula = 'N = Lbf X 4,44822161526';
    }else if (unmedida_atual == 'N' && unmedida_nova == 'Lbf'){
        formula = 'Lbf = N ÷ 4,44822161526';
    }else if (unmedida_atual == unmedida_nova){
        formula = unmedida_atual + ' = ' + unmedida_atual;
    }

    document.getElementById('formula_forca').innerHTML = formula;
};

// Converter Força
function converter_forca(){
    var valor_atual = Number(document.getElementById('valor_forca').value);
    var unmedida_atual = document.getElementById('medidaforca_atual').value;
    var unmedida_nova = document.getElementById('medidaforca_nova').value;
    var valor_novo = 0;

    if (unmedida_atual == 'Dyn' && unmedida_nova == 'Kgf'){
        valor_novo = valor_atual * 0.000001020408163265306;
    }else if (unmedida_atual == 'Kgf' && unmedida_nova == 'Dyn'){
        valor_novo = valor_atual / 0.000001020408163265306;
    }else if (unmedida_atual == 'Dyn' && unmedida_nova == 'Kp'){
        valor_novo = valor_atual * 0.000001020408163265306;
    }else if (unmedida_atual == 'Kp' && unmedida_nova == 'Dyn'){
        valor_novo = valor_atual / 0.000001020408163265306;
    }else if (unmedida_atual == 'Dyn' && unmedida_nova == 'Lbf'){
        valor_novo = valor_atual * 0.000002248089430997358;
    }else if (unmedida_atual == 'Lbf' && unmedida_nova == 'Dyn'){
        valor_novo = valor_atual / 0.000002248089430997358;
    }else if (unmedida_atual == 'Dyn' && unmedida_nova == 'N'){
        valor_novo = valor_atual * 0.00001;
    }else if (unmedida_atual == 'N' && unmedida_nova == 'Dyn'){
        valor_novo = valor_atual / 0.00001;
    }else if (unmedida_atual == 'Kgf' && unmedida_nova == 'Kp'){
        valor_novo = valor_atual * 1;
    }else if (unmedida_atual == 'Kp' && unmedida_nova == 'Kgf'){
        valor_novo = valor_atual / 1;
    }else if (unmedida_atual == 'Kgf' && unmedida_nova == 'Lbf'){
        valor_novo = valor_atual * 2.2031276423774107;
    }else if (unmedida_atual == 'Lbf' && unmedida_nova == 'Kgf'){
        valor_novo = valor_atual / 2.2031276423774107;
    }else if (unmedida_atual == 'Kgf' && unmedida_nova == 'N'){
        valor_novo = valor_atual * 9.8;
    }else if (unmedida_atual == 'N' && unmedida_nova == 'Kgf'){
        valor_novo = valor_atual / 9.8;
    }else if (unmedida_atual == 'Kp' && unmedida_nova == 'Lbf'){
        valor_novo = valor_atual * 2.2031276423774107;
    }else if (unmedida_atual == 'Lbf' && unmedida_nova == 'Kp'){
        valor_novo = valor_atual / 2.2031276423774107;
    }else if (unmedida_atual == 'Kp' && unmedida_nova == 'N'){
        valor_novo = valor_atual * 9.8;
    }else if (unmedida_atual == 'N' && unmedida_nova == 'Kp'){
        valor_novo = valor_atual / 9.8;
    }else if (unmedida_atual == 'Lbf' && unmedida_nova == 'N'){
        valor_novo = valor_atual * 4.44822161526;
    }else if (unmedida_atual == 'N' && unmedida_nova == 'Lbf'){
        valor_novo = valor_atual / 4.44822161526;
    }else if (unmedida_atual == unmedida_nova){
        valor_novo = valor_atual;
    }

    document.getElementById('resultado_forca').innerHTML = valor_novo.toString().replace('.', ',') + ' ' + unmedida_nova;
}