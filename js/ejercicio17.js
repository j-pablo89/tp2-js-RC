// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

const texto = prompt(`Ingrese una cadena de texto: `);
let bandera = false;
let posicion = 0;

for(let indice=0;indice<texto.length;indice++){
    if(texto.charAt(indice) == 'a' || texto.charAt(indice) == 'e' || texto.charAt(indice) == 'i'
    || texto.charAt(indice) == 'o' || texto.charAt(indice) == 'u'){
        posicion = indice;
        bandera = true;
        break;
    }
}
if(bandera){
    document.write(`La posicion de la primera vocal es: ${posicion}`);
}else{
    document.write(`No se encontro vocales`);
}
