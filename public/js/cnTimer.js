// console.log("aslkjdlkajsd");


// var y=setInterval(function(){
//     var d =new Date();//get the current date in this ( Mon Nov 16 2020 23:06:11 GMT+0530 (India Standard Time)) Format; 
//     var count =""+d.getDate()+d.getHours()+d.getMinutes();
//     // console.log(count);
//     if(count<=181110){
//       document.getElementById('quizd').style['pointer-events']="none";
//      document.getElementById('quizd').style.cursor= "default";
//     }

// },1000);


// var countDownDate_Link=new Date("Nov")








// Set the date we're counting down to
var countDownDate = new Date("Nov 18, 2020 12:25:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML ="The Test Link will be active  after "+days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
// document.getElementById("demo").innerHTML=  minutes+"m "+seconds+"s";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("quizd").style.visibility = "visible";
    document.getElementById("demo").style.visibility ="hidden";
  }
}, 1000);