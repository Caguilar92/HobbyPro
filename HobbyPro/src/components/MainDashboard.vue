<script setup>
import { onMounted, ref } from "vue";
import {getAuth,signOut} from "firebase/auth";
import {useRouter} from "vue-router";
import { collection, getDocs, getFirestore } from "firebase/firestore"; 

//this is the database refferance - I don't know why it has to be this way but it works
const firestore = getFirestore();

//this is a class to organize the return from the database
class Project {
  constructor(projectName, startDate, endDate = null){
    this.projectName = projectName;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

// Retrieve data from Firestore and populate projects array
async function getDocFromDatabase() {
  const projectsCollectionRef = collection(firestore, 'Projects');
  const querySnapshot = await getDocs(projectsCollectionRef);

  const projects = [];
  //fills projects array from firestore
  querySnapshot.forEach(doc => {
    const projectData = doc.data();
    const projectInstance = new Project(projectData.projectName, projectData.startDate, projectData.endDate);
    projects.push(projectInstance);
  });

  // Return projects array
  return projects;
}
// Declare projects as a reactive reference
const projects = ref([]);

//populates projects array when page is loaded. 
onMounted(async () => {
  // Fetch projects and assign them to the reactive reference
  projects.value = await getDocFromDatabase();
});

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
    <header>
      <h1>Main Dashboard</h1>
    </header>
    <div class="dashboardInfo">
      <div class="dashboardItems">
        <label>All </label>
        <label>Favorites </label>
        <button class="btn btn-secondary">Filter</button>
        <button class="btn btn-secondary">Sort</button>
      </div>
    </div>

    <div id="cardTest">
      <div class="content">
        <!-- Loop through projects and display each project in a card -->
        <div class="card" v-for="project in projects" :key="project.projectName"> <!--I'm not sure what "key" does but it doesnt work without it-->
          <img src="" alt="image here">
          <div class="info">
            <h3>{{ project.projectName }}</h3>
            <h5>Start Date: {{ project.startDate }}</h5>
            <p>Last updated: 03/15/2024</p>
            <p >Deadline: {{ project.endDate }}   Days Left: X</p>
            <p id = "tagName">Tag Name</p>
            <p id = progressBar>Test progress bar layout</p>
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
.content{
  display: flex;
  margin: 10px;
}

h1{
  text-align: left;
  padding: 10px 0 10px 20px;
  border-bottom: 3px solid #31363F;
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
  background-color: lightslategray;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  float: right;
}


.card{
  background: #EEEEEE;
  border: 2px solid #E6E6E6;
  border-radius: 25px;
  margin: 0 15px;
}
.info{
  padding: 15px 20px;
}
.card img{
  border: 1px solid black;
  border-radius: 25px 25px 0 0;
  height: 200px;
  background-color: lightslategray;
}
#tagName{
  background-color: lightslategray;
  border: 2px solid #E6E6E6;
  border-radius: 50px;
  position: absolute;
  top: 215px;
  right: 10px;
}
#progressBar{
  background-color: lightslategray;
  border: 2px solid #E6E6E6;
  border-radius: 50px;
  text-align: center;
  margin: 0px
}
</style>