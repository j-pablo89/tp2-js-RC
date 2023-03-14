// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const cadena = prompt(`Ingrese una cadena: `);
let nuevaCadena = '';

for(let indice=cadena.length;indice>=0;indice--){
    nuevaCadena = nuevaCadena + cadena.charAt(indice);
}

document.write(nuevaCadena);
