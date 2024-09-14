let attempt = 0;
let score = 0;
function guess (userGuess){
    //increasing attemtps by 1
    attempts++ ;
    document.documentElement("attempts").innerHTML = attempts;
    //generating a random number
    const random_number = math.floor(Math.random() *101);
    // determining the correct answer
    const correctAnswer = random_number % 2 ==0? "even" : "odd";
//sfx function
function sfx(isCorrect){
    let audio = isCorrect?
    document.getElementById("correct")
    : document.getElementById("wrong")
    audio.onpause()
    audio.currenTime = 0
    audio.play();
}
if (correctAnswer == userGuess)
//update the display
document.getElementById("display") .innerHTML =
"correct!" the number is" + random_number;
//increasing the player score
score++
//updateing the player score field
document.getElementById("score").innerHTML = score;
//playing the sfx
sfx(true);
} else {
  //update the display

  document.getElementById("display").innerHTML =
    "wrong! the number is " + random_number;
  //playing the sfx
  sfx(false);
}