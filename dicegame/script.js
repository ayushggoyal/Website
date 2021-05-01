
var dice1 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var i,j;
i= 6*Math.random();
j= 6*Math.random();
i= Math.floor(i);
j= Math.floor(j);
if(i>j)
{
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 won!!!";
}else if(i<j)
{
    document.getElementsByTagName("h1")[0].innerHTML="player 2 won!!!";
}else{
    document.getElementsByTagName("h1")[0].innerHTML="Draw";
}
document.getElementsByClassName("img1")[0].src= dice1[i];
document.getElementsByClassName("img2")[0].src= dice1[j];