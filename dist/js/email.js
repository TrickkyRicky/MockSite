// This code template is from smtp.js
function sendEmail() {
  // takes in user value to apply it into the email message
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "") {
    alert("Error: input a name");
  } else if (email.search("@") === -1) {
    alert("Error: input a valid email address");
  } else if (message === "") {
    alert("Error: input a message");
  } else {
    Email.send({
      SecureToken: "016bcec6-f002-4bf4-90a0-44024eb4366a",
      To: "devrgyoung@gmail.com",
      From: "interviewsite64@gmail.com",
      Subject: "Email from test site",
      Body: `My name is ${name} <br> My email is ${email} <br> ${message}`,
    }).then((message) => {
      alert("mail sent successfully");
      $("#contact-form")[0].reset();
    });
  }
}
