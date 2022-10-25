
document.getElementById('endSplashButton').onclick = function()  {location.reload()};   

function joinScreen(){

document.getElementById("page-splash").style.display = "none";
document.getElementById("wordCloud").style.display = "none";
document.getElementById("joinScreen").style.display = "block";

};

/* Flag waving animation */
  var h = $('.flag').width();
  for(var i = 0; i < h; i++){
      var flagElement = $("<div class='flag-element'>");
      flagElement.css('background-position', -i + "px 0");
      flagElement.css('-webkit-animation-delay', i * 10 + 'ms');
      flagElement.css('-moz-animation-delay', i * 10 + 'ms');
      flagElement.css('-ms-animation-delay', i * 10 + 'ms');
      flagElement.css('animation-delay', i * 10 + 'ms');
      $('.flag').append(flagElement);
}

document.getElementById('join-button').onclick = function()  {joinScreen();};   

function joinScreen(){

  document.getElementById("page-splash").style.display = "none";
  document.getElementById("wordCloud").style.display = "none";
  document.getElementById("joinScreen").style.display = "block";
  // document.getElementById("header").style.display = "block";  
};

 
var azerbaijan = {name: 'Azerbaijan', flag:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-11-2048x1024.jpg"};
var turkmenistan = {name: 'Turkmenistan', flag:"https://www.countryflags.com/wp-content/uploads/turkmenistan-flag-png-large.png"};
var libya = {name: 'Libya', flag: "https://www.countryflags.com/wp-content/uploads/libya-flag-png-large.png"};
var uzbekistan = {name: 'Uzbekistan', flag: "https://www.countryflags.com/wp-content/uploads/uzbekistan-flag-png-large.png"};
var tajikistan = {name:'Tajikistan', flag:"https://www.countryflags.com/wp-content/uploads/tajikistan-flag-png-large.png"};
var kazakhstan = {name:'Kazakhstan', flag:"https://www.countryflags.com/wp-content/uploads/kazakhstan-flag-png-large.png"};
var iran = { name:'Iran', flag:"https://www.countryflags.com/wp-content/uploads/iran-flag-png-large.png"};
var iraq = {name:'Iraq', flag:"https://www.countryflags.com/wp-content/uploads/iraq-flag-png-large.png"};
var belarus = {name: 'Belarus', flag:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-16-scaled.jpg"};
var papuang = {name: 'Papua New Guinea', flag:"https://www.countryflags.com/wp-content/uploads/papua-new-guinea-flag-png-large.png"};
var eritrea = {name:'Eritrea', flag:"https://www.countryflags.com/wp-content/uploads/flag-jpg-large.jpg"};
var kyrgyzstan = {name:'Kyrgyzstan', flag:"https://www.countryflags.com/wp-content/uploads/kyrgyzstan-flag-png-large.png"}

let flags = [azerbaijan, turkmenistan, libya, uzbekistan, tajikistan,kazakhstan, iran, iraq, belarus, kyrgyzstan, eritrea, papuang];

function  joinGame() {
  document.getElementById("joinScreen").style.display = "none";
  document.getElementById("gameStart").style.display = "block"; 
  };

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    } return arra1;
};



function generateAnswer(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
var answer = generateAnswer(0, 3);

//Flag upside down or not

function flagDirection() {
 if (rand = Math.random() < 0.5)
 {
  document.getElementById('flag').classList.toggle("upside");
 }
};


function joinGameRegular() {
  document.getElementById("joinScreen").style.display = "none";
  document.getElementById("gameStart").style.display = "block";
  shuffle(flags);
  flagDirection();
}

function joinGameInverted() {
  document.getElementById("joinScreen").style.display = "none";
  document.getElementById("gameStart").style.display = "block";
  shuffle(flags);
  flagDirection();
  document.getElementById('flag').classList.add("invert");
}

var flag1 = flags[0];
var flag2 = flags[1];
var flag3 = flags[2];
var flag4 = flags[3];

var timer;
var count = 3;

function  startGameRegular(){
  flag1 = flags[0];
  flag2 = flags[1];
  flag3 = flags[2];
  flag4 = flags[3];
  document.getElementById('1-1').innerHTML =  flag1.name;  
  document.getElementById('2-1').innerHTML =  flag1.name; 
  document.getElementById('1-2').innerHTML =  flag2.name;  
  document.getElementById('2-2').innerHTML =  flag2.name; 
  document.getElementById('1-3').innerHTML =  flag3.name;  
  document.getElementById('2-3').innerHTML =  flag3.name; 
  document.getElementById('1-4').innerHTML =  flag4.name;  
  document.getElementById('2-4').innerHTML =  flag4.name;  
  document.getElementById("flag").src=  flags[answer].flag;
  document.getElementById("flag").style.display = "block";
  document.getElementById("countdown").style.display = "none";
  console.log("Game started")
};

function startGameTimer() {
  document.getElementById("instructions").style.display = "none";
  document.getElementById("countdown").style.display = "block";
  if(count === 0) {
    clearInterval(timer);
    startGameRegular();
    console.log("timer end")
    enablep1();
    enablep2();
    return;
  } else {
    $('#countdown').html(count);
    count--;
  }
}

// var timer = setInterval(function() { startGameTimer(count); }, 1000);
document.getElementById('gameStart').onclick = function()  {
  timer = setInterval(function() { startGameTimer(count);
  console.log("startTimer"+count) }, 1000);

};   

document.getElementById('2-1').onclick = function()  {p2Guessed(0);};   
document.getElementById('2-2').onclick = function()  {p2Guessed(1);};   
document.getElementById('2-3').onclick = function()  {p2Guessed(2);};   
document.getElementById('2-4').onclick = function()  {p2Guessed(3);};   

document.getElementById('1-1').onclick = function()  {p1Guessed(0);};   
document.getElementById('1-2').onclick = function()  {p1Guessed(1);};   
document.getElementById('1-3').onclick = function()  {p1Guessed(2);};   
document.getElementById('1-4').onclick = function()  {p1Guessed(3);};   


function p2Guessed(guess) {
  if (guess === answer){
    document.getElementById("confetti").style.display="block";
    setTimeout(function(){ 
      document.getElementById("confetti").style.display="none";
      document.getElementById("endSplashButton").style.display="block";
    }, 5000);
    document.getElementById('correctSound').play();
    disablep1();
    disablep2();
    document.getElementById('endSplash').classList.add("bottom");
    document.getElementById('endSplash').style.display="block";
    document.getElementById('endSplashLose').classList.add("upside");
    document.getElementById('endSplashLose').classList.add("top");
    document.getElementById('endSplashLose').style.display="block";
    document.getElementById('roundEnd').style.display="block";
    document.getElementById('gameStart').style.display="none";
    var animConfetti = bodymovin.loadAnimation({
        wrapper: confetti,
        animType: 'svg',
        loop: true,
        path: 'https://assets9.lottiefiles.com/temp/lf20_sTumYD.json'
    });
  }
  else {
    disablep2();
    enablep1();
  }
}

function p1Guessed(guess) {
  if (guess === answer){
    document.getElementById("confetti").style.display="block";
    setTimeout(function(){ 
      document.getElementById("confetti").style.display="none";
      document.getElementById("endSplashButton").style.display="block";
    }, 5000);
    document.getElementById('correctSound').play();
    disablep1();
    disablep2();
    document.getElementById('endSplash').classList.add("upside");
    document.getElementById('endSplash').classList.add("top");
    document.getElementById('endSplashLose').classList.add("bottom");
    document.getElementById('endSplashLose').style.display="block";
    document.getElementById('endSplash').style.display="block";
    document.getElementById('endSplashLose').style.display="block";
    document.getElementById('roundEnd').style.display="block";
     document.getElementById('gameStart').style.display="none";
    var animConfetti = bodymovin.loadAnimation({
        wrapper: confetti,
        animType: 'svg',
        loop: true,
        path: 'https://assets9.lottiefiles.com/temp/lf20_sTumYD.json'
    });
  }
  else 
  {
    disablep1();
    enablep2();
  }
}

function disablep1() {
  document.getElementById("1-1").disabled = true;
  document.getElementById("1-2").disabled = true;
  document.getElementById("1-3").disabled = true;
  document.getElementById("1-4").disabled = true;
};

function disablep2() {
  document.getElementById("2-1").disabled = true;
  document.getElementById("2-2").disabled = true;
  document.getElementById("2-3").disabled = true;
  document.getElementById("2-4").disabled = true;
};

function enablep1() {
  document.getElementById("1-1").disabled = false;
  document.getElementById("1-2").disabled = false;
  document.getElementById("1-3").disabled = false;
  document.getElementById("1-4").disabled = false;
};

function enablep2() {
  document.getElementById("2-1").disabled = false;
  document.getElementById("2-2").disabled = false;
  document.getElementById("2-3").disabled = false;
  document.getElementById("2-4").disabled = false;
};