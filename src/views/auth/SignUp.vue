<template>
  
    <form class="auth-form">
      <div class="social-auth">
        <button>
          <img src="@/assets/icons/google.svg" alt="google" />
          Sign Up with Google
        </button>
        <button>
          <img src="@/assets/icons/apple.svg" alt="apple" />
          Sign Up with Apple
        </button>
      </div>
      <label for="">Email</label>
      <input type="text" name="email" v-model="email" />
      <div class="email-error">
        <p v-if="emailError">Por favor, ingrese un email válido</p>
      </div>
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password" />
      <label for="password">Confirm Password</label>
      <input type="password" name="confirmPassword" v-model="confirmPassword" />
      <div class="password-error">
        <p v-if="passwordError">Por favor, ingrese una contraseña</p>
      </div>
      <div class="password-error">
        <p v-if="confirmPasswordError">Las contraseñas no coinciden</p>
      </div>
      <button type="submit" @click="handleSignUp">Sign Up</button>
      <div class="options">
        <a href="/sign-in">Back to Sign In </a>
    </div>
    </form>
  </template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";

const email = ref("alexsorueda@gmail.com");
const password = ref("123");
const confirmPassword = ref("123");
const emailError = ref(false);
const passwordError = ref(false);
const confirmPasswordError = ref(false);

const user = useUserStore();

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password.length > 0;
};

const comparePasswords = (password, confirmPassword) => password === confirmPassword;

const validateForm = () => {
    !validateEmail(email.value)
        ? (emailError.value = true)
        : (emailError.value = false);
    !validatePassword(password.value)
        ? (passwordError.value = true)
        : (passwordError.value = false);
    !comparePasswords(password.value, confirmPassword.value)
        ? (confirmPasswordError.value = true)
        : (confirmPasswordError.value = false);
    return !emailError.value && !passwordError.value && !confirmPasswordError.value ? true : false;
};

const handleSignUp = (event) => {
  event.preventDefault();
  const formIsValid = validateForm();

  if (formIsValid) {
    const response = user.signUpWithEmailAndPassword(
      email.value,
      password.value
    );
    return response;
  } else {
    console.log("Form is not valid");
  }
};
</script>