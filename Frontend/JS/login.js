document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const message = document.getElementById("message");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    fetch("http://localhost/VEHICLE/backend/api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          message.style.color = "green";
          message.textContent = data.message;
          // Redirect after a short delay so user can see message
          setTimeout(() => {
            window.location.href =window.location.href = "/vehicle/Frontend/HTML/vehicle.html";

          }, 1000);
        } else {
          message.style.color = "red";
          message.textContent = data.message;
        }
      })
      .catch((error) => {
        message.style.color = "red";
        message.textContent = "Something went wrong. Try again.";
        console.error(error);
      });
  });
});
