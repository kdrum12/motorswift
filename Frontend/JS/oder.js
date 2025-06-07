// assets/js/order.js
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const vehicleId = params.get("id");

  if (!vehicleId) {
    alert("No vehicle selected.");
    window.location.href = "vehicles.html";
    return;
  }

  // Fetch vehicle details
  fetch(`backend/api/vehicles.php?id=${vehicleId}`)
    .then(res => res.json())
    .then(vehicle => {
      document.getElementById("vehicle_id").value = vehicle.id;
      document.getElementById("vehicle-name").textContent = vehicle.name;
      document.getElementById("vehicle-type").textContent = `Type: ${vehicle.type}`;
      document.getElementById("vehicle-price").textContent = `$${vehicle.price}`;
      document.getElementById("vehicle-image").src = `uploads/${vehicle.image}`;
    });

  // Submit order
  document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("backend/api/order.php", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(response => {
      alert("Booking successful!");
      window.location.href = "vehicles.html";
    })
    .catch(err => {
      alert("Error booking vehicle.");
      console.error(err);
    });
  });
});
