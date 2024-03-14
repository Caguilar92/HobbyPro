<script setup>
/*TODO: import database setup stuff*/
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
/*TODO: create a mock "strut" for database referances - learn to spell referances*/

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
            <!--Accept specific image formats-->
            <b-form-file accept=".jpg, .png, .gif" 
              v-model="file1"
              :state="Boolean(file1)"
              placeholder="Choose a file or drop it here..." 
              drop-placeholder="Drop file here..."></b-form-file>
            <div class="inputElement">
              <button>Create Project</button>
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