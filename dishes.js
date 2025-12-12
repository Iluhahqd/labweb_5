const dishes = [
    // Супы (6 блюд)
    {
        keyword: 'gazpacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        kind: 'veg',
        count: '350 г',
        image: 'soups/gazpacho.jpg'
    },
    {
        keyword: 'mushroom_soup',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        kind: 'veg',
        count: '330 г',
        image: 'soups/mushroom_soup.jpg'
    },
    {
        keyword: 'norwegian_soup',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        kind: 'fish',
        count: '330 г',
        image: 'soups/norwegian_soup.jpg'
    },
    {
        keyword: 'ramen_soup',
        name: 'Рамен',
        price: 375,
        category: 'soup',
        kind: 'meat', 
        count: '425 г',
        image: "soups/ramen.jpg"
    },
    {
        keyword: 'tomyum_soup',
        name: 'Том ям с креветками',
        price: 650,
        category: 'soup',
        kind: 'fish', 
        count: '500 г',
        image: "soups/tomyum.jpg"
    },
    {
        keyword: 'chicken_soup',
        name: 'Куриный суп',
        price: 330,
        category: 'soup',
        kind: 'meat',
        count: '350 г',
        image: 'soups/chicken.jpg'
    },

    // Главные блюда (6 блюд)
    {
        keyword: 'fried_potatoes',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main',
        kind: 'veg',
        count: '250 г',
        image: 'main_course/friedpotatoeswithmushrooms1.jpg'
    },
    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main',
        kind: 'meat',
        count: '310 г',
        image: 'main_course/lasagna.jpg'
    },
    {
        keyword: 'chicken_cutlets',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main',
        kind: 'meat',
        count: '280 г',
        image: 'main_course/chickencutletsandmashedpotatoes.jpg'
    },
    {
        keyword: 'fishrice',
        name: 'Рыбная котлета с рисом и спаржей',
        price: 320,
        category: 'main',
        kind: 'fish', 
        count: '270 г',
        image: 'main_course/fishrice.jpg'
    },
    {
        keyword: 'pizza',
        name: 'Пицца Маргарита',
        price: 450,
        category: 'main',
        kind: 'veg', 
        count: '470 г',
        image: 'main_course/pizza.jpg'
    },
    {
        keyword: 'shrimppasta',
        name: 'Паста с креветками',
        price: 340,
        category: 'main',
        kind: 'fish',
        count: '280 г',
        image: 'main_course/shrimppasta.jpg'
    },

    // Салаты и стартеры (6 блюд)
    {
        keyword: 'tuna_salad',
        name: 'Салат с тунцом',
        price: 320,
        category: 'salad_starter',
        kind: 'fish',
        count: '280 г',
        image: 'salads_starters/tunasalad.jpg'
    },
    {
        keyword: 'caesar_salad',
        name: 'Цезарь с курицей',
        price: 350,
        category: 'salad_starter',
        kind: 'meat',
        count: '300 г',
        image: 'salads_starters/caesar.jpg'
    },
    {
        keyword: 'caprese_salad',
        name: 'Капрезе',
        price: 280,
        category: 'salad_starter',
        kind: 'veg',
        count: '250 г',
        image: 'salads_starters/caprese.jpg'
    },
    {
        keyword: 'french_fries_small',
        name: 'Картофель фри (маленький)',
        price: 150,
        category: 'salad_starter',
        kind: 'veg',
        count: '200 г',
        image: 'salads_starters/frenchfries1.jpg'
    },
    {
        keyword: 'french_fries_large',
        name: 'Картофель фри (большой)',
        price: 220,
        category: 'salad_starter',
        kind: 'veg',
        count: '350 г',
        image: 'salads_starters/frenchfries2.jpg'
    },
    {
        keyword: 'egg_salad',
        name: 'Салат с яйцом',
        price: 190,
        category: 'salad_starter',
        kind: 'veg',
        count: '230 г',
        image: 'salads_starters/saladwithegg.jpg'
    },

    // Напитки (6 блюд)
    {
        keyword: 'orange_juice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        kind: 'cold',
        count: '300 мл',
        image: 'beverages/orangejuice.jpg'
    },
    {
        keyword: 'apple_juice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        kind: 'cold',
        count: '300 мл',
        image: 'beverages/applejuice.jpg'
    },
    {
        keyword: 'carrot_juice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        kind: 'cold',
        count: '300 мл',
        image: 'beverages/carrotjuice.jpg'
    },
    {
        keyword: 'cappuccino',
        name: 'Капучино',
        price: 180,
        category: 'drink',
        kind: 'hot',
        count: '300 мл',
        image: 'beverages/cappuccino.jpg'
    },
    {
        keyword: 'green_tea',
        name: 'Зеленый чай',
        price: 100,
        category: 'drink',
        kind: 'hot',
        count: '300 мл',
        image: 'beverages/greentea.jpg' 
    },
    {
        keyword: 'black_tea',
        name: 'Черный чай',
        price: 90,
        category: 'drink',
        kind: 'hot',
        count: '300 мл',
        image: 'beverages/tea.jpg'
    },

    // Десерты (6 блюд)
    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 220,
        category: 'dessert',
        kind: 'small',
        count: '150 г',
        image: 'desserts/baklava.jpg'
    },
    {
        keyword: 'cheesecake',
        name: 'Чизкейк',
        price: 240,
        category: 'dessert',
        kind: 'medium',
        count: '180 г',
        image: 'desserts/checheesecake.jpg'
    },
    {
        keyword: 'chocolate_cake',
        name: 'Шоколадный торт',
        price: 270,
        category: 'dessert',
        kind: 'medium', 
        count: '200 г',
        image: 'desserts/chocolatecake.jpg'
    },
    {
        keyword: 'chocolate_cheesecake',
        name: 'Шоколадный чизкейк',
        price: 260,
        category: 'dessert',
        kind: 'small',
        count: '160 г',
        image: 'desserts/chocolatecheesecake.jpg'
    },
    {
        keyword: 'donuts_3',
        name: 'Пончики (3 штуки)',
        price: 410,
        category: 'dessert',
        kind: 'medium',
        count: '300 г',
        image: 'desserts/donuts2.jpg'
    },
    {
        keyword: 'donuts_6',
        name: 'Пончики (6 штук)',
        price: 650,
        category: 'dessert',
        kind: 'large',
        count: '600 г',
        image: 'desserts/donuts.jpg'
    }
];