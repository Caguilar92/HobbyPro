<script setup>
import {ref} from "vue";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, Timestamp } from "firebase/firestore";



// let projectName = ref('');
// let startDate = ref('');
// const firestore = getFirestore(); 

function saveToFireStore(event) {
  event.preventDefault();
//   setDoc(doc(firestore, "Projects", projectName.value), {
//     projectName: projectName.value,
//     startDate: Timestamp.fromDate(startDate.value),
// })

console.log("button clicked");
};




</script>

<template>
  <div class="CP_formatting">
    <h1>create project pagefhhf</h1>
    <p>Lorem ipsum</p>
  </div>
  <form name="createProject" id="createProjectForm">
        
        <div class="center">
          <h2 class="heading">Create a New Project</h2>
          <div class="inputElement">
                <label for="projectName">Project Name:  </label>
                <input type="text" name="projectName" id="projectName">
            </div>
            <div class="inputElement">
                <label for="startDate">Start Date: </label>
                <input type="date" name="startDate" id="startDate">
                <button>Deadline</button>
                <button>Add Tags +</button>
            </div>
            <div class="inputElement">
              <textarea rows="5" cols="60" placeholder="Add a description or some helpful notes"></textarea>
            </div>
            <input type="file" name="fileName" id="fileName">
            
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