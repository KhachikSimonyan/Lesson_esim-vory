document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.toggle-password');

  toggles.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const input = document.getElementById(targetId);
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      button.textContent = isPassword ? 'Hide' : 'Show';
    });
  });

  const password1 = document.getElementById('id_password1');
  const password2 = document.getElementById('id_password2');
  const hint = document.getElementById('password-match-hint');

  const updatePasswordHint = () => {
    if (!password1 || !password2 || !hint) return;

    if (!password2.value) {
      hint.textContent = '';
      return;
    }

    if (password1.value === password2.value) {
      hint.textContent = 'Passwords match.';
      hint.style.color = '#059669';
    } else {
      hint.textContent = 'Passwords do not match yet.';
      hint.style.color = '#dc2626';
    }
  };

  if (password1 && password2 && hint) {
    password1.addEventListener('input', updatePasswordHint);
    password2.addEventListener('input', updatePasswordHint);
  }
});
