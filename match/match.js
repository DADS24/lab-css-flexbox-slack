var word = 'pepe'
var guess = []
var fallos = 0
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