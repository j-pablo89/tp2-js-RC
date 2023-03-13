// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let cadena='';
let cadena2 = '';
let bandera = true;

do{
    cadena = prompt('Ingresa una cadena: ');
    if(bandera){
        cadena2 = cadena;
        bandera = false;
    }else{
        cadena2 = cadena2 + ' - ' + cadena;
    }
    
    
}while(confirm('¿otra cadena?'));

document.write(cadena2);