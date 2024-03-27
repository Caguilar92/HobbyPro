<script setup>
import {ref} from "vue";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {useRouter} from "vue-router";
import computeOffsets from "@popperjs/core/lib/utils/computeOffsets.js";



let firstname= ref('');
let lastname= ref('');
let email= ref('');
let password= ref('');
let confirm_password = ref('');
const firestore = getFirestore();
const auth = getAuth();
const router = useRouter();
const errorMessage = ref('');
function  createUser(event) {
 event.preventDefault();
  errorMessage.value = '';
  if(validateName(firstname.value) && validateName(lastname.value) && validatePassword(password.value,confirm_password.value)) {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          saveToFireStore();

          const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName: firstname.value + " " + lastname.value
          }).then(() => {

          }).catch((error) => {

          });

          router.replace("/login")
        })
        .catch((error) => {
          errorMessage.value = formatErrorMessage(error.code)
          password.value = '';
          confirm_password.value = '';
        });
  } else {
    setTimeout(function () {
     if(!validateName(firstname.value)) {
       errorMessage.value = "first name cannot be blank and must be an alphabetic character"
     }else if(!validateName(lastname.value)) {
       errorMessage.value ="last name cannot be blank and must be an alphabetic character"
     }else if(password.value !== confirm_password.value) {
       errorMessage.value = "passwords do not match"
     } else if(!validatePassword(password.value,confirm_password.value)) {
       errorMessage.value = "password must not be blank and must be 8-20 characters long"
     }
      password.value = '';
      confirm_password.value = '';

    },250)


  }



}
function formatErrorMessage(message) {

  return  message.substring(message.indexOf('/')+1,message.length)
}

function saveToFireStore() {
  setDoc(doc(firestore, "users", email.value), {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value
  });

}

function validatePassword(password, confirm_password) {

 let passwordRegex = /^\S{8,25}/

    return passwordRegex.test(password) && password === confirm_password;
}

function validateName(data) {
  let regex = /[a-zA-Z]+/
  return regex.test(data)
}
</script>

<template>

  <h1 class="mt-5 text-center">Hobby Pro</h1>
  <div class="justify-content-around d-flex mt-5">
    <form class="border border-lg p-5">
      <p class="text-danger text-center">{{errorMessage}}</p>
      <h4 class="text-center">Register</h4>
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
      <div class="mb-3">
        <label for="confirm-password" class="form-label">Confirm Password</label>
        <input v-model="confirm_password" type="password" class="form-control" id="confirm-password">
      </div>
      <div class="text-center mb-5">
        <router-link to="login" class="text-decoration-none">Log In</router-link>
      </div>

      <div class="text-center">
        <button @click="createUser" class="btn btn-primary">Register</button>
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