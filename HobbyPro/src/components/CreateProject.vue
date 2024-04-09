<script setup>
import {ref, computed, watch } from "vue";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
let projectName = ref('');
let startDate = ref('');
let deadline = ref('');
let description = ref('');
const firestore = getFirestore(); 
let docPath = auth.currentUser.email+"_Projects";

//sets up the router 
const router = useRouter();

//stops deadline date from being before startdate
const minDeadline = computed(() => startDate.value);
//whenever startdate changes this will set the 
//deadline to at least that date if not already.
//if deadline is after will not effect deadline
watch(startDate, (newValue) => {
  if(deadline.value < newValue){
    deadline.value = newValue;
  }
});

// saves a new Project to the data base
async function saveToFireStore(event) {
  event.preventDefault();//doesn't work without this.
  try {
    //gets a referance of the collection user projects
    const projectsCollectionRef = collection(firestore, docPath);

    // Add a new document to the collection with auto-generated ID
    const docRef = await addDoc(projectsCollectionRef, {
      projectName: projectName.value,
      startDate: startDate.value,
      deadline: deadline.value,
      description: description.value,
      isFavorite: false
    });
    // adds a subcollection "Stages" using docRef
    // then adds an intial stage called "intial stage"
    const stagesCollectionRef = collection(docRef, "Stages");
    await addDoc(stagesCollectionRef, { stageName: "Initial Stage", isDone: false });

    console.log("Document written with ID: ", docRef.id);
    console.log("Project uploaded:", projectName.value);

    //sends user to main dashboard after successful project creation
    router.push('/');

  } catch (error) {
    console.error("Error adding document: ", error);
    // erases everything and starts over
    location.reload();
  } 
  
}


//end of scripts 
</script>

<template>
  <div class="CP_formatting">
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-sm-2 p-3"></div>
        <div class="col-sm-8 p-3">
          <p class="h1 text-center">Create a New Project</p>
          <form class="row g-3">
            <div class="col-12">
              <label for="projectName" class="form-label">Project Name</label>
              <input v-model="projectName" type="text" class="form-control" id="projectName" required>
            </div>
            <div class="col-md-6">
              <label for="startDate" class="form-label">Start Date</label>
              <input v-model="startDate" type="date" class="form-control" id="startDate" required>
            </div>
            <div class="col-md-6">
              <label for="setDeadline" class="form-label">Deadline</label>
              <input v-model="deadline" type="date" class="form-control" id="setDeadline" :min="minDeadline">
            </div>
            <div class="col-12">
              <label for="tagName" class="form-label">Tag Name</label>
              <div class="input-group mb-3">
                <span></span>
                <input type="text" class="form-control" id="tagName" placeholder="example: Sewing">
                <button class="btn btn-secondary" type="addTagBtn" id="addTagBtn">Add</button>
              </div>
            </div>
            <div class="col-12">
              <label for="details" class="form-label">Comments</label>
              <textarea v-model="description" class="form-control" rows="5" id="details" name="details"
                placeholder="Add a description or some helpful notes"></textarea>
            </div>
            <div class="col-12">
              <input type="file" class="form-control" name="fileName" id="fileName"
                accept=".png, .jpeg, jpg, .gif, .pdf">
            </div>
            <div class="col-12 text-center">
              <button @click="saveToFireStore" type="submit" class="btn btn-secondary">Create Project</button>
            </div>

          </form>
        </div>
        <div class="col-sm-2 p-3"></div>
      </div>
    </div>
    <!-- <div class="space"></div>
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
            <div class="inputElementTwo">
              <label for="testDeadline">Set Deadline: </label>
              <input v-model = "deadline" type="date" name="testDeadline" id="testDeadline" :min = "minDeadline">
            </div>
            <div class="inputElementTwo">
              <input type="text" name="testTagName" id="testTagName" placeholder="Add a Tag Name...">
              <button id="addTag-btn" name="addTag-btn" type="button" class="btn btn-secondary">Add</button>
            </div>
            
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
    </div> -->

  </div>

</template>

<style scoped>
@media (min-width: 576px) {
  .CP_formatting {
    align-items: center;
  }

}
</style>