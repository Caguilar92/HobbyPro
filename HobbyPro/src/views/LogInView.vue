<script setup>
import {firebaseApp} from "@/firebase_config.js";
import {ref} from "vue";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {useRouter} from 'vue-router'

const email = ref('');
const password = ref('');
const error_message = ref('');
const auth = getAuth();
const router = useRouter();
let show_spinner = ref(false);

function logIn(event) {
  event.preventDefault();
    show_spinner.value = true;
    error_message.value = '';
    setTimeout(function () {
      signInWithEmailAndPassword(auth,email.value,password.value)
          .then((userCredentials)=> {
            const user = userCredentials.user;
            router.replace('/dashboard')
          })
          .catch((error) => {
            show_spinner.value = false;
            error_message.value = formatErrorMessage(error.code);
            password.value = '';

          })
    },1000)

}

function formatErrorMessage(message) {

 return  message.substring(message.indexOf('/')+1,message.length)
}

</script>

<template>
  <h1 class="mt-5 text-center">Hobby Pro</h1>
  <div class="justify-content-around d-flex mt-5">
    <form class="border border-lg p-5">
      <h4 class="text-center">Log In</h4>
      <div class="text-center text-danger ">{{error_message}}</div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="password">
      </div>
      <div class="text-center mb-1">
        <router-link to="register" class="text-decoration-none">Register</router-link>
      </div>
      <div class="text-center mb-3 text-decoration-none">
        <router-link to="forgot-password">forgot password?</router-link>
      </div>
      <div class="text-center">
        <button v-if="!show_spinner" @click="logIn" class="btn btn-primary">Submit</button>

        <div v-else class="text-center d-flex justify-content-center">
          <button id="spinner" class="btn btn-primary" type="button" disabled>
            <span class="spinner-border" role="status" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </form>
  </div>


</template>

<style scoped>
@media (max-width: 576px) {
  .border-lg {
    border: none !important; /* Remove border on small screens */
  }
}
</style>