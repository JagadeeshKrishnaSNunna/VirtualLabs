/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
$(document).ready(function(){
    $("#intro").click(function(){
      $(this).removeClass("item");
      $(this).addClass("active item");
      $("#list").removeClass("active item");
      $("#prereq").removeClass("active item");
      $("#faq").removeClass("active item");
      $("#faq").addClass("item");
      $("#list").addClass("item");
      $("#prereq").addClass("item");
      $("#int").show();
      $("#lis").hide();
      $("#pre").hide();
      $("#faqs").hide();
    });
      $("#list").click(function(){
      $(this).removeClass("item");
      $(this).addClass("active item");
      $("#intro").removeClass("active item");
      $("#prereq").removeClass("active item");
      $("#faq").removeClass("active item");
      $("#faq").addClass("item");
      $("#intro").addClass("item");
      $("#prereq").addClass("item");
      $("#int").hide();
      $("#lis").show();
      $("#pre").hide();
      $("#faqs").hide();
    });
      $("#prereq").click(function(){
      $(this).removeClass("item")
      $(this).addClass("active item")
      $("#list").removeClass("active item");
      $("#intro").removeClass("active item");
      $("#faq").removeClass("active item");
      $("#faq").addClass("item");
      $("#list").addClass("item");
      $("#intro").addClass("item");
      $("#int").hide();
      $("#lis").hide();
      $("#pre").show();
      $("#faqs").hide();
    });
    $("#faq").click(function(){
      $(this).removeClass("item");
      $(this).addClass("active item");
      $("#intro").removeClass("active item");
      $("#prereq").removeClass("active item");
      $("#list").removeClass("active item");
      $("#intro").addClass("item");
      $("#prereq").addClass("item");
      $("#list").addClass("item");
      $("#int").hide();
      $("#lis").hide();
      $("#pre").hide();
      $("#faqs").show();
    });
    
    $(window).scroll(function() {
      if ($(this).scrollTop()) {
          $('#toTop').fadeIn();
      } else {
          $('#toTop').fadeOut();
      }
  });
  
  $("#toTop").click(function () {
     $("html, body").animate({scrollTop: 0}, 500);
  });
  });

  function myFunction() {
    var x = document.getElementById("inputs");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction2() {
    var x = document.getElementById("outputBox");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  }

$(document).ready(function(){
  $("#st").click(function(){
        $("#outputBox").html("<div class=\"writeCode\">Loading ......</div>");
        document.f2.extra.value = "runn";
  });
});

$(document).ready(function(){
  $("#subb").click(function(){
        $("#outputBox").html("<div class=\"writeCode\">Loading ......</div>");
        document.f2.extra.value = "subb";
  });
});

  $(document).ready(function(){
    //listen for form submission
    $('#form').on('submit', function(e){
      //prevent form from submitting and leaving page
      e.preventDefault();
      let url1="compile.php";
      // AJAX 
      $.ajax({
            type: "POST", //type of submit
            cache: false, //important or else you might get wrong data returned to you
            url: url1, //destination
            datatype: "html", //expected data format from process.php
            data: $('form').serialize(), //target your form's data and serialize for a POST
            success: function(result) { // data is the var which holds the output of your process.php

                // locate the div with #result and fill it with returned data from process.php
                $('#outputBox').html(result);
            }
        });
    });

    $('#quiz').on('submit', function(e){
      //prevent form from submitting and leaving page
      e.preventDefault();
      let url1="quizProcess.php";
      // AJAX 
      $.ajax({
            type: "POST", //type of submit
            cache: false, //important or else you might get wrong data returned to you
            url: url1, //destination
            datatype: "html", //expected data format from process.php
            data: $('form').serialize(), //target your form's data and serialize for a POST
            success: function(result) { // data is the var which holds the output of your process.php

                // locate the div with #result and fill it with returned data from process.php
                $('#result').html(result);
            }
        });
    });
});