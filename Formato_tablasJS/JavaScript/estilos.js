function rojoFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "#863A6F";
    }
}

function verdeFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "#FB2576";
    }
}

function azulFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "blue";
    }
}

function blancoFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "white";
    }
}


function negroFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "black";
    }
}


function moradoFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "purple";
    }
}

function fuenteFcn() {
    valor = document.getElementById("fuentes").value;
    valor = parseInt(valor);
    const encabezados = document.querySelectorAll("table .color__fuente");
    switch(valor) {
        case 0:
            
            for (let i = 0;i < encabezados.length; i++) {                
                encabezados[i].style.fontFamily = "Times New Roman";
            }    
        break;

        case 1:            
            for (let i = 0;i < encabezados.length; i++) {               
                encabezados[i].style.fontFamily = "Papyrus";
            }    
        break;

        case 2:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Helvetica";
        }    
        break;

        case 3:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Verdana";
        }    
        break;

        case 4:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Lucida Handwriting";
        }    
        break;

        case 5:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Arial Black";
        }    
        break;
    }
}

function fontSizeFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    vfontSize = document.getElementById("sizeFuente").value;
    
    
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.fontSize = vfontSize + "px";
    }    
    
}
