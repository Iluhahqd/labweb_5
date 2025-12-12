let currentOrder = {
    soup: null,
    main: null,
    salad_starter: null,
    drink: null,
    dessert: null
};

// Функция для добавления блюда в заказ
function addDishToOrder(dish) {
    currentOrder[dish.category] = dish;
    updateOrderDisplay();
    
    // Прокручиваем к форме заказа
    document.querySelector('.order-form-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Функция для обновления отображения заказа
function updateOrderDisplay() {
    const orderSummary = document.querySelector('.order-summary');
    
    if (!orderSummary) {
        console.error('Блок заказа не найден');
        return;
    }
    
    // Проверяем, есть ли выбранные блюда
    const selectedDishes = Object.values(currentOrder).filter(dish => dish !== null);
    
    if (selectedDishes.length === 0) {
        orderSummary.innerHTML = '<p class="no-selection">Ничего не выбрано</p>';
        return;
    }
    
    let orderHTML = '';
    let totalPrice = 0;
    
    // Отображаем каждую категорию
    const categories = [
        { key: 'soup', name: 'Суп', emptyText: 'Суп не выбран' },
        { key: 'main', name: 'Главное блюдо', emptyText: 'Главное блюдо не выбрано' },
        { key: 'salad_starter', name: 'Салат или стартер', emptyText: 'Салат не выбран' }, 
        { key: 'drink', name: 'Напиток', emptyText: 'Напиток не выбран' },
        { key: 'dessert', name: 'Десерт', emptyText: 'Десерт не выбран' }
    ];
    
    categories.forEach(category => {
        const dish = currentOrder[category.key];
        if (dish) {
            orderHTML += `
                <div class="order-category">
                    <strong>${category.name}</strong>
                    <div class="selected-dish">
                        ${dish.name} ${dish.price}Р
                    </div>
                </div>
            `;
            totalPrice += dish.price;
        } else {
            orderHTML += `
                <div class="order-category">
                    <strong>${category.name}</strong>
                    <div class="no-dish-selected">
                        ${category.emptyText}
                    </div>
                </div>
            `;
        }
    });
    
    // Добавляем общую стоимость
    orderHTML += `
        <div class="order-total">
            <strong>Стоимость заказа</strong>
            <div class="total-price">${totalPrice}Р</div>
        </div>
    `;
    
    orderSummary.innerHTML = orderHTML;
}

// Функция для сброса заказа
function resetOrder() {
    currentOrder = {
        soup: null,
        main: null,
        salad_starter: null,
        drink: null,
        dessert: null
    };
    updateOrderDisplay();
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    updateOrderDisplay();
    
    // Добавляем обработчик для кнопки сброса
    const resetBtn = document.querySelector('.reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetOrder);
    }
});