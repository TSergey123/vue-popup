import {
  createRouter,
  createWebHistory
} from 'vue-router';
import CartList from '@/components/cart/CartList.vue';
import CatalogList from '@/components/catalog/CatalogList.vue';
import MainPage from '@/components/mainPage/MainPage.vue';



const routes = [{
    path: '/',
    name: 'main-page',
    component: MainPage,
  },
  {
    path: '/catalog-list',
    name: 'catalog-list',
    component: CatalogList,
  },
  {
    path: '/cart',
    name: 'cart-list',
    component: CartList,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;