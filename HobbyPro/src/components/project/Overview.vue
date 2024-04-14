<script>
export default {
    props: {
        uid: String
    }, data(){
      return {
        
      }
    }
}
</script>

<script setup>
import {getAuth,signOut} from "firebase/auth";
import {useRouter} from "vue-router";
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';


const store = useStore();

const auth = getAuth();
const router = useRouter();
const docPath = auth.currentUser.email + "_Projects";
const project = ref('');
const stages = ref([]);




//populates project when page is loaded
onMounted(async() => {
  // Fetch project and assign it to the reactive reference
  project.value = store.state.selectedProject;
});

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
    <div class="contentInternalWrapper">
        <h1>{{ project.projectName }}</h1>
        <p>Start-Date:{{ project.startDate }}</p>
        <p>Dead-Line:{{ project.deadline }}</p>
    </div>
</template>

<style>

</style>