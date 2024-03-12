<script setup>

import {getAuth,signOut} from "firebase/auth";
import {useRouter} from "vue-router";
//TODO: import database referances
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const auth = getAuth();
const router = useRouter();
function log_out(event) {
  event.preventDefault();
  signOut(auth).then(() => {
    router.replace('/login');
  }).catch((error) => {
    console.log("something went wrong")
  });
}
</script>

<template>
  <div class="MP_formatting">
    <h1>Main Dashboard</h1>
    <button @click="log_out" class="btn btn-primary">sign out</button>
  </div>
</template>

<style scoped>
@media (min-width: 576px) {
  .MP_formatting {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>