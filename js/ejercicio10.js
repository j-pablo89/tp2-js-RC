// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
// Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
// Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let numeroFilas = parseInt(prompt(`Ingrese numero filas: `));
let numeroColumnas = parseInt(prompt(`Ingrese numero de columnas: `));
let total = numeroFilas*numeroColumnas;
document.write(`<table>`)
for(let _fila=0;_fila<numeroFilas;_fila++){
    document.write(`<tr>`);
    for(let _columna=0;_columna<numeroColumnas;_columna++){
        document.write(`<td>`);
        document.write(total);
        document.write(`</td>`);
        total = total - 1;
    }
    document.write(`</tr>`);
}
document,write(`</table>`);