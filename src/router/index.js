import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/auth/SignIn.vue'
import SignUpView from '../views/auth/SignUp.vue'
import ForgotPasswordView from '../views/auth/ForgotPassword.vue'
import ResetPasswordView from '../views/auth/ResetPassword.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import config from '../../app.config.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: config.routes.home.url,
      name: 'home',
      component: HomeView,
      /* redirect: config.routes.auth.sign_in.url */
    },
    {
      path: config.routes.auth.base,
      component: AuthLayout,
      redirect: config.routes.auth.sign_in.url,
      children: [
        {
          path: config.routes.auth.sign_in.url,
          name: 'SignIn',
          component: SignInView
        },
        {
          path: config.routes.auth.sign_up.url,
          name: 'SignUp',
          component: SignUpView
        },
        {
          path: config.routes.auth.forgot_password.url,
          name: 'ForgotPassword',
          component: ForgotPasswordView
        },
        {
          path: config.routes.auth.reset_password.url,
          name: 'ResetPassword',
          component: ResetPasswordView
        }
      ]
    }
  ]
})

export default router
