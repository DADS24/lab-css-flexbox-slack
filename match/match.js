// var word = 'pepe'
// var guess = []
// var fallos = 0
// word.split("").forEach(e =>{
//     var letter = prompt("una letra");
//       if(letter == e){
//         guess.push(letter);
//       }else{
//         fallos += 1;
//           if(fallos == 3){
//             console.log("Has perdido");
//           }
//       }
//  });
// var newArr = word.split("");

// guess.sort(function(a, b){  
//   return newArr.indexOf(a) - newArr.indexOf(b);
// });

// console.log(guess)
var word = 'pepe'
var guess = []
var fallos = 0
var maxIntentos = 3
var aciertos = 0
// Lo mismo que un while
for (;aciertos == word.length || maxIntentos == 0;){
  var letter = prompt("una letra");
  let sw=0
  word.split("").forEach(letra =>{
    if (letra == letter){
      aciertos++
      sw=1
    }
  })
  if (sw==0){ 
    maxIntentos--
    }
  // Si has acertado
  // 
  // else
  // maxIntentos--
}
if (maxIntentos ==0){
  console.log("Has perdido")
} else {
  console.log("Has ganado")
}
console.log("La palabra es: "+word)


word.split("").forEach(e =>{
    var letter = prompt("una letra");
      if(letter == e){
        guess.push(letter);
      }else{
        fallos += 1;
          if(fallos == 3){
            console.log("Has perdido");
          }
      }
});
var newArr = word.split("");
guess.sort(function(a, b){ 
  return newArr.indexOf(a) - newArr.indexOf(b);
});
console.log(guess)

/*
p? -> e => NO
e? -> p => NO
p? -> p => SI
e? -> h => NO
*/