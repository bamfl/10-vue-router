import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login'
import Forget from '@/views/Forget'
import Mail from '@/views/Mail'
import Dashboard from '@/views/Dashboard'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/login', component: Login, alias: '/' },
		{ path: '/forget', component: Forget },
		{ path: '/mail', component: Mail },
		{ path: '/dashboard', component: Dashboard }
	],
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
})