const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// Прослуховуємо подію input
input.addEventListener('input', () => {
  // Видаляємо пробіли по краях
  const name = input.value.trim();

  // Якщо поле порожнє або тільки пробіли → Anonymous
  output.textContent = name === '' ? 'Anonymous' : name;
});
