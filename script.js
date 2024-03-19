function getFormvalue() {
  var form = document.getElementById("form1");

            // Get the input elements by their names
            var firstNameInput = form.elements["fname"];
            var lastNameInput = form.elements["lname"];

            // Get the values from the input elements
            var firstName = firstNameInput.value;
            var lastName = lastNameInput.value;

            // Do something with the values (for example, log them)
            alert(firstName + " " + lastName);
          


}
