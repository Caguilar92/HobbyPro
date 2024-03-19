<script setup>
import {ref} from "vue";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref as firebaseRef, uploadBytes } from "firebase/storage";



let projectName = ref('');
let startDate = ref('');
let fileName = ref('');
const firestore = getFirestore(); 
const storage = getStorage();
const storageRef = firebaseRef(storage, 'images');

function saveToStorage(event){
  event.preventDefault();
  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, fileName.value).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
}

function saveToFireStore(event) {
  event.preventDefault();
  setDoc(doc(firestore, "Projects", projectName.value), {
    projectName: projectName.value,
    startDate: startDate.value,
})
  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, fileName.value).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
console.log("button clicked");
};




</script>

<template>
  <div class="CP_formatting">
    <h1>create project page</h1>
    <p>Lorem ipsum</p>
  </div>
  <form name="createProject" id="createProjectForm">
        
        <div class="center">
          <h2 class="heading">Create a New Project</h2>
          <div class="inputElement">
                <label for="projectName">Project Name:  </label>
                <input v-model="projectName" type="text" name="projectName" id="projectName">
            </div>
            <div class="inputElement">
                <label for="startDate">Start Date: </label>
                <input v-model="startDate" type="date" name="startDate" id="startDate">
                <button>Deadline</button>
                <button>Add Tags +</button>
            </div>
            <div class="inputElement">
              <textarea placeholder="Add a description or some helpful notes"></textarea>
            </div>
            <input type="file" name="fileName" id="fileName" accept=".png, .jpeg, .gif"> 
            
            
            
            <div class="inputElement">
              <button @click="saveToFireStore">Create Project</button>
              <button>Cancel</button>
            </div>

        </div>
            
    </form>
  
</template>

<style scoped>
@media (min-width: 576px) {
  .CP_formatting {
    align-items: center;
  }
}
.center {
  margin: auto;
  width: 60%;
  border: 1px solid black;
  padding: 10px;
}
.heading{
  text-align: center;
}

.inputElement{
  padding: 10px;
  margin: 5px;
  text-align: left;
}
button{
  margin: 5px;
}

</style>