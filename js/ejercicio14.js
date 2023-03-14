// 14- Realiza un script que pida una cadena de texto 
// y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. 
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let cadena = prompt('Ingrese una cadena: ');
let nuevaCadena = '';
for(let indice=0;indice<cadena.length;indice++){
    nuevaCadena = nuevaCadena + cadena.charAt(indice) + '-';
}

document.write(nuevaCadena);