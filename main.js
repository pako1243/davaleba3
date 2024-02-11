document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    var colorInput = document.getElementById("colorInput");
    var changeColorBtn = document.getElementById("changeColorBtn");
  
    // Add click event listener to the button
    changeColorBtn.addEventListener("click", function() {
      // Get the value entered in the input
      var color = colorInput.value.toLowerCase();
  
      // Check if the entered color is one of the allowed colors
      var allowedColors = ["red", "blue", "green", "black", "white"];
      if (allowedColors.includes(color)) {
        // Change the background color of the body
        document.body.style.backgroundColor = color;
      } else {
        // Show an alert for invalid color
        alert("Invalid color! Please enter one of the following colors: red, blue, green, black, white");
      }
  
      // Clear the input field after changing the color
      colorInput.value = "";
    });
  });
  