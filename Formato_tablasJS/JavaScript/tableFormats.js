function formatosFnc() {
    formato  = document.getElementById("formatos").value;
    formato = parseFloat(formato);
    const formatoOne =  document.querySelectorAll(".customers"); 
    const formatoOnea =  document.querySelectorAll(".customers td, #customers th");
    const formatoOneb =  document.querySelectorAll(".customers th");
    const formatoTres = document.querySelectorAll(".customers tr:nth-child(even)");
    switch(formato) {
        case 0: 
                   
           for(i =0;i < formatoOne.length;i++) {
            formatoOne[i].style.cssText = 
            "font-family: Arial;border-collapse: collapse;width: 100%;";   
           }
           
           for(i =0;i < formatoOnea.length;i++) {  
            formatoOnea[i].style.cssText = 
            "border: 1px solid #ddd;padding: 8px;";
           }

           for(i =0;i < formatoOneb.length;i++) {  
            formatoOneb[i].style.cssText = 
            "padding-top: 12px;padding-bottom: 12px;text-align: left;background-color: #4faa04;color: white;";
           }

           for(i=0;i<formatoTres.length;i++) {
            formatoTres[i].style.cssText =
            "background-color: #f2f2f2;"
           }
        break;

        case 1:                       
            for(i =0;i < formatoOne.length;i++) {
                formatoOne[i].style.cssText = 
                "font-family: Helvetica;border-collapse: collapse;width: 50%;  margin:0 auto";
            }
            
            for(i =0;i < formatoOnea.length;i++) {
                formatoOnea[i].style.cssText = 
                "border: 1px dashed rgb(28, 201, 255);padding: 25px;";
            }

          
           for(i =0;i < formatoOneb.length;i++) {  
            formatoOneb[i].style.cssText = 
            "padding-top: 18px;padding-bottom: 18px;text-align: center;background-color: lightgray;color: #980F5A;";
           }

           for(i=0;i<formatoTres.length;i++) {
            formatoTres[i].style.cssText =
            "background-color: #6867AC;"
           }
        break;

        case 2:
            for(i =0;i < formatoOne.length;i++) {
                formatoOne[i].style.cssText = 
                "font-size:12px;font-family: Arial black;border-collapse: collapse;width: 75%;  margin:0 auto";
            }
            
            for(i =0;i < formatoOnea.length;i++) {
                formatoOnea[i].style.cssText = 
                "border: 2px dotted rgb(28, 10, 20);padding: 15px;";
            }

          
           for(i =0;i < formatoOneb.length;i++) {  
            formatoOneb[i].style.cssText = 
            "padding-top: 10px;padding-bottom: 10px;text-align: center;background-color:#D6E5FA;color: purple;";
           }

           for(i=0;i<formatoTres.length;i++) {
            formatoTres[i].style.cssText =
            "background-color: #94B3FD;"
           }

        break;

    }
}