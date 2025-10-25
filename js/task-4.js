// Знаходимо форму
const form = document.querySelector('.login-form');

// Прослуховуємо подію "submit"
form.addEventListener('submit', (event) => {
  // Вимикаємо перезавантаження сторінки
  event.preventDefault();

  // Отримуємо доступ до елементів форми через властивість elements
  const { email, password } = form.elements;

  // Очищаємо пробіли по краях
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевіряємо заповнення полів
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  // Створюємо об’єкт із даними користувача
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виводимо об’єкт у консоль
  console.log(formData);

  // Очищаємо поля форми
  form.reset();
});

