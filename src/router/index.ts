import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Hello from '../components/HelloWorld.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Hello,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
