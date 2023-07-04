<template>
    <h1>Recupera tu contraseña</h1>
    <form class="auth-form">

        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" autocomplete="off"/>

        <button type="submit" @click="handleForgotPassword">Recuperar</button>

        <p class="advice">
            Recibirás un email con un link para recuperar tu contraseña
        </p>
        <div class="options">
        <a href="/sign-in">Back to Sign In </a>
    </div>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";

const email = ref('');
const emailError = ref(false);

const user = useUserStore();

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validateForm = () => {
    !validateEmail(email.value)
        ? (emailError.value = true)
        : (emailError.value = false);
    return !emailError.value ? true : false;
};

const handleForgotPassword = (event) => {
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