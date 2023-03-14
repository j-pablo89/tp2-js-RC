// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

const edad1 = parseInt(prompt(`Ingrese una edad: `));
const nombre1 = prompt(`Ingrese el nombre para edad1: `);
const edad2 = parseInt(prompt(`Ingrese otra edad: `));
const nombre2 = prompt(`Ingrese el nombre para edad2: `);
const edad3 = parseInt(prompt(`Ingrese otra edad: `));
const nombre3 = prompt(`Ingrese el nombre para edad3: `);

let mayor = Math.max(edad1,edad2,edad3);

if(mayor == edad1){
    document.write(`El mayor es ${nombre1}`);
}
if(mayor == edad2){
    document.write(`El mayor es ${nombre2}`);
}
if(mayor == edad3){
    document.write(`El mayor es ${nombre3}`);
}

