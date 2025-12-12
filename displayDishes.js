// Функция для создания карточки блюда
function createDishCard(dish) {
    const dishCard = document.createElement('div');
    dishCard.className = 'dish-card';
    dishCard.setAttribute('data-dish', dish.keyword);
    
    dishCard.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" onerror="this.style.display='none'">
        <p class="price">${dish.price}Р</p>
        <p class="name">${dish.name}</p>
        <p class="weight">${dish.count}</p>
        <button class="add-btn">Добавить</button>
    `;
    
    // Добавляем обработчик клика
    dishCard.addEventListener('click', function() {
        addDishToOrder(dish);
    });
    
    return dishCard;
}

// Функция для отображения блюд категории
function displayCategoryDishes(category, dishesArray) {
    let sectionSelector;
    
    // Определяем, в какую секцию добавлять блюда
    const sectionMap = {
        'soup': '.menu-section:nth-child(1) .dishes-grid',
        'main': '.menu-section:nth-child(2) .dishes-grid',
        'salad_starter': '.menu-section:nth-child(3) .dishes-grid', 
        'drink': '.menu-section:nth-child(4) .dishes-grid',
        'dessert': '.menu-section:nth-child(5) .dishes-grid'
    };
    
    sectionSelector = sectionMap[category];
    
    const section = document.querySelector(sectionSelector);
    
    if (!section) {
        console.error('Секция не найдена:', sectionSelector);
        return;
    }
    
    // Очищаем секцию
    section.innerHTML = '';
    
    // Создаем карточки для каждого блюда
    dishesArray.forEach(dish => {
        const dishCard = createDishCard(dish);
        section.appendChild(dishCard);
    });
}

// Основная функция отображения всех блюд
function displayAllDishes() {
    // Сортируем все блюда по алфавиту
    const sortedDishes = dishes.sort((a, b) => a.name.localeCompare(b.name));
    
    // Группируем по категориям
    const soups = sortedDishes.filter(dish => dish.category === 'soup');
    const mains = sortedDishes.filter(dish => dish.category === 'main');
    const saladStarters = sortedDishes.filter(dish => dish.category === 'salad_starter'); // Исправлено
    const drinks = sortedDishes.filter(dish => dish.category === 'drink');
    const desserts = sortedDishes.filter(dish => dish.category === 'dessert');
    
    // Отображаем каждую категорию
    displayCategoryDishes('soup', soups);
    displayCategoryDishes('main', mains);
    displayCategoryDishes('salad_starter', saladStarters); 
    displayCategoryDishes('drink', drinks);
    displayCategoryDishes('dessert', desserts);
}

// Запускаем когда DOM загружен
document.addEventListener('DOMContentLoaded', displayAllDishes);