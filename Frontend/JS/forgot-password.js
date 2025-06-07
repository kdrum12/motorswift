const form = document.getElementById('resetRequestForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  successMessage.textContent = '';
  errorMessage.textContent = '';

  const email = form.email.value.trim();

  if (!email) {
    errorMessage.textContent = 'Please enter your email address.';
    return;
  }

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (response.ok) {
      successMessage.textContent = data.message || 'If the email is registered, a reset link has been sent.';
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
      form.reset();
    } else {
      throw new Error(data.message || 'Failed to send reset link.');
    }
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  }
});
