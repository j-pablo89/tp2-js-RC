// 15- Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt(`Ingrese una cadena de texto: `);
let contador = 0;

for(let indice=0;indice<texto.length;indice++){
    if(texto.charAt(indice) === 'a' || texto.charAt(indice) === 'e' || texto.charAt(indice) === 'i'
    || texto.charAt(indice) === 'o' || texto.charAt(indice) === 'u'){
        contador++;
    }
}

document.write(`Cantidad de vocales: ${contador}`);