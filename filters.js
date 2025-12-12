let currentFilters = {
    soup: 'all',
    main: 'all',
    salad_starter: 'all', 
    drink: 'all',
    dessert: 'all'
};

// Функция для фильтрации блюд
function filterDishes(category, kind) {
    // Обновляем текущий фильтр
    currentFilters[category] = kind;
    
    // Получаем все блюда категории
    const categoryDishes = dishes.filter(dish => dish.category === category);
    
    // Фильтруем блюда по выбранному виду
    let filteredDishes;
    if (kind === 'all') {
        filteredDishes = categoryDishes;
    } else {
        filteredDishes = categoryDishes.filter(dish => dish.kind === kind);
    }
    
    // Сортируем отфильтрованные блюда по алфавиту
    const sortedDishes = filteredDishes.sort((a, b) => a.name.localeCompare(b.name));
    
    // Отображаем отфильтрованные блюда
    displayCategoryDishes(category, sortedDishes);
    
    // Обновляем активные кнопки фильтров
    updateActiveFilters(category, kind);
}

// Функция для обновления активных кнопок фильтров
function updateActiveFilters(category, kind) {
    // Находим все кнопки фильтров для данной категории
    const filterButtons = document.querySelectorAll(`.filter-btn[data-category="${category}"]`);
    
    // Убираем класс active со всех кнопок
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Добавляем класс active к выбранной кнопке
    const activeButton = document.querySelector(`.filter-btn[data-category="${category}"][data-kind="${kind}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Функция для инициализации фильтров
function initializeFilters() {
    // Добавляем обработчики для всех кнопок фильтров
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const kind = this.getAttribute('data-kind');
            
            // Если кликаем по уже активному фильтру - сбрасываем фильтр
            if (this.classList.contains('active') && kind !== 'all') {
                filterDishes(category, 'all');
            } else {
                filterDishes(category, kind);
            }
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
});