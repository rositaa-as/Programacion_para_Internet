function edadFnc(){
    resultado= "";
    var edad = document.getElementById("edad").value;

    edad = parseFloat(edad);

    if(edad < 18){
        resultado = "Eres Menor de Edad.";
        document.querySelector(".result").style.backgroundColor = "#1E58FF";
        document.querySelector(".result").style.color = "white";

    } else if(edad >= 18){
        resultado = "Eres Mayor de Edad.";
        document.querySelector(".result").style.backgroundColor = "#1E58FF";
        document.querySelector(".result").style.color = "white";

    } 
    document.getElementById("resultado").innerHTML = resultado;
}

function IMCFnc(){
    resultado1="";
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    altura = altura/100;
    altura= Math.pow(altura,2);
    imc= peso/altura;

    switch(true){
        case(imc < 16):{
            resultado1="Tu IMC indica que tienes Desnutricion Severa";
            document.querySelector(".imcResultado").style.backgroundColor = "#FA1C19";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case((imc >=16) && (imc <= 18.5)):
        {
            resultado1="Tu IMC indica que tienes Desnutricion Moderada";
            document.querySelector(".imcResultado").style.backgroundColor = "#FA5319";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case((imc >=18.5) && (imc <= 22)):
        {
            resultado1="Tu IMC indica que tienes Bajo Peso";
            document.querySelector(".imcResultado").style.backgroundColor = "#FFD012";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case((imc>=22.1) && (imc<=24.9)):
        {
            resultado1="Tu IMC indica que tienes Peso Normal";
            document.querySelector(".imcResultado").style.backgroundColor = "#04B41C";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case((imc>=25) && (imc<=29.9)):
        {
            resultado1="Tu IMC indica que tienes Sobrepeso";
            document.querySelector(".imcResultado").style.backgroundColor = "#FFD012";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case((imc>=30) && (imc<=34.9)):
        {
            resultado1="Tu IMC indica que tienes Obesidad de tipo I";
            document.querySelector(".imcResultado").style.backgroundColor = "#FA5319";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case((imc>=35) && (imc<=39.9)):
        {
            resultado1="Tu IMC indica que tienes Obesidad de tipo II";
            document.querySelector(".imcResultado").style.backgroundColor = "#FF2525";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case(imc >= 40):
        {
            resultado1="Tu IMC indica que tienes Obesidad de tipo III";
            document.querySelector(".imcResultado").style.backgroundColor = "#BA0000";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
    }
    
    document.getElementById("resultado1").innerHTML = resultado1;

}
function conversor()
{
    var grados = document.getElementById("entrada").value;
    grados = parseFloat(grados);
    var resultado = 0;
    var index1 = document.getElementById("select").selectedIndex;
    var opcion1 = document.getElementById("select").options[index1].value;

    var index2 = document.getElementById("select2").selectedIndex;
    var opcion2 = document.getElementById("select2").options[index2].value;

    switch (true)
    {
        case(opcion1 == 0):
        {
            if(opcion2 == 0)
            {
                resultado = grados;
            }
            if(opcion2 == 1)
            {
                valor = (grados * 1.8)+32;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 2)
            {
                valor = grados + 273.15;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 3)
            {
                valor = (grados + 273.15)*1.8;
                resultado = valor.toFixed(2);
            }
            //poner en el input el resultado
            input =document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        case (opcion1 == 1):
        {
            if(opcion2 == 0)
            {
                valor = (grados - 32)/1.8;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 1)
            {
                resultado = grados;
            }
            if(opcion2 == 2)
            {
                valor = ((grados - 32)/1.8)+273.15;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 3)
            {
                valor = grados + 459.67;
                resultado = valor.toFixed(2);
            }
            //poner en el input el resultado
            input =document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        case (opcion1 == 2):
        {
            if(opcion2 == 0)
            {
                valor = grados - 273.15;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 1)
            {
                valor = ((grados - 273.15)*1.8)+32;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 2)
            {
                resultado = grados;
            }
            if(opcion2 == 3)
            {
                valor = grados*1.8;
                resultado = valor.toFixed(2);
            }
            input =document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        case (opcion1 == 3):
        {
            if(opcion2 == 0)
            {
                valor = (grados-491.67)*1.8;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 1)
            {
                valor = grados - 459.67;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 2)
            {
                valor = grados *1.8;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 3)
            {
                resultado = grados;
            }
            input = document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        default:
        {
            resultado = "No se pudo realizar la conversion";
            break;
        }
    }
}
