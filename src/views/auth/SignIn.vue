<template>
  <form class="auth-form">
    <label for="">Email</label>
    <input type="text" name="email" v-model="email" />
    <div class="email-error">
      <p v-if="emailError">Por favor, ingrese un email válido</p>
    </div>
    <label for="password">Password</label>
    <input type="password" name="password" v-model="password" />
    <div class="password-error">
      <p v-if="passwordError">Por favor, ingrese una contraseña</p>
    </div>
    <div class="remember">
      <div>
        <input type="checkbox" name="checkbox" v-model="remember" />
        <span>Recuérdame</span>
      </div>
      <a href="/forgot-password">Recuperar contraseña</a>
    </div>
    <button type="submit" @click="handleSignIn">Sign In</button>
    <div class="options">
      <span> ¿No tienes una cuenta? </span>
      <a href="/sign-up"> Regístrate </a>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";

const email = ref("alex@gmail.com");
const password = ref("123");
const remember = ref(false);
const emailError = ref(false);
const passwordError = ref(false);

const user = useUserStore();

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password.length > 0;
};

const validateForm = () => {
  !validateEmail(email.value)
    ? (emailError.value = true)
    : (emailError.value = false);
  !validatePassword(password.value)
    ? (passwordError.value = true)
    : (passwordError.value = false);
  return emailError.value || passwordError.value ? false : true;
};
const handleSignIn = (event) => {
  event.preventDefault();
  const formIsValid = validateForm();

  if (formIsValid) {
    const response = user.signInwithEmailAndPassword(
      email.value,
      password.value
    );
    return response;
  } else {
    console.log("Form is not valid");
  }
};
</script>

<style>
.auth-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.auth-form a {
  color: #3182ce;
}

.auth-form label {
  font-size: 1rem;
}

.auth-form input {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  color: black;
}

.auth-form button {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  color: black;
  background-color: #ccc;
}

.auth-form button:hover {
  background-color: #ddd;
}

.auth-form button:active {
  background-color: #ccc;
}

.auth-form .remember {
  display: flex;
  justify-content: space-between;
}

.options {
  display: flex;
  justify-content: center;
}
</style>