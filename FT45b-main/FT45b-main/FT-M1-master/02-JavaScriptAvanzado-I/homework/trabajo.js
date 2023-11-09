
/* x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); //10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a;
      console.log(b);//8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);//9
};
c(8, 9, 10);
console.log(b);// 10
console.log(x);// 1 */

/* console.log(bar); //undefined
console.log(baz); // no defined
foo();
function foo() {
   console.log('Hola!'); // no ingresa si lograra entrar seria "hola!"
}
var bar = 1;
baz = 2; */

/* var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // "franco" */

// en este codigo la funcion se encuentra entre parentesis y fuera de ellos se creeria que esta la llamada a la misma
//! importante preguntar
/* var instructor = 'Tony';
console.log(instructor); //Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //tony */

/* var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // the flash
   console.log(pm); // reverse flash
}
console.log(instructor); // the flash
console.log(pm); //Fraco */


/* 6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //"$4"-- + 5 = "$45"
"4" - 2 //2
"4px" - 2 // NaN
7 / 0 //infinito 
{}[0] // [0] queda el segundo valor pero no se comprende la logica
parseInt("09") // 09 
5 && 2 // 2 
2 && 5 // 5
5 || 0 // 5 que es verdadero 
0 || 5 // 5 que es verdadeero
[3]+[3]-[10] // en este sentido primero uno los valores de los arreglos "33" - 10 = 23
3>2>1 // false
[] == ![] // true */  //! preguntar la logica de esto 

/* function test() {
    console.log(a); // undefined
    console.log(foo()); // 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test(); */

/* var snack = 'Meow Mix';
//! importante preguntar sobre que sucede cuando se pasa por argumento true o false

function getFood(food) { // Al pasar por parametro false, no se ejecuta la funcion 
   if (food) {
      var snack = 'Friskies';
      console.log(snack);
      return snack;
   }
   console.log(snack);
   return snack;
}
console.log(snack);
getFood(false); */

/* var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // aurelio de rosa

var test = obj.prop.getFullname;

console.log(test()); // undefined */

/* function printing() {
    console.log(1); // 1
    setTimeout(function () {
       console.log(2); //4
    }, 1000);
    setTimeout(function () {
       console.log(3); //3
    }, 0);
    console.log(4); //2
 }
 
 printing(); */