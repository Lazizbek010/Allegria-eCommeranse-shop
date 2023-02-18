import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutUsView from '@/views/pages/AboutUsView.vue';
import BrandsView from '@/views/pages/BrandsView.vue';
import ProductsView from '@/views/pages/ProductsView.vue';
import AboutProductsView from '@/views/pages/AboutProductView.vue';
import CommonQuestionsView from '@/views/pages/CommonQuestionsView.vue'
import RegistrationView from '@/views/pages/RegistrationView.vue'
import WishlistView from '@/views/pages/WishlistView.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView,
    },
    {
      path: '/brands',
      name: 'brands',
      component: BrandsView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/products:id',
      name: 'about-product',
      component: AboutProductsView,
      props: true,
    },
    {
      path: '/common-questions',
      name: 'common-questions',
      component: CommonQuestionsView,
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }

})

export default router