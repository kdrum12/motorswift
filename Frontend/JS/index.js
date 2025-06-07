document.getElementById("signup-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // Stop page from reloading

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Send the data to the backend
  const response = await fetch("backend/api/signup.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  const data = await response.json();
  alert(data.message); // Show success or error
});
