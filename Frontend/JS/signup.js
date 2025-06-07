document.getElementById("signupForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch("http://localhost/vehicle/backend/api/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    if (data.status) {
      alert(data.message || "Registration successful!");
      // Optionally redirect to login page
      window.location.href = "login.html";
    } else {
      alert(data.message || "An error occurred during registration.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    alert("Failed to connect to the server.");
  }
});
