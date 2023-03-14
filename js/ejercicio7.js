// 7- Haz un script que escriba una pirámide inversa de los números del 1 
// al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let numero;

do{
    numero = parseInt(prompt('Ingrese un numero no mayor a 50: '));
    if(numero<=50){
        for(numero;numero>0;numero--){
            for(let fila=1;fila<=numero;fila++){
                document.write(numero);
            }
            document.write('<br>');
        }
    }else{
        alert('numero mayor a 50');
    }
}while(numero>50);
