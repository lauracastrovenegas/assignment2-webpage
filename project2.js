$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function(e) {
    e.preventDefault(); 
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
      $("#name").text("** Name:");
      $("#error-msg").removeClass("hidden");
      return;
    } else {
      $("#name").removeClass("error");
      $("#name").text("Name:");
      $("#error-msg").addClass("hidden");
    }

    if($("#em").val()=="") {
      $("#email").addClass("error");
      $("#email").text("** Email:");
      $("#error-msg").removeClass("hidden");

      return;
    } else {
      $("#email").removeClass("error");
      $("#email").text("Email:");
      $("#error-msg").addClass("hidden");
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });
});


