// Array-a dərsdə keçdiyimizə uyğun remove funksiyası yazın. Bu method Arrayın sonuncu elementini silsin.

function myArray(){
var array = ["kitab","defter","qelem","canta","karandas"];
this.remove = function (){
array.length = array.length - 1;
return array;
}
}
var arr = new myArray();
console.log(arr.remove("karandas"));