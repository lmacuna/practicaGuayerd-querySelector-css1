/* document.write("<p>Hola Guayerd</p>")
document.querySelector("#uno").classList.remove("")
document.querySelector("#cuatro").classList.add("")
document.querySelector("#tres").classList.replace("")
document.querySelector("#cinco").classList.toggle("");
document.querySelector("#cuatro").classList.toggle(""); */


// Nº 1 Crear un párrafo. Luego desde el javascript hacer que se vea rojo.

/*
console.log(document.querySelector("p").classList.add("rojo"))
*/



// Nº2 Crear tres párrafos. Luego desde el javascript hacer que tengan un fondo verde.

 /* let parrafos=document.querySelectorAll('p');
for(let i=0;i<parrafos.length;i++){
    document.querySelector(parrafos[i].classList.add("verde"));
}  */
   
/* let parrafos=document.querySelectorAll('p');
parrafos.forEach(p=>document.querySelector(p.classList.add("verde")))
 */



//Nº3 Crear 4 párrafos, dos con clase “blanco”. A todos agregarle un fondo celeste,
 //y a los clase blanco además hacer que el texto se vea blanco.
 /* let parrafos=document.querySelectorAll('p');
parrafos.forEach(p=>document.querySelector(p.classList.add("celeste")))

let blancos=document.querySelectorAll(".blanco")
blancos.forEach(b=>document.querySelector(b.classList.add("fuente")))
 */



//Nº4 En base al siguiente listado de notas, mostrar en verde los mayores a 7,
 //amarillo los que están entre 4 y 6 y
  //en rojo del tres para abajo.
/* let notas = [9,2,7,6,6,4,5,10,3,9.5];

for(let i =0;i<notas.length;i++){
    if(notas[i]>=7){
    document.write('<p class="green">'+notas[i]+'</p>')
    }else if(notas[i]>3&&notas[i]<7){
        document.write('<p class="amarillo">'+notas[i]+'</p>')
    }else if(notas[i]<4){
        document.write('<p class="rojo">'+notas[i]+'</p>')
    }

} */




// Nº5  Tenemos el siguiente HTML. Vamos a preguntarle al usuario qué color
 /* quiere cambiar, y luego le vamos a preguntar por cuál. (Dos input). 
 En base a eso, nuestro javascript modificará el documento. 
 Ejemplo: Si pide cambiar el verde por azul, los textos que antes se veían 
 en verde ahora deberán verse en azul.
 */
/* let colorViejo=prompt("que color quieres cambiar?")
let colorNuevo=prompt("que color quieres usar")
let parrafos=document.querySelectorAll("p") */
/* for(let i =0;i<parrafos.length;i++){
    if(colorViejo){
        document.querySelector(parrafos[i].classList.replace(colorViejo,colorNuevo))
    }
} */

//parrafos.forEach(p=>document.querySelector(p.classList.replace(colorViejo,colorNuevo)))




// Nº6 Pedir al usuario: Una palabra, un color y una cantidad. 
//Generar la cantidad de párrafos con esa palabra y ese color que se requiera.



 let palabra =prompt("ingresa una palabra");
let color =prompt("ingresa un color para tu texto");
let cantidad = parseInt(prompt("ingresa la cantidad de parrafos que quieres impromir"));


for(let i = 0;i<cantidad;i++){
    document.write('<br>'+'<hr>'+'<br>'+'<p>'+`${palabra}`+'</p>'+'<br>'+'<hr>'+'<br>');
    
}

parrafos=document.querySelectorAll("p");

parrafos.forEach(p => document.querySelector(p.classList.add(color)));
    
 




 
