// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  var data = {};

  // Loop through each textbox group
  var textboxGroups = document.querySelectorAll(".textbox-group");
  textboxGroups.forEach(function (textboxGroup, index) {
    var textbox = textboxGroup.querySelector('input[type="text"]');
    var checkbox = textboxGroup.querySelector('input[type="checkbox"]');

    var textboxValue = textbox.value;
    var checkboxValue = checkbox.checked;

    // Add the textbox value and checkbox value to the data object
    data["textbox" + (index + 1)] = {
      value: textboxValue,
      checked: checkboxValue,
    };
  });

  // Send the data to the second page using URL parameters
  var url = "page2.html?data=" + encodeURIComponent(JSON.stringify(data));
  window.location.href = url;
}

// Add event listener to the form for submission
var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", submitForm);
