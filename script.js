function getFormvalue() {
   let form1 = document.getElementById("form1");
	
	let firstNameInput = form1.elements["fname"];

	let lastNameInput = form1.elements["lname"];
	
	let firstName = firstNameInput.value;
	let lastName = lastNameInput.value;
	alert(firstName + " " + lastName)


}
