import{ createWebHistory,createRouter } from "vue-router";
import HomePage from './components/HomePage.vue'
import LoginForm from './components/LoginForm.vue';
import SignupForm from './components/SignupForm.vue';
const routes=[
    {
        name:'HomePage',
        path:'/',
        component:HomePage
    },
    {
        name:'SignupForm',
        path:'/signup',
        component:SignupForm
    },
    {
        name:'LoginForm',
        path:'/login',
        component:LoginForm
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;
