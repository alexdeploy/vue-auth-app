import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/auth/SignIn.vue'
import SignUpView from '../views/auth/SignUp.vue'
import ForgotPasswordView from '../views/auth/ForgotPassword.vue'
import ResetPasswordView from '../views/auth/ResetPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignInView
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUpView
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: ForgotPasswordView
    },,
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: ResetPasswordView
    }
  ]
})

export default router
