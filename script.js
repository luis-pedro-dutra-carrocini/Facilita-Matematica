/* Quando Carregar a página deve verificar qual é o tipo de figura que iremos qualcular*/
function verfigvol_escolhida() { var urlAtual = window.location.href;
    var urlClass = new URL(urlAtual);
    var tipo_calculo = urlClass.searchParams.get("tipo_calculo");
    
    if (tipo_calculo === "cubo"){
    document.getElementById('volume_cubo').style.visibility = "visible"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "esfera"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.visibility = "visible";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "cilindro"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.visibility = "visible";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "cone"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.visibility = "visible";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "piramide"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.visibility = "visible";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "paralelepipedo"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.visibility = "visible";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "prisma"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.visibility = "visible";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "quadrado"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.visibility = "visible";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "retangulo"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.visibility = "visible";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "circulo"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.visibility = "visible";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "triangulo"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.visibility = "visible";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "losangulo"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.visibility = "visible";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "poligono"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.visibility = "visible";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "paralelogramo"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.visibility = "visible";
    document.getElementById('area_trapezio').style.display = "none";
        }else if (tipo_calculo === "trapezio"){
    document.getElementById('volume_cubo').style.display = "none"
    document.getElementById('volume_esfera').style.display = "none";
    document.getElementById('volume_cilindro').style.display = "none";
    document.getElementById('volume_cone').style.display = "none";
    document.getElementById('volume_piramide').style.display = "none";
    document.getElementById('volume_paralelepipedo').style.display = "none";
    document.getElementById('volume_prisma').style.display = "none";
    document.getElementById('area_quadrado').style.display = "none";
    document.getElementById('area_retangulo').style.display = "none";
    document.getElementById('area_circulo').style.display = "none";
    document.getElementById('area_triangulo').style.display = "none";
    document.getElementById('area_losangulo').style.display = "none";
    document.getElementById('area_poligono').style.display = "none";
    document.getElementById('area_paralelogramo').style.display = "none";
    document.getElementById('area_trapezio').style.visibility = "visible";
        }else{
            window.location.href = "index.html";
        }
    }
    
    /* Função para verificar qual é a base da pirâmide para ver de seve mostrar o input de inserir quantidade*/
    function verfbase_piramide(){
      var tipobase_piramide = document.getElementById('tipobase_piramide').value;
    
      if (tipobase_piramide === "piligono_regular"){
        document.getElementById('numerobase_piramide').style.display = "block";
      }else{
        document.getElementById('numerobase_piramide').style.display = "none";
      }
    
      if (tipobase_piramide === "retangulo"){
        document.getElementById('divladomaior_piramide').style.display = "block";
        document.getElementById('lblladomenor_piramide').innerHTML = "Lado Menor";
      }else{
        document.getElementById('divladomaior_piramide').style.display = "none";
        document.getElementById('lblladomenor_piramide').innerHTML = "Lado";
      }
    }
    
    /* Função para verificar qual é a base do prisma para ver de seve mostrar o input de inserir quantidade*/
    function verfbase_prisma(){
      var tipobase_prisma = document.getElementById('tipo_prisma').value;
    
      if (tipobase_prisma === "outro"){
        document.getElementById('numerobase_prisma').style.display = "block";
      }else{
          document.getElementById('numerobase_prisma').style.display = "none";
      }
    
    }
    
    /* Funções para calcular o volume, área e permetro de cada figura */
    function Cvolume_para (){
        var espessura = document.getElementById('espessura_para').value;
        var comprimento = document.getElementById('comprimento_para').value;
        var altura = document.getElementById('altura_para').value;
        var unmedida = document.getElementById('unmedida_para').value;
        
        var volume = (espessura*comprimento*altura);
        var area = ((espessura*comprimento)*2) + ((espessura*altura)*2) + ((comprimento*altura)*2);
        var perimetro = ((altura*4) + (comprimento*4) + (espessura*4));
        var mos_resultado = "Volume = " + volume + " " + unmedida + "³/  Área = " + area + " " + unmedida + "²/  Perímetro = " + perimetro + " " + unmedida;
        document.getElementById('resultado_para').innerHTML = mos_resultado;
    }
    
    function Cvolume_cubo (){
        var lado = document.getElementById('lado_cubo').value;
        var unmedida = document.getElementById('unmedida_cubo').value;
        
        var volume = (lado*lado*lado);
        var area = (lado*lado)*6;
        var perimetro = lado*12;
        var mos_resultado = "Volume = " + volume + " " + unmedida + "³/  Área = " + area + " " + unmedida + "²/  Perímetro = " + perimetro + " " + unmedida;
        document.getElementById('resultado_cubo').innerHTML = mos_resultado;
    }
    
    function Cvolume_esfera (){
        var raio = document.getElementById('raio_esfera').value;
        var unmedida = document.getElementById('unmedida_esfera').value;
        var PI = document.getElementById('pi_esfera').value;
        
        var volume_bruto = ((raio*raio*raio)*PI*4)/3;
        var volume = Number(volume_bruto.toFixed(2));
        var area_bruta = ((raio*raio)*PI)*4;
        var area = Number(area_bruta.toFixed(2));
        var mos_resultado = "Volume ≅ " + volume.toString().replace('.', ',')  + " " + unmedida + "³/  Área ≅ " + area.toString().replace('.', ',') +  " " + unmedida + "²";
        document.getElementById('resultado_esfera').innerHTML = mos_resultado;
    }
    
    function Cvolume_cilindro (){
        var raio = document.getElementById('raio_cilindro').value;
        var unmedida = document.getElementById('unmedida_cilindro').value;
        var PI = document.getElementById('pi_cilindro').value;
        var altura = document.getElementById('altura_cilindro').value;
        
        var volume_bruto = ((raio*raio)*PI)*altura;
        var volume = Number(volume_bruto.toFixed(2));
        var area_bruta = (raio+altura)*raio*PI*2;
        var area = Number(area_bruta.toFixed(2));
        var mos_resultado = "Volume ≅ " + volume.toString().replace('.', ',')  + " " + unmedida + "³/  Área ≅ " + area.toString().replace('.', ',') + " " + unmedida + "²";
        document.getElementById('resultado_cilindro').innerHTML = mos_resultado;
    }
    
    function Cvolume_cone (){
        var raio = document.getElementById('raio_cone').value;
        var unmedida = document.getElementById('unmedida_cone').value;
        var PI = document.getElementById('pi_cone').value;
        var altura = document.getElementById('altura_cone').value;
        
        var volume_bruto = (((raio*raio)*PI)*altura)/3;
        var volume = Number(volume_bruto.toFixed(2));
        var geratriz = Math.sqrt((raio*raio) + (altura*altura));
        var area_bruta = (raio*raio)*PI + PI*raio*geratriz;
        var area = Number(area_bruta.toFixed(2));
        var mos_resultado = "Volume ≅ " + volume.toString().replace('.', ',')  + " " + unmedida + "³/  Área ≅ " + area.toString().replace('.', ',') + " " + unmedida + "²";
        document.getElementById('resultado_cone').innerHTML = mos_resultado;
    }
    
    function Cvolume_prisma (){
        var lado = document.getElementById('lado_prisma').value;
        var unmedida = document.getElementById('unmedida_prisma').value;
        var altura = document.getElementById('altura_prisma').value;
        var tipo_prisma = document.getElementById('tipo_prisma').value;
        
        /* Calculando a área da base de acordo com a figura */
        if (tipo_prisma === "triangular"){
          var area_base = ((lado*lado)*Math.sqrt(3))/4;
          var area_lateral = (altura*lado)*3;
        }else if (tipo_prisma === "pentagonal"){
          var area_base = (((lado*lado)*Math.sqrt(3))/4)*5;
          var area_lateral = (altura*lado)*5;
        }else if (tipo_prisma === "hexagonal"){
          var area_base = ((((lado*lado)*6))*Math.sqrt(3))/4;
          var area_lateral = (altura*lado)*6;
        }else if (tipo_prisma === "heptagonal"){
          var area_base = ((((lado*lado)*7))*Math.sqrt(3))/4;
          var area_lateral = (altura*lado)*7;
        }else if (tipo_prisma === "octagonal"){
          var area_base = ((((lado*lado)*8))*Math.sqrt(3))/4;
          var area_lateral = (altura*lado)*8;
        }else if (tipo_prisma === "outro"){
          var qt_aresta = document.getElementById('qtaresta_prisma').value;
          var area_base = ((((lado*lado)*qt_aresta))*Math.sqrt(3))/4;
          var area_lateral = (altura*lado)*qt_aresta;
        }
        
        var areatotal_bruta = area_base + area_base + area_lateral;
        var area = Number(areatotal_bruta.toFixed(2));
        var volume_bruto = area_base * altura;
        var volume = Number(volume_bruto.toFixed(2));
        var mos_resultado = "Volume ≅ " + volume.toString().replace('.', ',')  + " " + unmedida + "³/  Área ≅ " + area.toString().replace('.', ',') + " " + unmedida + "²";
        document.getElementById('resultado_prisma').innerHTML = mos_resultado;
    }
    
    function Cvolume_piramide (){
        var lado = document.getElementById('lado_piramide').value;
        var unmedida = document.getElementById('unmedida_piramide').value;
        var altura = document.getElementById('altura_piramide').value;
        var tipobase_piramide = document.getElementById('tipobase_piramide').value;
    
        /* Calculando a área da base de acordo com a figura */
        if (tipobase_piramide === "triangulo"){
          var area_base = ((lado*lado)*Math.sqrt(3))/4;
        }else if (tipobase_piramide === "quadrado"){
          var area_base = lado*lado;
        }else if (tipobase_piramide === "retangulo"){
          var ladomaior = document.getElementById('ladomaior_piramide').value;
          var area_base = lado*ladomaior;
        }else if (tipobase_piramide === "pentagono"){
          var area_base = ((((lado*lado)*5))*Math.sqrt(3))/4;
        }else if (tipobase_piramide === "hexagono"){
          var area_base = ((((lado*lado)*6))*Math.sqrt(3))/4;
        }else if (tipobase_piramide === "piligono_regular"){
          var qt_aresta = document.getElementById('qtaresta_piramide').value;
          var area_base = ((((lado*lado)*qt_aresta))*Math.sqrt(3))/4;
        }
    
        /* Calculando a área lateral de acordo com a figura */
        if (tipobase_piramide === "triangulo"){
          var apotema = ((lado*Math.sqrt(3))/2);
          var geratriz = Math.sqrt((apotema*apotema)+(altura*altura));
          var area_lateral = ((lado*geratriz)/2)*3;
        }else if (tipobase_piramide === "quadrado"){
          var apotema = lado/2;
          var geratriz = Math.sqrt((apotema*apotema)+(altura*altura));
          var area_lateral = ((lado*geratriz)/2)*4;
        }else if (tipobase_piramide === "retangulo"){
          var ladomaior = document.getElementById('ladomaior_piramide').value;
          var apotemamaior = ladomaior/2;
          var geratrizmaior = Math.sqrt((apotemamaior*apotemamaior)+(altura*altura));
    
          var apotemamenor = lado/2;
          var geratrizmenor = Math.sqrt((apotemamenor*apotemamenor)+(altura*altura));
    
          var area_lateral = (((ladomaior*geratrizmaior)/2)*2) + (((lado*geratrizmenor)/2)*2);
        }else if (tipobase_piramide === "pentagono"){
          var apotema = ((lado*Math.sqrt(3))/2);
          var geratriz = Math.sqrt((apotema*apotema)+(altura*altura));
          var area_lateral = ((lado*geratriz)/2)*5;
        }
        else if (tipobase_piramide === "hexagono"){
          var apotema = ((lado*Math.sqrt(3))/2);
          var geratriz = Math.sqrt((apotema*apotema)+(altura*altura));
          var area_lateral = ((lado*geratriz)/2)*6;
        }else if (tipobase_piramide === "piligono_regular"){
          var qt_aresta = document.getElementById('qtaresta_piramide').value;
          var apotema = ((lado*Math.sqrt(3))/2);
          var geratriz = Math.sqrt((apotema*apotema)+(altura*altura));
          var area_lateral = ((lado*geratriz)/2)*qt_aresta;
        }
        
        var volume_bruto = ((area_base)*altura)/3;
        var volume = Number(volume_bruto.toFixed(2));
        var area_bruta = area_base + area_lateral;
        var area = Number(area_bruta.toFixed(2));
        var mos_resultado = "Volume ≅ " + volume.toString().replace('.', ',')  + " " + unmedida + "³/  Área ≅ " + area.toString().replace('.', ',') + " " + unmedida + "²";
        document.getElementById('resultado_piramide').innerHTML = mos_resultado;
    }
    
    