document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      document.getElementById('submitSuccessMessage').classList.remove('d-none');
      form.reset();
      setTimeout(() => {
        document.getElementById('submitSuccessMessage').classList.add('d-none');
      }, 4000);
    } else {
      document.getElementById('submitErrorMessage').classList.remove('d-none');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const badge = document.querySelector('.badge.bg-gradient-primary-to-secondary');
  if (badge && window.innerWidth <= 768) {
    badge.innerHTML = badge.textContent
      .split('|')
      .map(item => item.trim())
      .join('<br>');
  }
});
