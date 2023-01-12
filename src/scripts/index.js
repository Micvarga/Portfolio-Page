function closeOffcanvas() {
  const element1 = document.getElementById("navButton");
  element1.classList.remove("offcanvas");
  const element2 = document.getElementById("offcanvasNavbar");
  element2.classList.remove("show");
  document.getElementById("navButton").setAttribute("aria-expanded", false);
}

(function () {
  emailjs.init("t6aJBnPEGLoexYIjb");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_k314eno", "template_e2r72ge", this).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset();
          const statusDiv = document.createElement("div");
          statusDiv.innerHTML = "Success! Your Message has been sent!";
          document.getElementById("contact-form").appendChild(statusDiv);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
