// 8- Crea script para generar pirámide siguiente con los números del 1 
// al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……


let numero;

do{
    numero = parseInt(prompt('Ingrese un numero no mayor a 50: '));
    if(numero<=50){
        for(let col=1;col<=numero;col++){
            for(let fila=1;fila<=col;fila++){
                document.write(fila);
            }
            document.write('<br>');
        }
    }else{
        alert('numero mayor a 50');
    }
}while(numero>50);