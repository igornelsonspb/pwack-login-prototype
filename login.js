const EYE_OPEN = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00008 6C7.46965 6 6.96094 6.21071 6.58587 6.58579C6.21079 6.96086 6.00008 7.46957 6.00008 8C6.00008 8.53043 6.21079 9.03914 6.58587 9.41421C6.96094 9.78929 7.46965 10 8.00008 10C8.53051 10 9.03922 9.78929 9.4143 9.41421C9.78937 9.03914 10.0001 8.53043 10.0001 8C10.0001 7.46957 9.78937 6.96086 9.4143 6.58579C9.03922 6.21071 8.53051 6 8.00008 6ZM8.00008 11.3333C7.11603 11.3333 6.26818 10.9821 5.64306 10.357C5.01794 9.7319 4.66675 8.88406 4.66675 8C4.66675 7.11595 5.01794 6.2681 5.64306 5.64298C6.26818 5.01786 7.11603 4.66667 8.00008 4.66667C8.88414 4.66667 9.73198 5.01786 10.3571 5.64298C10.9822 6.2681 11.3334 7.11595 11.3334 8C11.3334 8.88406 10.9822 9.7319 10.3571 10.357C9.73198 10.9821 8.88414 11.3333 8.00008 11.3333ZM8.00008 3C4.66675 3 1.82008 5.07333 0.666748 8C1.82008 10.9267 4.66675 13 8.00008 13C11.3334 13 14.1801 10.9267 15.3334 8C14.1801 5.07333 11.3334 3 8.00008 3Z" fill="currentColor"/>
</svg>`;

const EYE_CLOSED = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 5.5C6.61926 5.5 5.5 6.61926 5.5 8C5.5 9.38074 6.61926 10.5 8 10.5C9.38074 10.5 10.5 9.38074 10.5 8C10.5 6.61926 9.38074 5.5 8 5.5ZM6.49997 8C6.49997 7.17158 7.17158 6.49997 8 6.49997C8.82842 6.49997 9.49997 7.17158 9.49997 8C9.49997 8.82842 8.82842 9.49997 8 9.49997C7.17158 9.49997 6.49997 8.82842 6.49997 8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00018 2.16664C4.99074 2.16664 2.96368 3.96944 1.7872 5.49788L1.76599 5.52544C1.49992 5.87099 1.25487 6.18925 1.08862 6.56557C0.910584 6.96857 0.833496 7.40774 0.833496 8C0.833496 8.59219 0.910584 9.03136 1.08862 9.43437C1.25487 9.81069 1.49992 10.129 1.766 10.4745L1.7872 10.502C2.96368 12.0305 4.99074 13.8333 8.00018 13.8333C11.0095 13.8333 13.0366 12.0305 14.2131 10.502L14.2343 10.4745C14.5004 10.129 14.7454 9.81069 14.9117 9.43437C15.0898 9.03136 15.1668 8.59219 15.1668 8C15.1668 7.40774 15.0898 6.96857 14.9117 6.56557C14.7454 6.18925 14.5004 5.87099 14.2343 5.52543L14.2131 5.49788C13.0366 3.96944 11.0095 2.16664 8.00018 2.16664ZM2.57964 6.10784C3.66592 4.69659 5.43373 3.16664 8.00018 3.16664C10.5666 3.16664 12.3345 4.69659 13.4207 6.10784C13.7131 6.48768 13.8843 6.71469 13.997 6.96966C14.1023 7.208 14.1668 7.49926 14.1668 8C14.1668 8.50073 14.1023 8.792 13.997 9.03033C13.8843 9.28525 13.7131 9.51225 13.4207 9.89209C12.3345 11.3034 10.5666 12.8333 8.00018 12.8333C5.43373 12.8333 3.66592 11.3034 2.57964 9.89209C2.28726 9.51225 2.11599 9.28525 2.00333 9.03033C1.89805 8.792 1.8335 8.50073 1.8335 8C1.8335 7.49926 1.89805 7.208 2.00333 6.96966C2.11599 6.71469 2.28725 6.48768 2.57964 6.10784Z" fill="currentColor"/>
<path d="M1.91992 1.92L14.0799 14.08" stroke="currentColor"/>
</svg>`;

const GOOGLE_LOGO = `<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
<path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
<path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
<path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
<path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
</svg>`;

const eyeIconEl = document.getElementById('eyeIcon');
const googleIconEl = document.querySelector('.icon-google');
eyeIconEl.innerHTML = EYE_OPEN;
googleIconEl.innerHTML = GOOGLE_LOGO;

// ---------- password show/hide ----------
const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('togglePassword');
let passwordVisible = false;

toggleBtn.addEventListener('click', () => {
  passwordVisible = !passwordVisible;
  passwordInput.type = passwordVisible ? 'text' : 'password';
  eyeIconEl.innerHTML = passwordVisible ? EYE_CLOSED : EYE_OPEN;
  toggleBtn.setAttribute('aria-label', passwordVisible ? 'Скрыть пароль' : 'Показать пароль');
});

// ---------- validation (демонстрация error-состояния из design-system/components/input.md) ----------
const form = document.getElementById('loginForm');
const emailField = document.getElementById('emailField');
const passwordField = document.getElementById('passwordField');
const emailInput = document.getElementById('email');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setFieldError(fieldEl, hasError) {
  fieldEl.classList.toggle('has-error', hasError);
}

emailInput.addEventListener('input', () => setFieldError(emailField, false));
passwordInput.addEventListener('input', () => setFieldError(passwordField, false));

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailValid = EMAIL_RE.test(emailInput.value.trim());
  const passwordValid = passwordInput.value.length > 0;

  setFieldError(emailField, !emailValid);
  setFieldError(passwordField, !passwordValid);

  if (emailValid && passwordValid) {
    alert('Вход выполнен (демо-экран без бэкенда)');
  }
});

document.getElementById('googleBtn').addEventListener('click', () => {
  alert('Авторизация через Google (демо-экран без бэкенда)');
});
