// 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numero;
let suma = 0;

do{
    numero = prompt('Ingrese un numero: ');
    if(parseInt(numero)){
        numero = parseInt(numero);
        suma = suma + numero;
    }else{
       alert('No es un numero');
    }
}while(confirm('¿otro numero?'));

document.write(suma);

