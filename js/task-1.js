// Отримуємо посилання на список категорій
const categoriesList = document.querySelector('#categories');

// Знаходимо всі елементи з класом .item 
const categoriesItems = categoriesList.querySelectorAll('.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoriesItems.length}`);

// Проходимося по кожній категорії
categoriesItems.forEach(item => {
  // Знаходимо заголовок ( <h2>)
  const categoryName = item.querySelector('h2').textContent;

  // Знаходимо всі вкладені <li> усередині поточного .item
  const elementsCount = item.querySelectorAll('ul li').length;

  // Виводимо у консоль інформацію про категорію
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
