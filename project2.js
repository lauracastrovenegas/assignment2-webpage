$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function() {
    console.log("checkbox clicked")
    if($("#receivespambutton").attr("src")=="pics/unchecked.png") {
      $("#receivespambutton").attr("src","pics/checked.png");
      $("#receivespambutton").attr("aria-label","Checked");
      $("#receivespambutton").val("y");
    } else {
      $("#receivespambutton").attr("src","pics/unchecked.png");
      $("#receivespambutton").attr("aria-label","Unchecked");
      $("#receivespambutton").val("n");
    }
  });

  // Form validation
  $("#signupbutton").click(function() {
    if($("#fn").val()=="" || $("#mi").val()=="" || $("#ln").val()=="") {
      $("#name").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    if($("#em").val()=="") {
      $("#email").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });
});


