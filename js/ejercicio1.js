// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar 
// un mensaje que ya puede conducir, si la edad ingresada no es un número válido 
// indicarlo en un mensaje.

const edad = prompt('Ingrese una edad: ');

if(edad > 18) {
document.write('Ya puede conducir');
}else{
if(edad <=18){
document.write('Aun no puede conducir');
}else{
document.write('Edad no válida');
}
}