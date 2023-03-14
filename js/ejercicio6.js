// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….


for(let fila=1;fila<=30;fila++){
    for(let col=1;col<=fila;col++){
        document.write(fila);
    }
    document.write('<br>');
}