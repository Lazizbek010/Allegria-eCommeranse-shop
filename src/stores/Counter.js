import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useCounterStore = defineStore('counter', () => {
  const cart = ref(0);
  const heart = ref(true);
  const wishlist = ref([]);
  const cartPr = ref([]);
  const products = ref([]);
  const resultProducts = ref([]);
  const allProducts = ref(
    {
      man: {
        title: 'МУЖЧИНЫ',
        products: [
          {
            title: 'Одежда',
            variants: [
              {
                title: 'Футболки',
                products: [
                  {
                    id: 1,
                    title: 'Футболка Basico',
                    name: 'Classic shirt',
                    discount: '40%',
                    img: '/images/fudbolka-basico01.jpeg',
                    images: [
                      '/images/fudbolka-basico01.jpeg',
                      '/images/fudbolka-basico02.jpeg',
                      '/images/fudbolka-basico03.jpeg',
                      '/images/fudbolka-basico04.jpeg'
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '99 000 so`m',
                      oldPrice: '150 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 2,
                    title: 'Футболка Puma',
                    name: 'Classic shirt',
                    discount: '40%',
                    img: '/images/fudbolka-puma01.jpeg',
                    images: [
                      '/images/fudbolka-puma01.jpeg',
                      '/images/fudbolka-puma02.jpeg',
                      '/images/fudbolka-puma03.jpeg'
                    ],
                    colors: ['red', 'white'],
                    price: {
                      newPrice: '190 000 so`m',
                      oldPrice: '300 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M', 'L', 'XL'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 3,
                    title: 'Футболка короткий рукав',
                    name: 'Classic shirt',
                    discount: '25%',
                    img: '/images/fudbolka-shortHand01.jpeg',
                    images: [
                      '/images/fudbolka-shortHand01.jpeg',
                      '/images/fudbolka-shortHand02.jpeg',
                      '/images/fudbolka-shortHand03.jpeg'
                    ],
                    colors: ['white', 'blue', 'green'],
                    price: {
                      newPrice: '139 990 so`m',
                      oldPrice: '250 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M', 'L'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Брюки и джинсы',
                products: [
                  {
                    id: 4,
                    title: 'Джинсы',
                    name: "Мужские брюки и джинсы",
                    discount: '10%',
                    img: '/images/djinsi01.jpeg',
                    images: [
                      '/images/djinsi01.jpeg',
                      '/images/djinsi02.jpeg',
                      '/images/djinsi03.jpeg',
                      '/images/djinsi04.jpeg'
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '200 000 so`m',
                      oldPrice: '250 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 5,
                    title: 'Трико',
                    name: "Мужские брюки и джинсы",
                    discount: '10%',
                    img: '/images/Tights01.jpeg',
                    images: [
                      '/images/Tights01.jpeg',
                      '/images/Tights02.jpeg',
                      '/images/Tights03.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '190 000 so`m',
                      oldPrice: '210 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 6,
                    title: 'Шорты Бермуды Tchibo',
                    name: "Мужские брюки и джинсы",
                    discount: '19%',
                    img: '/images/Tchibo-Bermuda-shorts01.jpeg',
                    images: [
                      '/images/Tchibo-Bermuda-shorts01.jpeg',
                      '/images/Tchibo-Bermuda-shorts02.jpeg',
                      '/images/Tchibo-Bermuda-shorts03.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '400 000 so`m',
                      oldPrice: '510 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M', 'L'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Рубашки',
                products: [
                  {
                    id: 7,
                    title: 'Рубашка Topman',
                    name: "Мужские рубашки",
                    discount: '29%',
                    img: '/images/Topman-shirt01.jpeg',
                    images: [
                      '/images/Topman-shirt01.jpeg',
                      '/images/Topman-shirt02.jpeg',
                      '/images/Topman-shirt03.jpeg',
                    ],
                    colors: ['silver', 'blue'],
                    price: {
                      newPrice: '250 000 so`m',
                      oldPrice: '300 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M', 'L'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 8,
                    title: 'Рубашка Junk Food',
                    name: 'Мужские рубашки',
                    discount: '21%',
                    img: '/images/Junk-Food-shirt01.jpeg',
                    images: [
                      '/images/Junk-Food-shirt01.jpeg',
                      '/images/Junk-Food-shirt02.jpeg',
                      '/images/Junk-Food-shirt03.jpeg'
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '320 000 so`m',
                      oldPrice: '550 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              }
            ]
          },
          {
            title: 'Обувь',
            variants: [
              {
                title: 'Туфли',
                products: [
                  {
                    id: 9,
                    title: 'туфли Basconi 310725B-YP',
                    name: 'Мужские туфли',
                    discount: '52%',
                    img: '/images/Basconi-310725B-YP01.jpeg',
                    images: [
                      '/images/Basconi-310725B-YP01.jpeg',
                      '/images/Basconi-310725B-YP02.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 11,
                    title: 'Туфли Basconi 310367B-YP',
                    name: 'Мужские туфли',
                    discount: '55%',
                    img: '/images/Туфли-Basconi-310367B-YP-01.jpeg',
                    images: [
                      '/images/Туфли-Basconi-310367B-YP-01.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Мокасины',
                products: [
                  {
                    id: 11,
                    title: 'мокасины Basconi 529B-32-631',
                    name: "Мужские мокасины",
                    discount: '33%',
                    img: '/images/мокасины-Basconi-529B-32-631-01.jpeg',
                    images: [
                      '/images/мокасины-Basconi-529B-32-631-01.jpeg',
                      '/images/мокасины-Basconi-529B-32-631-02.jpeg',
                      '/images/мокасины-Basconi-529B-32-631-03.jpeg'
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '505 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 12,
                    title: 'Слипоны Workstep',
                    name: "Мужские мокасины",
                    discount: '44%',
                    img: '/images/Слипоны-Workstep-01.jpeg',
                    images: [
                      '/images/Слипоны-Workstep-01.jpeg',
                      '/images/Слипоны-Workstep-02.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '505 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Кроссовки',
                products: [
                  {
                    id: 13,
                    title: 'Кроссовки Adidas',
                    name: "Мужские кроссовки",
                    discount: '33%',
                    img: '/images/Кроссовки-Adidas-01.jpeg',
                    images: [
                      '/images/Кроссовки-Adidas-01.jpeg',
                      '/images/Кроссовки-Adidas-02.jpeg',
                      '/images/Кроссовки-Adidas-03.jpeg',
                      '/images/Кроссовки-Adidas-04.jpeg'
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '310 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 14,
                    title: 'Кроссовки Piranha',
                    name: "Мужские кроссовки",
                    discount: '44%',
                    img: '/images/Кроссовки-Piranha-01.jpeg',
                    images: [
                      '/images/Кроссовки-Piranha-01.jpeg',
                      '/images/Кроссовки-Piranha-02.jpeg',
                      '/images/Кроссовки-Piranha-03.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '505 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 15,
                    title: 'Кроссовки SKECHERS SKLX',
                    name: "Мужские кроссовки",
                    discount: '44%',
                    img: '/images/SKECHERS-SKLX-01.jpeg',
                    images: [
                      '/images/SKECHERS-SKLX-01.jpeg',
                      '/images/SKECHERS-SKLX-02.jpeg',
                      '/images/SKECHERS-SKLX-03.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '505 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              }
            ]
          },
          {
            title: 'Аксессуары',
            variants: [
              {
                title: 'Очки',
                products: [
                  {
                    id: 16,
                    title: 'Очки солнцезащитные Tchibo',
                    name: 'Мужские очки',
                    discount: '55%',
                    img: '/images/солнцезащитные-Tchibo-01.jpeg',
                    images: [
                      '/images/солнцезащитные-Tchibo-01.jpeg',
                      '/images/солнцезащитные-Tchibo-02.jpeg',
                      '/images/солнцезащитные-Tchibo-03.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 17,
                    title: 'Очки Racers Smoke',
                    name: 'Мужские очки',
                    discount: '55%',
                    img: '/images/Очки-Racers-Smoke-01.jpeg',
                    images: [
                      '/images/Очки-Racers-Smoke-01.jpeg',
                      '/images/Очки-Racers-Smoke-02.jpeg',
                      '/images/Очки-Racers-Smoke-03.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Перчатки',
                products: [
                  {
                    id: 18,
                    title: 'Перчатки Reserved',
                    name: "Мужские перчатки",
                    discount: '93%',
                    img: '/images/Перчатки-Reserved-01.jpeg',
                    images: [
                      '/images/Перчатки-Reserved-01.jpeg',
                      '/images/Перчатки-Reserved-02.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '50 000 so`m',
                      oldPrice: '75 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 19,
                    title: 'Перчатки Calvin Klein',
                    name: "Мужские перчатки",
                    discount: '44%',
                    img: '/images/Перчатки-Calvin-Klein-01.jpeg',
                    images: [
                      '/images/Перчатки-Calvin-Klein-01.jpeg'
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '505 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Часы',
                products: [
                  {
                    id: 20,
                    title: 'Часы наручные Geoffrey Beene',
                    name: "Мужские часы",
                    discount: '33%',
                    img: '/images/Часы-Geoffrey-Beene-01.jpeg',
                    images: [
                      '/images/Часы-Geoffrey-Beene-01.jpeg',
                      '/images/Часы-Geoffrey-Beene-02.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '310 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              }
            ]
          },
          {
            title: 'Сумки',
            variants: [
              {
                title: 'Мужские сумки',
                products: [
                  {
                    id: 21,
                    title: 'Рюкзак',
                    name: 'Мужские сумки',
                    discount: '55%',
                    img: '/images/Рюкзак-01.jpeg',
                    images: [
                      '/images/Рюкзак-01.jpeg',
                      '/images/Рюкзак-02.jpeg',
                      '/images/Рюкзак-03.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 22,
                    title: 'Сумка спортивная Adidas',
                    name: 'Мужские сумки',
                    discount: '55%',
                    img: '/images/Сумка-спортивная-Adidas-01.jpeg',
                    images: [
                      '/images/Сумка-спортивная-Adidas-01.jpeg',
                      '/images/Сумка-спортивная-Adidas-02.jpeg',
                      '/images/Сумка-спортивная-Adidas-03.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              }
            ]
          },
        ]
      },
      woman: {
        title: 'ЖЕНЩИНЫ',
        products: [
          {
            title: 'Одежда',
            variants: [
              {
                title: 'Платья',
                products: [
                  {
                    id: 23,
                    title: 'Платье Ralph Lauren',
                    name: 'Женские платья',
                    discount: '40%',
                    img: '/images/Платье-Ralph-Lauren-01.jpeg',
                    images: [
                      '/images/Платье-Ralph-Lauren-01.jpeg',
                      '/images/Платье-Ralph-Lauren-02.jpeg',
                      '/images/Платье-Ralph-Lauren-03.jpeg'
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '900 000 so`m',
                      oldPrice: '1 100 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 24,
                    title: 'Платье Bespika',
                    name: 'Женские платья',
                    discount: '40%',
                    img: '/images/Платье-Bespika-01.jpeg',
                    images: [
                      '/images/Платье-Bespika-01.jpeg',
                      '/images/Платье-Bespika-02.jpeg',
                      '/images/Платье-Bespika-03.jpeg'
                    ],
                    colors: ['red', 'white'],
                    price: {
                      newPrice: '190 000 so`m',
                      oldPrice: '300 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M', 'L', 'XL'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 25,
                    title: 'Платье Escoll',
                    name: 'Женские платья',
                    discount: '95%',
                    img: '/images/Платье-Escoll-01.jpeg',
                    images: [
                      '/images/Платье-Escoll-01.jpeg',
                      '/images/Платье-Escoll-02.jpeg',
                      '/images/Платье-Escoll-03.jpeg'
                    ],
                    colors: ['white', 'blue', 'green'],
                    price: {
                      newPrice: '1 139 990 so`m',
                      oldPrice: '1 250 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M', 'L'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Верхняя одежда',
                products: [
                  {
                    id: 26,
                    title: 'Куртка Koton',
                    name: "Женская верхняя одежда",
                    discount: '10%',
                    img: '/images/djinsi01.jpeg',
                    images: [
                      '/images/Куртка-Koton-01.jpeg',
                      '/images/Куртка-Koton-02.jpeg',
                      '/images/Куртка-Koton-03.jpeg',
                      '/images/Куртка-Koton-04.jpeg'
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '200 000 so`m',
                      oldPrice: '250 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 27,
                    title: 'Пальто Cole Haan',
                    name: "Верхняя одежда",
                    discount: '54%',
                    img: '/images/Пальто-Cole-Haan-01.jpeg',
                    images: [
                      '/images/Пальто-Cole-Haan-01.jpeg',
                      '/images/Пальто-Cole-Haan-02.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '790 000 so`m',
                      oldPrice: '910 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 28,
                    title: 'Тренчкот Topshop',
                    name: "Верхняя одежда",
                    discount: '19%',
                    img: '/images/Тренчкот-Topshop-01.jpeg',
                    images: [
                      '/images/Тренчкот-Topshop-01.jpeg',
                      '/images/Тренчкот-Topshop-02.jpeg',
                      '/images/Тренчкот-Topshop-03.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '880 000 so`m',
                      oldPrice: '910 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M', 'L'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Кардиганы и свитеры',
                products: [
                  {
                    id: 29,
                    title: 'Свитер Tommy Hilfiger',
                    name: "Женские кардиганы и свитеры",
                    discount: '79%',
                    img: '/images/TСвитер-Tommy-Hilfiger-01.jpeg',
                    images: [
                      '/images/TСвитер-Tommy-Hilfiger-01.jpeg',
                      '/images/TСвитер-Tommy-Hilfiger-02.jpeg',
                      '/images/TСвитер-Tommy-Hilfiger-03.jpeg',
                    ],
                    colors: ['silver', 'blue'],
                    price: {
                      newPrice: '550 000 so`m',
                      oldPrice: '300 000 so`m'
                    },
                    sizes: ['XS', 'X', 'M', 'L'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 30,
                    title: 'Водолазка No brand',
                    name: 'Женские кардиганы и свитеры',
                    discount: '41%',
                    img: '/images/Водолазка-No-brand-01.jpeg',
                    images: [
                      '/images/Водолазка-No-brand-01.jpeg',
                      '/images/Водолазка-No-brand-02.jpeg',
                      '/images/Водолазка-No-brand-03.jpeg'
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '320 000 so`m',
                      oldPrice: '550 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              }
            ]
          },
          {
            title: 'Обувь',
            variants: [
              {
                title: 'Туфли',
                products: [
                  {
                    id: 31,
                    title: 'Туфли Vitacci',
                    name: 'Женские туфли',
                    discount: '55%',
                    img: '/images/Туфли-Vitacci-01.jpeg',
                    images: [
                      '/images/Туфли-Vitacci-01.jpeg',
                      '/images/Туфли-Vitacci-02.jpeg',
                      '/images/Туфли-Vitacci-03.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 32,
                    title: 'Туфли летние Vitacci',
                    name: 'Женские туфли',
                    discount: '35%',
                    img: '/images/Туфли-летние-Vitacci-01.jpeg',
                    images: [
                      '/images/Туфли-летние-Vitacci-01.jpeg',
                      '/images/Туфли-летние-Vitacci-02.jpeg',
                      '/images/Туфли-летние-Vitacci-03.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Мокасины',
                products: [
                  {
                    id: 33,
                    title: 'Лоферы Vitacci',
                    name: "Женские мокасины",
                    discount: '33%',
                    img: '/images/Лоферы-Vitacci-01.jpeg',
                    images: [
                      '/images/Лоферы-Vitacci-01.jpeg',
                      '/images/Лоферы-Vitacci-02.jpeg',
                      '/images/Лоферы-Vitacci-03.jpeg'
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '505 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 34,
                    title: 'Мокасины Workstep',
                    name: "Женские мокасины",
                    discount: '44%',
                    img: '/images/Мокасины-Workstep-01.jpeg',
                    images: [
                      '/images/Мокасины-Workstep-01.jpeg',
                      '/images/Мокасины-Workstep-02.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '505 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Кроссовки',
                products: [
                  {
                    id: 35,
                    title: 'кроссовки Basconi 100734BC-QM',
                    name: "Женские кроссовки",
                    discount: '33%',
                    img: '/images/кроссовки-Basconi-100734BC-QM-01.jpeg',
                    images: [
                      '/images/кроссовки-Basconi-100734BC-QM-01.jpeg',
                      '/images/кроссовки-Basconi-100734BC-QM-02.jpeg',
                      '/images/кроссовки-Basconi-100734BC-QM-03.jpeg',
                      '/images/кроссовки-Basconi-100734BC-QM-04.jpeg'
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '310 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 36,
                    title: 'Дерби Cropp',
                    name: "Женские кроссовки",
                    discount: '44%',
                    img: '/images/Дерби-Cropp-01.jpeg',
                    images: [
                      '/images/Дерби-Cropp-01.jpeg',
                      '/images/Дерби-Cropp-02.jpeg',
                      '/images/Дерби-Cropp-03.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '505 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 37,
                    title: 'Кроссовки Vitacci',
                    name: "Женские кроссовки",
                    discount: '44%',
                    img: '/images/Кроссовки-Vitacci-pink-01.jpeg',
                    images: [
                      '/images/Кроссовки-Vitacci-pink-01.jpeg',
                      '/images/Кроссовки-Vitacci-pink-02.jpeg',
                      '/images/Кроссовки-Vitacci-pink-03.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '505 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              }
            ]
          },
          {
            title: 'Аксессуары',
            variants: [
              {
                title: 'Очки',
                products: [
                  {
                    id: 38,
                    title: 'Очки Vitacci',
                    name: 'Женские очки',
                    discount: '55%',
                    img: '/images/Очки-Vitacci-01.jpeg',
                    images: [
                      '/images/Очки-Vitacci-01.jpeg',
                      '/images/Очки-Vitacci-02.jpeg',
                      '/images/Очки-Vitacci-03.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 39,
                    title: 'Очки солнцезащитные Tchibo',
                    name: 'Женские очки',
                    discount: '55%',
                    img: '/images/girl-солнцезащитные-Tchibo-01.jpeg',
                    images: [
                      '/images/girl-солнцезащитные-Tchibo-01.jpeg',
                      '/images/girl-солнцезащитные-Tchibo-02.jpeg',
                      '/images/girl-солнцезащитные-Tchibo-03.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Перчатки',
                products: [
                  {
                    id: 40,
                    title: 'Перчатки Tchibo',
                    name: "Женские перчатки",
                    discount: '93%',
                    img: '/images/Перчатки-Tchibo-01.jpeg',
                    images: [
                      '/images/Перчатки-Tchibo-01.jpeg',
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '50 000 so`m',
                      oldPrice: '75 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 41,
                    title: 'Перчатки Sela',
                    name: "Женские перчатки",
                    discount: '44%',
                    img: '/images/Перчатки-Sela-01.jpeg',
                    images: [
                      '/images/Перчатки-Sela-01.jpeg',
                      '/images/Перчатки-Sela-02.jpeg'
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '505 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              },
              {
                title: 'Часы',
                products: [
                  {
                    id: 42,
                    title: 'Часы наручные Geoffrey Beene',
                    name: "Женские часы",
                    discount: '33%',
                    img: '/images/girl-наручные-Tchibo-01.jpeg',
                    images: [
                      '/images/girl-наручные-Tchibo-01.jpeg',
                      '/images/girl-наручные-Tchibo-02.jpeg',
                      '/images/girl-наручные-Tchibo-02.jpeg'
                    ],
                    colors: ['silver', 'blue', 'green'],
                    price: {
                      newPrice: '310 000 so`m',
                      oldPrice: '750 000 so`m'
                    },
                    sizes: ['42', '43', '40'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              }
            ]
          },
          {
            title: 'Сумки',
            variants: [
              {
                title: 'Женские сумки',
                products: [
                  {
                    id: 43,
                    title: 'Сумка Vitacci',
                    name: 'Женские сумки',
                    discount: '55%',
                    img: '/images/Сумка-girl-Vitacci-01.jpeg',
                    images: [
                      '/images/Сумка-girl-Vitacci-01.jpeg',
                      '/images/Сумка-girl-Vitacci-02.jpeg',
                      '/images/Сумка-girl-Vitacci-03.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                  {
                    id: 44,
                    title: 'Сумка Michael Kors',
                    name: 'Женские сумки',
                    discount: '55%',
                    img: '/images/Сумка-Michael-Kors-01.jpeg',
                    images: [
                      '/images/Сумка-Michael-Kors-01.jpeg',
                      '/images/Сумка-Michael-Kors-02.jpeg',
                      '/images/Сумка-Michael-Kors-03.jpeg',
                    ],
                    colors: ['red', 'blue', 'green'],
                    price: {
                      newPrice: '299 000 сум so`m',
                      oldPrice: '599 000 so`m'
                    },
                    sizes: ['M', 'L', 'XL', 'XP'],
                    description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
                  },
                ]
              }
            ]
          },
        ]
      },
    }
  );


  function addToCart() {
    cart.value++
    heart.value = heart.value
  }
  async function getProducts(){
    const res = await fetch(' http://localhost:3000/products');
    const data = await res.json();
    products.value = data
  }

  return { cart, heart, wishlist, cartPr, products, resultProducts, allProducts, addToCart, getProducts };
})