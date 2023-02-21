import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    cart: 0,
    heart: true,
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
        sizes: ['XS', 'X', 'M','L'],
        description: "магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украиныпересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании "
      },
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
        sizes: ['XS', 'X', 'M','L'],
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
  }),
  actions:{
    addToCart(){
        this.cart++
        this.heart = !this.heart
    },
    // async getProducts(){
    //   const res = await fetch('https://dummyjson.com/products');
    //   const data = await res.json();
    //   this.products = data
    //   console.log(data);
    // }
  }
})