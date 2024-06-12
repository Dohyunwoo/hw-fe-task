import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  { path: '/', redirect: "/register" },
  { path: '/:pathMatch(.*)*', redirect: "/notfound" },
  { path: "/notfound", name: "NotFoundView", component: NotFoundView },
  { path: '/register', name: 'RegisterView', component: RegisterView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
