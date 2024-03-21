<script setup>

import {getAuth,signOut} from "firebase/auth";
import {useRouter} from "vue-router";

//tester for list of projects
const projects = [
  {title: 'ninja UX Designer', id: 1, details: 'lorem', deadline: "10/24/2024" },
  {title: 'ninja Web Developer', id: 2, details: 'lorem', deadline: "11/27/2030"},
  {title: 'ninja Vue Developer', id: 3, details: 'lorem', deadline: "05/18/2027" },
]


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
    <div>
      <ul class="project-list" v-for="project in projects" :key="project.id">
        <li>
            <h3>{{ project.title }}</h3>
            <p>deadline: {{ project.deadline }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 576px) {
  .MP_formatting {
    align-items: center;
  }
}
</style>