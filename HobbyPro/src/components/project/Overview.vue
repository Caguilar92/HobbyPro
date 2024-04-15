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
    <header class="col-md-12 mt-3">
      <p class="h1 text-center">{{ project.projectName }}</p>
    </header>

    <div class="container-fluid">
      <div id="rowMain" class="row">
        <div class="col-2"></div>

        <div class="col-md-8 mt-3">
          <!-- <p class="h1 text-center">{{ project.projectName }}</p> -->

          <div class="row">
            <div class="col-sm-5">
              <p>Start Date: {{ project.startDate }}</p>
            </div>
            <div class="col-sm-7">
              <p>Deadline: {{ project.deadline }} Days Left:</p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-5">
              <p>Last Update: </p>
            </div>
            <div class="col-sm-7">
              <p>Progress: # %</p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-10">
              <p>Total Time: </p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <p>Tag Names: </p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <textarea class="form-control" rows="5" id="details" name="details" disabled placeholder="Details from Create Project Page"></textarea>
            </div>
          </div>

        </div>
        <div class="col-2"></div>

      </div>

  </div>
</div>
</template>

<style>

</style>