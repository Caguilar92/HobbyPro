<script setup>
import { onMounted, ref, computed } from "vue";
import { getAuth } from "firebase/auth";
import { useStore } from 'vuex';
//TODO: set google auth and database referances
  let auth = getAuth();
  let Email = auth.currentUser.email.toString();
  let displayName = getAuth().currentUser.displayName.toString();
  
  //splits the users name into to values by the " "
  let displayNameArray = displayName.split(" ");
  console.log(displayNameArray);

  //places the values inside of "firstName" and "lastName"
  let firstName = displayNameArray[0];
  let lastName = displayNameArray[1];
  console.log("firstName = "+ firstName);
  console.log("lastName = "+ lastName);

  //create a store reference for state saving 
  const store = useStore();

  // Allows for reference by Vue in <template> area
  const projects = ref([]);

  const docPath = auth.currentUser.email+'_Projects';

  const fetchProjects = async () => {
  await store.dispatch('fetchProjects', {docPath});
  projects. value = store.state.projects;
  };
  
  onMounted(fetchProjects);

  //get total number
  const totalProjects = computed(() => {
    return projects.value.length; // This will automatically update whenever projects.value changes.
  });

  //get total ongoing
  const totalOngoing = computed(() => {
    return projects.value.length;// this will automatically update whenever projects.value changes.
  })

  //placeholder for completedProjects
  let completedProjects = 2; //this value is going off of the dummy data in the completed projects page.

</script>



<template>
  <div class="about">
    <div class="container-fluid mt-3">
      <div class="row">
        <div id="gutter" class="col-sm-2 p-3"></div>
        <div id="profileLayout" class="col-sm-8 p-3">
          <p class="h1 text-center pb-4">Profile</p>
          <form class="row">
            <div class="col-md-4">
              <img id="imgIconProfile" src="/src/assets/jo-szczepanska-unsplash.jpg" alt="avatar" class="img-fluid">
              <button type="button" class="col-12 mt-3 btn btn-secondary btn-sm">Change Profile Image</button>
              <div class="row">
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-6">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="firstName" :value="firstName" readonly>
                </div>
                <div class="col-6">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lastName" :value="lastName" readonly>
                </div>
                <div class="col-12">
                  <label for="email" class="form-label">Email</label>
                  <input type="text" class="form-control" id="email" :value="Email" readonly>
                </div>
                <div class="row">
                  <div class="col-12 mt-2">
                  <label class="form-label">Your Statistics</label>
                  <ul class="list-unstyled">
                    <li>Total Ongoing Project: {{ totalOngoing }}</li>
                    <li>Total Completed Projects: {{ completedProjects }}</li>
                    <li>Overal Total: {{ totalProjects + 2 }}</li>
                  </ul>
                  </div>
                </div>
                
              </div>


            </div>


          </form>
        </div>
        <div id="gutter" class="col-sm-2 p-3"></div>
      </div>
    </div>

  </div>
</template>

<style>
@media (min-width: 576px) {
  .about {
    align-items: center;
  }
}

#profileLayout{
  border: 1px solid #E6E6E6;
  border-radius: 10px;
}

#imgIconProfile{
  border-radius: 50%;
  width: max-content;
  height: 200px;
}



</style>
