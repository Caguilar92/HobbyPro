<script setup>
import {ref} from "vue";
import {getAuth,sendPasswordResetEmail} from "firebase/auth";
import {useRouter} from 'vue-router'
let error_message = ref('');
let email = ref('');
const router = useRouter();
function submit() {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email.value)
      .then(() => {
        router.replace("/password-reset-success")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        error_message.value = errorCode
        // ..
      });
}
</script>

<template>
  <h1 class="mt-5 text-center">Hobby Pro</h1>
  <div class="justify-content-around d-flex mt-5">
    <form class="border border-lg p-5">
      <h4 class="text-center">Forgot Password</h4>
      <div class="text-center text-danger ">{{error_message}}</div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div class="text-center">
        <button @click.prevent="submit"  class="btn btn-primary">Submit</button>
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