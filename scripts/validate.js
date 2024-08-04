function validateForm() {
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phone").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
  var phoneRegex = /^\d{10}$/; // Regular expression for 10-digit phone number validation

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!phoneRegex.test(phoneNumber)) {
    alert("Please enter a 10-digit phone number.");
    return false;
  }

  // If both email and phone number are valid
  alert("Form submitted successfully!");
  return true;
}