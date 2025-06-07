// assets/js/main.js

// Example: Check if user is logged in by calling a backend API
async function checkLoginStatus() {
  try {
    const res = await fetch('backend/api/profile.php', {
      credentials: 'include', // send cookies if any
    });

    if (res.status === 401) {
      console.log('User is not logged in');
      // Optionally redirect to login page
      // window.location.href = 'login.html';
    } else if (res.ok) {
      const user = await res.json();
      console.log('Logged in as:', user.username);
    } else {
      console.error('Unexpected response', res.status);
    }
  } catch (err) {
    console.error('Error checking login status:', err);
  }
}

// Call on page load
checkLoginStatus();

// Example: global event listeners or helpers
document.addEventListener('DOMContentLoaded', () => {
  // You can add common listeners here
});
