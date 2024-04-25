

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

const daysLeft = (deadline, startdate) => {
  if(deadline == "") {
    return "Infinite";
  }
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const beginingDate = new Date(startdate);
  const startTimeDifference = beginingDate.getTime() - today.getTime();
  const startDateDifference = Math.ceil(startTimeDifference / (1000 * 3600 * 24));
  //console.log("check start date difference: " + startDateDifference);
  if (startDateDifference >= 0) {
    const timeDifference = deadlineDate.getTime() - beginingDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    //console.log("used startdate - deadline: " + daysDifference);
    return daysDifference >= 0 ? daysDifference : 0;
  } else {
    const timeDifference = deadlineDate.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    //console.log("used today - deadline: " + daysDifference);
    return daysDifference >= 0 ? daysDifference : 0;
  }
};

//TODO: last updated value will become a vlue upon editing a projects value 
//      in edit overview or doing things in stages.
</script>

<template>
  <div class="contentInternalWrapper">
    <div class="container-fluid">
      <div class="row">
        <header class="col-md-12 mt-3">
          <p class="h1 text-center">{{ project.projectName }}</p>
        </header>
      </div>
      
      <div id="rowMain" class="row">
        <div class="col-2"></div>

        <div class="col-md-8 mt-3">
          <!-- <p class="h1 text-center">{{ project.projectName }}</p> -->

          <div class="row">
            <div class="col-sm-5">
              <p>Start Date: {{ project.startDate }}</p>
            </div>
            <div class="col-sm-7">
              <p v-if="project.deadline === ''">No Deadline</p>
              <p v-else>Deadline: {{ project.deadline }}  Days Left: {{ daysLeft(project.deadline, project.startDate) }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-5">
              <p v-if="project.lastUpdated">Last updated: {{ project.lastUpdated }}</p>
              <p v-else>No updates currently</p>
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
              <textarea class="form-control" rows="5" id="details" name="details" disabled
                placeholder="Details from Create Project Page">{{ project.description }}</textarea>
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