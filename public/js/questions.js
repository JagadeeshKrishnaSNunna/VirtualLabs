function quizCorrection() {
    var count = 0;
   
    if(Quiz1.q8.value ==="Stack" ){ 
        count++;
        $("#q8").html("<code>Ha! Nice Correct Answer</code><br>");
    }
    else{
        $("#q8").html("<code>Incorrect answer.</code><br><code>Correct answer is Stack</code><br>");
    }
    var percentage = Math.round(count*10000)/8;
    document.getElementById('result').innerHTML = "Result: " + percentage/100 + "%<br>Correct: " + count + "<br>Wrong: " + (8-count);
    $("#quiz").submit(function() {
        $("#quizSub").attr('disabled', true);
    });
}