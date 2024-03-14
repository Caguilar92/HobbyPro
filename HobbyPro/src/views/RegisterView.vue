<script setup>
import {ref} from "vue";
import {getDatabase,ref as dbref,set} from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";



let firstname= ref('');
let lastname= ref('');
let email= ref('');
let password= ref('');
const firestore = getFirestore();

function saveToFireStore(event) {
  event.preventDefault();
   //TODO: first call firebase auth to create email and password. If successful save user info to database, with email as id
  setDoc(doc(firestore, "users", email.value), {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value
  });

  //TODO: validate firstname and lastname before saving to database.

}

function validate(data) {
  return data !== null && data.length !== 0  && data.trim() !== 0
}
</script>

<template>

  <h1 class="mt-5 text-center">Hobby Pro</h1>
  <div class="justify-content-around d-flex mt-5">
    <form class="border border-lg p-5">
      <h4 class="text-center">Log In</h4>
      <div class="d-flex">
        <div class="mb-3 me-2">
          <label  for="firstname" class="form-label">First Name</label>
          <input v-model="firstname" type="text" class="form-control" id="firstname">
        </div>
        <div class="mb-3">
          <label for="lastname" class="form-label">Last Name</label>
          <input v-model='lastname' type="text" class="form-control" id="lastname">
        </div>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="password">
      </div>
      <div class="text-center mb-5">
        <router-link to="login" class="text-decoration-none">Log In</router-link>
      </div>

      <div class="text-center">
        <button @click="register" class="btn btn-primary">Register</button>
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