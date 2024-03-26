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
    <div class="space"></div>
    <div class="formElement">
      <form name="createProject" id="createProjectForm">
        <div class="formItems">
          <h2 class="heading">Create a New Project</h2>

          <div class="inputElementOne">
            <label for="projectName">Project Name:</label>
            <input v-model="projectName" type="text" name="projectName" id="projectName" required>
          </div>
          <div class="inputElementTwo">
            <label for="startDate">Start Date: </label>
            <input v-model="startDate" type="date" name="startDate" id="startDate" required>
            <button id="selectDealine" name="selectDealine" type="button" class="btn btn-secondary">Deadline</button>
            <input type="date" name="testDeadline" id="testDeadline">
            <input type="text" name="testTagName" id="testTagName">
            <button id="addTag-btn" name="addTag-btn" type="button" class="btn btn-secondary">Add Tags +</button>
          </div>
          <div class="inputElementThree">
            <textarea placeholder="Add a description or some helpful notes" rows="6"></textarea>
          </div>
          <div class="inputElementFour">
            <input type="file" name="fileName" id="fileName" accept=".png, .jpeg, .gif">
          </div>
          <div class="inputElementFive">
            <button @click="saveToFireStore" class="btn btn-secondary">Create Project</button>
            <button class="btn btn-secondary">Cancel</button>
          </div>

        </div>
      </form>
    </div>

  </div>

</template>

<style scoped>
@media (min-width: 576px) {
  .CP_formatting {
    align-items: center;
  }
}
.space{
  padding: 20px;
}
.formElement{
  border: 2px solid black;
  border-radius: 25px;
  padding: 30px;
  margin: auto;
  width: 60%;
  font-size: 18px;
}
.formItems h2{
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
}
.formItems{
  margin: auto;
  width: 80%;
}
.inputElementOne label{
  padding-right: 5px;
  display:inline-block;
  margin: 5px 0;
}
.inputElementOne input{
  width: 63%
}
.inputElementTwo{
  display: inline;
}
.inputElementTwo label{
  padding-right: 5px;
  display:inline-block;
  margin: 15px 0;
}

.inputElementTwo button{
  margin: 0 5px 0 25px
}

.inputElementThree {
  margin: 15px 0;
}

textarea {
  font-size: 20px;
  width: 100%;
}

.inputElementFour{
  margin: auto;
  width: 100%;
  border: 1px solid black;
}
.inputElementFive{
  margin: auto;
  width: 50%;
}
.inputElementFive button{
  margin: 20px 5px;
}
</style>