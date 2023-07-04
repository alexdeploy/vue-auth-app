import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const api = axios.create({ baseURL: 'http://127.0.0.1:5000/api' })

export const useUserStore = defineStore('user', () => {
    
    const count = ref(0)

    function signInwithEmailAndPassword(email, password) {
        try{
            const response = api.post('http://127.0.0.1:5000/api/sign-in', { email, password })
                .then(response => {
                    console.log(response)
                })
            return response
        } catch (error) {
            console.log(error)
        }
    }

    function forgotPassword(email) {
        try{
            const response = api.post('http:///127.0.0.1:5000/api/forgot-password', { email })
                .then(response => {
                    console.log(response)
                })
            return response
        } catch (error) {
            console.log(error)
        }
    }
    function signUpWithEmailAndPassword(email, password) {
        try{
            const response = api.post('http:///127.0.0.1:5000/api/sign-up', { email, password })
                .then(response => {
                    console.log(response)
                })
            return response
        } catch (error) {
            console.log(error)
        }
    }
  return { signInwithEmailAndPassword, forgotPassword, signUpWithEmailAndPassword }
})
