/* 3️⃣ ***** EJERCICIO 3 - CLOUSURE***** - pelisEstrenos() 3️⃣

Hemos renovado el catálogo de películas de Henry-Buster. Hay nuevas películas de estreno, pero no estamos seguros de
cuáles son realmente. Es por esto que los alumnos de Henry te darán una lista con el nombre de películas que están
de estreno. De esta forma podrás buscarlas en nuestro catálogo y actualizarlas.


⛔️ IMPORTANTE ⛔️
1) Sólo debes cambiar la propiedad "estreno" de las películas correspondientes.
 Se renovo el catologo en henry-buster y ingresaron peliculas estreno pero no sabemos cuales son
 entonces con ayuda de los alumnos que nos van a dar los nombres de varias peliculas estreno vamos a poder
 buscar en nuestro catalogo y actualizarlas a la seccion de estreno.
 Tu tarea va a ser buscar esas peliculas estreno dentro de nuestro catalogo.

*/


const listaDePeliculas=[
  {
    nombre: "Top Gun: Maverick",
    Estreno: "2022",
    genero: "Acción/Drama",
    estreno: false
  },{
    nombre: "Amnesia",
    añoDeEstreno: "2000",
    genero: "Acción",
    estreno: false
  },{
    nombre: "Avengers: La era de Ultrón",
    añoDeEstreno: "2015",
    genero: "Fantasia/Aventura/Acción",
    estreno: false
  }];
 
  const array= ["Los Simpsons", "Los increíbles","Amnesia"]


/* La función "pelisEstrenos" recibe por parámetro un arreglo de objetos (películas). Esta debe retornar otra función que
recibe un arreglo de strings (nombre de las películas en estreno). Esta segunda función debe retornar:

1) El string "Por favor indicar las peliculas que son de estreno": en el caso de que la función hija no reciba una
lista de películas de estreno. array =[] === 0 

2) El string "No se encontro ninguna de esas peliculas en nuestro catalogo": en el caso de que ninguno de los nombres
coincida con las películas de la lista. array = [elementos] no coinciden con ninguna de las propiedades del listaDePeliculas [{elements}]

3) El arreglo de películas, pero con la propiedad "estreno" actualizada en true si esa película es de estreno. 
  array=[elements]  al menos una pelicula coincide [{elements   estreno:true}]
*/

function pelisEstrenos(listaDePeliculas) {
  
  function busqueda (array){
    if(array.length>0){
      for (let i =0; i<array.length;i++){
        for(let j=0; j<listaDePeliculas.length;j++){
          if(listaDePeliculas[j]["nombre"]===array[i]){
            listaDePeliculas[j]["estreno"]=true
            console.log(listaDePeliculas)
          }
        }
      }

    }

    else ("Por favor indicar las peliculas que son de estreno")

  } return busqueda
}



















/* function pelisEstrenos(listaDePeliculas) {
  
  let indicador=false;
  function busqueda(array){
    if (array.length>0){
      for (let i=0; i<array.length;i++){
        for(let j=0; j<listaDePeliculas.length;j++){
        if(listaDePeliculas[j]["nombre"]===array[i]){
          listaDePeliculas[j]["estreno"]=true;
          indicador=true;
        }      
      }
    }
    if(indicador) return listaDePeliculas;
    else return ("No se encontro ninguna de las peliculas en nuestro catalogo");
  } else {
  return ("por favor indicar las peliculas que son de estreno");
  }
}
return busqueda;
}

const estrenos= pelisEstrenos(listaDePeliculas);
console.log(estrenos(array)); */


/* function pelisEstrenos(listaDePeliculas) {
   function busqueda(array){
    let bandera = false;
    if (array.length > 0) {
      for (let i=0; i<array.length; i++){
        for (let j = 0; j < listaDePeliculas.length; j++){
          if (listaDePeliculas[j]['nombre'] === array[i]){
            listaDePeliculas[j]['estreno']=true;
            bandera = true;
          } 
        }
      }
      if (bandera) return listaDePeliculas;
      else return ("No se encontro ninguna de esas peliculas en nuestro catalogo");
    } else {
      return ("Por favor indicar las peliculas que son de estreno");
    }
   }
   return busqueda;
}
 */
/* ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️*/
module.exports = pelisEstrenos;
