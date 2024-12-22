(function () {
  // Initialize EmailJS with your public key
  emailjs.init("O1bgXxemJxORki1ts");
})();

window.onload = function () {
  // Add event listener to the form
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Show loading indicator
      const submitButton = document.getElementById("contact-submit");
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Send the form data using EmailJS
      emailjs
        .sendForm("service_2ghdyus", "template_xlm8s0p", this)
        .then(
          () => {
            alert("Email sent successfully!");
            // Optionally, reset the form after successful submission
            document.getElementById("contactForm").reset();
          },
          (error) => {
            alert("Failed to send email. Please try again.");
            console.error("FAILED...", error);
          }
        )
        .finally(() => {
          // Reset button state
          submitButton.textContent = "Send Message";
          submitButton.disabled = false;
        });
    });
};
