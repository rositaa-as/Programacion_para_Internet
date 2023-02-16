function mayormenor(){
    resultado = "";
    var edad = document.getElementById("edad").value;

    edad = parseInt(edad);

    if(edad >0 & edad< 18){
        resultado = "Eres menor de edad";
    } else if (edad >= 18){
        resultado = "Eres mayor de edad";
    }else{
       resultado= "Edad no válida"
    }
document.getElementById("resultado").innerHTML = resultado;
}

function imc(){

    resultado = "";
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    altura= altura/100; 
    IMC = peso/Math.pow(altura,2);
    tIMC = "";


   switch(true){
    case IMC < 18.5:
            tIMC = "Peso insuficiente";
            document.getElementById("tIMC").innerHTML = tIMC;
    break;

    case IMC >= 18.5  &&  imc <= 24.9:
        tIMC = "Peso Normal";
        document.getElementById("tIMC").innerHTML = tIMC;
    break;

    case IMC >= 25 && imc <= 26.9:
        tIMC = "Sobrepeso";
        document.getElementById("tIMC").innerHTML =tIMC;
    break;
    
    case IMC >=27 && imc <=29.9:
        tIMC = "obesidad";
        document.getElementById("tIMC").innerHTML = tIMC;
     break;
    
}
}
