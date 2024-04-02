<script setup>
import {ref} from "vue";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";


let projectName = ref('');
let startDate = ref('');
let deadline = ref('');
let description = ref('');
const firestore = getFirestore(); 

// saves a new Project to the data base
async function saveToFireStore(event) {
  event.preventDefault();//doesn't work without this.
  try {
    //gets a referance of the collection "Projects"
    const projectsCollectionRef = collection(firestore, "Projects");

    // Add a new document to the "Projects" collection with auto-generated ID
    const docRef = await addDoc(projectsCollectionRef, {
      projectName: projectName.value,
      startDate: startDate.value,
      deadline: deadline.value,
      description: description.value,
    });
    // adds a subcollection "Stages" using docRef
    // then adds an intial stage called "intial stage"
    const stagesCollectionRef = collection(docRef, "Stages");
    await addDoc(stagesCollectionRef, { stageName: "Initial Stage", isDone: false });

    location.reload();
    console.log("Document written with ID: ", docRef.id);
    console.log("Project uploaded:", projectName.value);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}


//end of scripts 
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
            <input v-model = "deadline" type="date" name="testDeadline" id="testDeadline">
            <!-- <input type="text" name="testTagName" id="testTagName"> -->
            <button id="addTag-btn" name="addTag-btn" type="button" class="btn btn-secondary">Add Tags +</button>
          </div>
          <div class="inputElementThree">
            <textarea v-model = "description" placeholder="Add a description or some helpful notes" rows="6"></textarea>
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
  border: 2px solid #E6E6E6;
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