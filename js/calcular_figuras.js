/* Quando Carregar a página deve verificar qual é o tipo de figura que iremos qualcular*/
function verfigvol_escolhida() { var urlAtual = window.location.href;
    var urlClass = new URL(urlAtual);
    var tipo_calculo = urlClass.searchParams.get("tipo_calculo");
    
    if (tipo_calculo === "cubo"){
      document.getElementById('volume_cubo').style.display = "block";
    }else if (tipo_calculo === "esfera"){
      document.getElementById('volume_esfera').style.display = "block";
    }else if (tipo_calculo === "cilindro"){
      document.getElementById('volume_cilindro').style.display = "block";
    }else if (tipo_calculo === "cone"){
      document.getElementById('volume_cone').style.display = "block";
    }else if (tipo_calculo === "piramide"){
      document.getElementById('volume_piramide').style.display = "block";
    }else if (tipo_calculo === "paralelepipedo"){
      document.getElementById('volume_paralelepipedo').style.display = "block";
    }else if (tipo_calculo === "prisma"){
      document.getElementById('volume_prisma').style.display = "block";
    }else if (tipo_calculo === "quadrado"){
      document.getElementById('area_quadrado').style.display = "block";
    }else if (tipo_calculo === "retangulo"){
      document.getElementById('area_retangulo').style.display = "block";
    }else if (tipo_calculo === "circulo"){
      document.getElementById('area_circulo').style.display = "block";
    }else if (tipo_calculo === "triangulo"){
      document.getElementById('area_triangulo').style.display = "block";
    }else if (tipo_calculo === "losangulo"){
      document.getElementById('area_losangulo').style.display = "block";
    }else if (tipo_calculo === "poligono"){
      document.getElementById('area_poligono').style.display = "block";
    }else if (tipo_calculo === "paralelogramo"){
      document.getElementById('area_paralelogramo').style.display = "block";
    }else if (tipo_calculo === "trapezio"){
      document.getElementById('area_trapezio').style.display = "block";
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

    /* Função para verificar qual é o tipo de triangulo, assim verificando quais campos devem ser mostrados*/
    function verftipo_triangulo(){
      var tipo_triangulo = document.getElementById('tipo_triangulo').value;
    
      if (tipo_triangulo === "retangulo"){
        document.getElementById('triangulo_lado2').style.display = "none";
        document.getElementById('triangulo_lado3').style.display = "none";
        document.getElementById('triangulo_altura').style.display = "block";
        document.getElementById('lbl_lado1triangulo').innerHTML = "Base";
        document.getElementById('p_observacaotriangulo').innerHTML = "Em um triângulo retângulo, um dos ângulos é reto. O lado oposto ao ângulo reto é chamado de hipotenusa. Os lados adjacentes ao ângulo reto são chamados de catetos.";
      }else if (tipo_triangulo === "equilatero"){
        document.getElementById('triangulo_lado2').style.display = "none";
        document.getElementById('triangulo_lado3').style.display = "none";
        document.getElementById('triangulo_altura').style.display = "none";
        document.getElementById('lbl_lado1triangulo').innerHTML = "Lado";
        document.getElementById('lbl_lado1triangulo').innerHTML = "Base";
        document.getElementById('p_observacaotriangulo').innerHTML = "Um triângulo equilátero, é todo triângulo em que os três lados são iguais, além de todos os três ângulos internos são congruentes um com o outro.";
      }else if (tipo_triangulo === "isosceles"){
        document.getElementById('triangulo_lado2').style.display = "block";
        document.getElementById('triangulo_lado3').style.display = "none";
        document.getElementById('triangulo_altura').style.display = "none";
        document.getElementById('lbl_lado1triangulo').innerHTML = "Lado 1 (Base)";
        document.getElementById('lbl_lado2triangulo').innerHTML = "Lado 2 e 3 (Lateral)";
        document.getElementById('p_observacaotriangulo').innerHTML = "Um triângulo isósceles é um triângulo que possui dois lados de mesma medida.";
      }else if (tipo_triangulo === "escaleno"){
        document.getElementById('triangulo_lado2').style.display = "block";
        document.getElementById('triangulo_lado3').style.display = "block";
        document.getElementById('triangulo_altura').style.display = "block";
        document.getElementById('lbl_lado1triangulo').innerHTML = "Lado 1";
        document.getElementById('lbl_lado2triangulo').innerHTML = "Lado 2";
        document.getElementById('lbl_lado1triangulo').innerHTML = "Base";
        document.getElementById('p_observacaotriangulo').innerHTML = "O triângulo escaleno tem os três lados com medidas distintas bem como ângulos internos diferentes.";
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

    function Carea_quadrado (){
      var lado = document.getElementById('lado_quadrado').value;
      var unmedida = document.getElementById('unmedida_quadrado').value;

      area_bruta = lado * lado;
      var area = Number(area_bruta.toFixed(2));
      var perimetro = lado * 4;

      var mos_resultado = "Área = " + area.toString().replace('.', ',') + " " + unmedida + "² /  Perímetro = " + perimetro.toString().replace('.', ',') + " " + unmedida;
      document.getElementById('resultado_quadrado').innerHTML = mos_resultado;
    }

    function Carea_retangulo (){
      var lado = document.getElementById('lado_retangulo').value;
      var altura = document.getElementById('altura_retangulo').value;
      var unmedida = document.getElementById('unmedida_retangulo').value;

      area_bruta = lado * altura;
      var area = Number(area_bruta.toFixed(2));
      var perimetro = (altura * 2) + (lado * 2);

      var mos_resultado = "Área = " + area.toString().replace('.', ',') + " " + unmedida + "² /  Perímetro = " + perimetro.toString().replace('.', ',') + " " + unmedida;
      document.getElementById('resultado_retangulo').innerHTML = mos_resultado;
    }

    function Carea_circulo (){
      var raio = document.getElementById('raio_circulo').value;
      var pi = document.getElementById('pi_circulo').value;
      var unmedida = document.getElementById('unmedida_circulo').value;

      area_bruta = pi * (raio * raio);
      var area = Number(area_bruta.toFixed(2));
      var perimetro = 2 * pi * raio;

      var mos_resultado = "Área = " + area.toString().replace('.', ',') + " " + unmedida + "² /  Perímetro = " + perimetro.toString().replace('.', ',') + " " + unmedida;
      document.getElementById('resultado_circulo').innerHTML = mos_resultado;
    }

    function Carea_losangulo (){
      var Dmaior = document.getElementById('diagmaior_losangulo').value;
      var Dmenor = document.getElementById('diagmenor_losangulo').value;
      var lado = document.getElementById('lado_losangulo').value;
      var unmedida = document.getElementById('unmedida_losangulo').value;

      area_bruta = (Dmaior * Dmenor)/2;
      var area = Number(area_bruta.toFixed(2));
      var perimetro = lado * 4;

      var mos_resultado = "Área = " + area.toString().replace('.', ',') + " " + unmedida + "² /  Perímetro = " + perimetro.toString().replace('.', ',') + " " + unmedida;
      document.getElementById('resultado_losangulo').innerHTML = mos_resultado;
    }

    function Carea_poligono (){
      var lado = document.getElementById('lado_poligono').value;
      var qtlado = document.getElementById('qtlado_poligono').value;
      var unmedida = document.getElementById('unmedida_poligono').value;

      area_bruta = (((lado*lado)*Math.sqrt(3)))*4;
      var area = Number(area_bruta.toFixed(2));
      var perimetro = lado * qtlado;

      var mos_resultado = "Área = " + area.toString().replace('.', ',') + " " + unmedida + "² /  Perímetro = " + perimetro.toString().replace('.', ',') + " " + unmedida;
      document.getElementById('resultado_poligono').innerHTML = mos_resultado;
    }

    function Carea_paralelogramo (){
      var ladomaior = document.getElementById('ladomaior_paralelogramo').value;
      var ladomenor = document.getElementById('ladomenor_paralelogramo').value;
      var altura = document.getElementById('altura_paralelogramo').value;
      var unmedida = document.getElementById('unmedida_paralelogramo').value;

      area_bruta = ladomaior * altura;
      var area = Number(area_bruta.toFixed(2));
      var perimetro = (ladomaior * 2) + (ladomenor * 2);

      var mos_resultado = "Área = " + area.toString().replace('.', ',') + " " + unmedida + "² /  Perímetro = " + perimetro.toString().replace('.', ',') + " " + unmedida;
      document.getElementById('resultado_paralelogramo').innerHTML = mos_resultado;
    }

    function Carea_trapezio (){
      var basemaior = document.getElementById('basemaior_trapezio').value;
      var basemenor = document.getElementById('basemenor_trapezio').value;
      var altura = document.getElementById('altura_trapezio').value;
      var ladomaior = document.getElementById('ladomaior_trapezio').value;
      var ladomenor = document.getElementById('ladomenor_trapezio').value;
      var unmedida = document.getElementById('unmedida_trapezio').value;

      area_bruta = ((basemaior * basemenor) * altura)/2;
      var area = Number(area_bruta.toFixed(2));
      var perimetro = basemaior + basemenor + ladomaior + ladomenor;

      var mos_resultado = "Área = " + area.toString().replace('.', ',') + " " + unmedida + "² /  Perímetro = " + perimetro.toString().replace('.', ',') + " " + unmedida;
      document.getElementById('resultado_trapezio').innerHTML = mos_resultado;
    }

    function Carea_triangulo (){
      var lado1 = parseFloat(document.getElementById('lado1_triangulo').value);
      var lado2 = parseFloat(document.getElementById('lado2_triangulo').value);
      var lado3 = parseFloat(document.getElementById('lado3_triangulo').value);
      var tipo = document.getElementById('tipo_triangulo').value;
      var unmedida = document.getElementById('unmedida_triangulo').value;

      if (tipo === "retangulo"){
        var altura = parseFloat(document.getElementById('altura_triangulo').value);
        area_bruta = (lado1 * altura)/2;
        perimetro_bruto = lado1 + altura + Math.sqrt((lado1*lado1) + (altura*altura));
      }else if (tipo === "equilatero"){
        area_bruta = ((lado1*lado1)*Math.sqrt(3))/4;
        perimetro_bruto = lado1*3;
      }else if (tipo === "isosceles"){
        altura = Math.sqrt((lado2*lado2)-(lado1/2)*(lado1/2));
        area_bruta = (lado1*altura)/2;
        perimetro_bruto = lado1 + (lado2*2);
      }else if (tipo === "escaleno"){
        var altura = parseFloat(document.getElementById('altura_triangulo').value);
        area_bruta = (lado1*altura)/2;
        perimetro_bruto = lado1 + lado2 + lado3;
      }

      var area = Number(area_bruta.toFixed(2));
      var perimetro = Number(perimetro_bruto.toFixed(2));

      var mos_resultado = "Área = " + area.toString().replace('.', ',') + " " + unmedida + "² /  Perímetro = " + perimetro.toString().replace('.', ',') + " " + unmedida;
      document.getElementById('resultado_triangulo').innerHTML = mos_resultado;
    }