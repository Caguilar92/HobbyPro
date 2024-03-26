<script setup>
import { onMounted } from "vue";
import {getAuth,signOut} from "firebase/auth";
import {useRouter} from "vue-router";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore"; 

//this is the database refferance - I don't know why it has to be this way but it works
const firestore = getFirestore();

//this is a class to organize the return from the database
class Project {
  constructor(name, startDate, endDate = null){
    this.projectName = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

//a project converter -- a work in progress
const projectConverter = {
  toFireStore: (project) => {
    return {
      projectName: project.projectName,
      startDate: project.startDate,
      endDate: project.endDate
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Project(data.projectName, data.startDate, data.endDate);
  }
}


// function to get data from database
async function getDocFromDatabase() {
  try {
    const querySnapshot = await getDocs(collection(firestore, 'Projects'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //this is placeholder functionallity for testing
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
    // Handle errors gracefully, you can also throw the error if you want to handle it in the calling function
  }
}


//this works!
onMounted(() => {
  getDocFromDatabase();
})
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
    

    <div id="cardTest">
      <div class="content">
        <div class="card" id="one">
          <img src="" alt="image here">
          <div class="info">
            <h3>Test Project Name</h3>
            <h5 id="startDate">March 01, 2024</h5>
            <p id="updateDate">Last updated: 03/15/2024</p>
            <p id="deadline">Deadline: 04/01/2024   Days Left: X</p>
            <p id="tagName">Tag Name</p>
            <p id="progressBar">Test progress bar layout</p>
            </div>          
        </div>
        <div class="card" id="two">
          <img src="" alt="image here">
          <div class="info">
            <h3>Test Project Name</h3>
            <h5 id="startDate">March 01, 2024</h5>
            <p id="updateDate">Last updated: 03/15/2024</p>
            <p id="deadline">Deadline: 04/01/2024   Days Left: X</p>
            <p id="tagName">Tag Name</p>
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
.content{
  display: flex;
}

.card{
  background: #EEEEEE;
  border: 2px solid #E6E6E6;
  border-radius: 25px;
  width: 300px;
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