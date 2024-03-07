<script setup>

import {getAuth,signOut} from "firebase/auth";
import {useRouter} from "vue-router";

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
  <h1>Main Dashboard</h1>
<button @click="log_out" class="btn btn-primary">sign out</button>
</template>

<style scoped>

</style>