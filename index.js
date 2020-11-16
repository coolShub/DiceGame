

var randomNumber1=Math.floor(Math.random()*6)+1;  // 1 - 6
var randomDiceImage="dice"+randomNumber1+".png"; //  random image

var randomImageSource="images/"+randomDiceImage;  //images/dicex.png


var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);



var randomNumber2=Math.floor(Math.random()*6)+1;  // 1 - 6
var randomDiceImage2="dice"+randomNumber2+".png"; //  random image

var randomImageSource2="images/"+randomDiceImage2;  //images/dicex.png


var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);


document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2)
{
  document.querySelector("h2").innerHTML="Player 1 Wins⛳";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h2").innerHTML="Player 2 Wins⛳";
}
else{
    document.querySelector("h2").innerHTML="Draw😂";
}
