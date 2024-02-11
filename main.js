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



  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
