//code taken from https://www.emailjs.com/docs/ amended accordingly
function sendMail(contactForm) {
    emailjs.send("service_7hbihgx",
      "template_lgb6616", { //passes in the service name, template ID and template parameters
        "name": document.getElementById('cname')
        .value, //specifies template parameters
        "email": document.getElementById('cemail').value,
        "message": document.getElementById('cmessage').value
      })
      .then(
        function(response) {
          alert(
          "Thanks for contacting me! I'll reply to your message as soon as possible!"); //displays alert message when successful
          contactForm.reset();
        },
        function(error) {
          alert(
            "Unfortunately there has been an error with your submission. Please try again later!"
            ); //displays an alert message when unsuccessful
        }
      );
    return false; // To block from loading a new page
  }