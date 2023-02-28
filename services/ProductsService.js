const PRODUCTS = [
    {
        id: 100,
        name: 'Смартфон Huawei nova Y61 4/64Gb,  черный',
        image: 'https://cdn.citilink.ru/AwohiLx-PtRwuP2OrWNuMXsZ7KNVbR8p6fwDfYilaWU/fit/450/450/ce/1/plain/items/1892220_v01_b.jpg',
        price: 9999,
        description: 'Описание товара, характеристики'
    },
    {
        id: 200,
        name: 'Смартфон REALME C25s 4/64Gb,  серый',
        image: 'https://cdn.citilink.ru/5NgHgv0E77BtvDtW3ewnDUrHfL5q1NWtMo16nXfDuNM/fit/450/450/ce/1/plain/items/1628173_v01_b.jpg',
        price: 8990,
        description: 'Описание товара, характеристики'
    },
    {
        id: 300,
        name: 'Смартфон INFINIX Hot 20i 4/64Gb,  X665E,  черный',
        image: 'https://cdn.citilink.ru/MU77wwS97W9Nm93ZBVlVtPnA69aberpHaQsGq2Fz8xM/fit/450/450/ce/1/plain/items/1851634_v01_b.jpg',
        price: 7490,
        description: 'Описание товара, характеристики'
    },
    {
        id: 400,
        name: 'Смартфон REALME 8 6/128Gb,  черный',
        image: 'https://cdn.citilink.ru/0vFonyRe9rbnuSI72E4K2fbOnghIV8q1HvAYIB0aMK8/fit/450/450/ce/1/plain/items/1517181_v01_b.jpg',
        price: 19900,
        description: 'Описание товара, характеристики'
    },
    {
        id: 500,
        name: 'Смартфон vivo Y35 4/64Gb,  черный агат',
        image: 'https://cdn.citilink.ru/L-H_VA29TLaCEVVTjHSKFRMZ5E3ZXXybHwG26ccXpkc/fit/450/450/ce/1/plain/items/1841078_v01_b.jpg',
        price: 14990,
        description: 'Описание товара, характеристики'
    },
    {
        id: 600,
        name: 'Смартфон Xiaomi Redmi 9A 2/32Gb,  зеленый',
        image: 'https://cdn.citilink.ru/CcPpkDi6Kw-m5VZeuN84mjQxKiT8vo6ZUBAya82QwfI/fit/450/450/ce/1/plain/items/1402198_v01_b.jpg',
        price: 5490,
        description: 'Описание товара, характеристики'
    },
    {
        id: 700,
        name: 'Смартфон Samsung Galaxy A53 5G 8/256Gb,  SM-A536E,  голубой',
        image: 'https://cdn.citilink.ru/DUSStw4WHchGSBTP_szcmlwx-6ZmwF1pIsYK13f4R3g/fit/450/450/ce/1/plain/items/1782654_v01_b.jpg',
        price: 29790,
        description: 'Описание товара, характеристики'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

