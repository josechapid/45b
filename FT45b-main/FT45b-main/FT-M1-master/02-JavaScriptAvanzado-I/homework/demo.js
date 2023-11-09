/* function findSmallestInt(args) {
    var numMenor= args[0];
   for(var i =1; i<args.length;i++){
     if(args[i]<numMenor){
       numMenor= args[i];
   }
   console.log(numMenor) ;
 }
}

findSmallestInt([34,15,88,20,9,14]) */

function saludar (){
   var miarray=[]
    return function (nombre){
        miarray.push(nombre) ;
        return miarray;
    }
}

var saludarHola= saludar();
console.log(saludarHola("pedro"))

  