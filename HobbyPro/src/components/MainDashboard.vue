<script setup>
import { onMounted, ref } from "vue";
import {getAuth,signOut} from "firebase/auth";
import {useRouter} from "vue-router";
import { collection, getDocs, getFirestore } from "firebase/firestore"; 

//this is the database refferance - I don't know why it has to be this way but it works
const firestore = getFirestore();

// Allows for reference by Vue in <template> area
const projects = ref([]);

const auth = getAuth();
const router = useRouter();
const docPath = auth.currentUser.email+'_Projects';



// Retrieve data from Firestore and populate 'projects' array
async function getDocsFromDatabase() {
  try{
    const projectsCollectionRef = collection(firestore, docPath);
    const querySnapshot = await getDocs(projectsCollectionRef);

    const projects = [];
    //fills projects array from firestore
    querySnapshot.forEach(doc => {
      const projectData = doc.data();
      // this whole using a "Project" object here may be a bad desision in the future.
      // Project object removed, passing doc.data (all data from the doc) instead. 
      // appending doc.data with doc's id before saving it.
      const projectInstance = {...projectData, uid: doc.id}
      projects.push(projectInstance);
    });
    // Return projects array
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}


//populates projects array when page is loaded. 
onMounted(async () => {
  // Fetch projects and assign them to the reactive reference
  projects.value = await getDocsFromDatabase();
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
  <div class="MP_formatting">
    <div class="container-fluid">
    <div class="row">
      <div class="col-12 ">
          <header>
            <h1>Main Dashboard</h1>
          </header>
          <div class="dashboardInfo">
            <div class="dashboardItems">
              <label>All </label>
              <!-- <label>Favorites </label> -->
              <button class="btn btn-secondary">Filter</button>
              <button class="btn btn-secondary">Sort</button>
            </div>
          </div>
      </div>
    </div>
  </div>

    <div id="cardTest" class="container-fluid mt-3">
      <!-- Loop through projects and display each project in a card -->
      <div class="content-grid">
        <div class="card" v-for="project in projects" :key="project.uid">
          <img src="" alt="image here">
          <div class="info">
            <div class="tagarea">
              <button id="tagName" :disabled>TagName</button>
            </div>
            <h3>{{ project.projectName }}</h3>
            <h5>Start Date:{{ project.startDate }}</h5>
            <p>Last updated: 03/15/2024</p>
            <p>Deadline: {{ project.endDate }}  Days Left: 40</p>
            <p id="progressBar">Test progress bar layout</p>
            <div id="projectDetailsButtonWrapper">
              <router-link id="projectDetailsButton" :to="{ name: 'ProjectDetails', params: { uid: project.uid } }">
                See Project
              </router-link>
            </div>
          </div>

        </div>

        <div class="cardHidden">
          <div class="info">
            <div class="tagarea">
              
            </div>
            <p id="progressBar">Test progress bar layout</p>
          </div>
        </div>

        <div class="cardHidden">
          <div class="info">
            <div class="tagarea">
              
            </div>
            <p id="progressBar">Test progress bar layout</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
@media (min-width: 576px) {
  .MP_formatting {
    align-items: center;
  }
}
.content-grid{
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  /* /* grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  grid-gap: 20px 20px; */
}

h1{
  text-align: left;
  padding: 10px 0 10px 20px;
  border-bottom: 3px solid #264653;
  margin-bottom: 20px;
}
.dashboardInfo{
  margin-bottom: 20px;
}
.dashboardItems{
  font-size: 15px;
}
.dashboardItems label{
  padding: 10px;
}
.dashboardItems button{
  font-size: 13px;
  font-weight: 500;
  background-color: #264653;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  float: right;
  border: none;
}


.card, .cardHidden{
  background: #f2f2f2;
  border: 2px solid #E6E6E6;
  border-radius: 25px;
  z-index: 1;
  min-width: 326px;
  max-width: 475px;
  flex: 1 1 30%;
  margin-bottom: 15px;
  margin-right: 10px;
}

.cardHidden{
  visibility: hidden;
  height: 50px;
}
.info{
  padding: 15px 20px;
}

.info h3{
  padding-top: 45px;
}

.card img{
  border: 1px solid black;
  border-radius: 25px 25px 0 0;
  height: 200px;
  background-color: gray;
}
#tagName{
  background-color: #264653;
  color: white;
  border: none;
  border-radius: 50px;
  text-align: center;
  padding: 3px 25px;
  position: absolute;
  top: 208px;
  right: 8px;
  cursor: default;
}
#progressBar{
  background-color: #264653;
  color: white;
  border-radius: 50px;
  text-align: center;
  padding: 3px;
  margin: 0px
}
#projectDetailsButton {
  text-decoration: none;
  color: black;
  background-color: #2a9d8f;
  border-radius: 50px;
  text-align: center;
  margin-bottom: 10px;
  padding: 3px 10px;
  width: 50%;
}
#projectDetailsButtonWrapper {
  margin-top: 10px;
}
#projectDetailsButton:hover {
  background-color: rgb(69, 69, 69);
  color: white;
}
</style>