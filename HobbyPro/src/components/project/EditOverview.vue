<script>
export default {
    props: {
        uid: String
    }, data(){
      return {
        stages: [
          {stageName: "stage_one", stageID: "2n1hb1h"},
          {stageName: "stage_two", stageID: "9cn93uv"},
          {stageName: "stage_three", stageID: "nnm956b9"}
        ]
      }
    }
}
</script>

<script setup>
import {getAuth,signOut} from "firebase/auth";
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import {useRouter} from "vue-router";
import { ref, onMounted } from 'vue';

// this is so we can use the info in the top section
const props = defineProps({uid: String});

const auth = getAuth();
const router = useRouter();
const firestore = getFirestore();
const docPath = auth.currentUser.email + "_Projects";
const docID = props.uid; 
let project = ref("");

// Fetch the document
async function getDocFromDatabase() {
  try {
    const documentSnapshot = await getDoc(doc(firestore, docPath, docID));
    if (documentSnapshot.exists()) {
      // Document exists, extract its data
      const documentData = documentSnapshot.data();
      console.log("Document data:", documentData);
      return documentData;
    } else {
      // Document does not exist
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return null;
  }
}

//populates project when page is loaded
onMounted(async () => {
  // Fetch project and assign it to the reactive reference
  project.value = await getDocFromDatabase();
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
  <div class="contentInternalWrapper">
    <header class="col-md-12 mt-3">
      <p class="h1 text-center">{{ project.projectName }}</p>
    </header>

    <div class="container-fluid">
      <div id="rowMain" class="row">
        <div class="col-md-5">
          <div class="row">
            <!-- <div class="col-md-2"></div> -->
            <div class="col-md-12">
              <img id="iconProfile" class="rounded mx-auto d-block" src="/src/assets/defaultProjectImage.png"
                alt="Card image cap">
            </div>
            <!-- <div class="col-md-2"></div> -->
          </div>
          <div class="row">
            <div class="col-md-2"></div>
            <!-- <div class="col-md-10"> -->
            <button id="changeProfileBtn" type="button" class="col-xs-12 col-md-8 btn btn-secondary btn-block mt-3">Change
              Profile Icon</button>
            <!-- </div> -->
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-2"></div>
            <!-- <div class="col-md-10"> -->
            <button id="defaultProfileBtn" type="button" class="col-md-8 btn btn-outline-secondary btn-block mt-3">Use
              Deafault Image</button>
            <!-- </div> -->
            <div class="col-md-2"></div>
          </div>

        </div>

        <div class="col-md-7 mt-3">
          <label for="projectName" class="form-label">Project Name</label>
          <input type="text" class="form-control" id="projectName" required placeholder="Current Project Name">

          <div class="row">
            <div class="col-sm-5">
              <label for="startDate" class="form-label">Start Date</label>
              <input type="date" class="form-control" id="startDate" required>
            </div>
            <div class="col-sm-7">
              <label for="deadline" class="form-label">Deadline</label>
              <input type="date" class="form-control" id="deadline" required>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-5 mt-3">
              <p>Last Update: </p>
            </div>
            <div class="col-sm-7 mt-3">
              <p>Progress: # %</p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-2">
              <p>Total Time: </p>
            </div>
            <div class="col-sm-3">
              <input type="number" class="form-control" id="hours" required>
            </div>
            <div class="col-sm-2">
              <label for="hours" class="form-label">hours</label>
            </div>
            <div class="col-sm-3">
              <input type="number" class="form-control" id="minutes" required>
            </div>
            <div class="col-sm-2">
              <label for="minutes" class="form-label">minutes</label>

            </div>

          </div>

          <div class="row">
            <div class="col-sm-12">
              <p>Tag Names </p>
              <div class="input-group mb-3">
                <span></span>
                <input v-model="tagname" type="text" class="form-control" id="tagName" list="datalistOptions"
                  placeholder="example: Sewing">
                <button class="btn btn-secondary" type="addTagBtn" id="addTagBtn">Add</button>
              </div>
            </div>
          </div>

          <div class="d-flex flex-row">
            <!-- <div class="col-sm-12"> -->
            <button id="tagButton" type="button" class="btn btn-secondary" aria-label="Close">Crochet <i
                class="bi bi-x"></i></button>
            <button id="tagButton" type="button" class="btn btn-secondary" aria-label="Close">Tag Name <i
                class="bi bi-x"></i></button>
            <!-- </div> -->
          </div>

          <div class="row">
            <div class="col-md-12 mt-3">
              <textarea class="form-control" rows="5" id="details" name="details" disabled
                placeholder="Details from Create Project Page"></textarea>
            </div>
          </div>

        </div>
        <!-- <div class="col"></div> -->

      </div>
      
      <div class="row">
        <div class="col-12 d-flex justify-content-center mt-4">
          <button id="saveBtn" type="button" class="col-md-6 btn btn-secondary mt-3" data-bs-toggle="modal"
            data-bs-target="#saveButton">Save Changes</button>

          <div class="modal fade" id="saveButton" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered" for="deleteBtn">
              <div class="modal-content">
                <div class="modal-header">
                  <p class="modal-title fs-5" id="staticBackdropLabel">Save Changes</p>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Are you sure you want to save these changes to your project?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary">Save Change</button>
                </div>
              </div>
            </div>
          </div>
          <button id="deleteBtn" type="button" class="col-md-6 btn btn-secondary mt-3" data-bs-toggle="modal"
            data-bs-target="#deleteButton">Delete Project</button>

          <div class="modal fade" id="deleteButton" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered" >
              <div class="modal-content">
                <div class="modal-header">
                  <p class="modal-title fs-5" id="staticBackdropLabel">Delete Project</p>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Are you sure you want to delete your project?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
#iconProfile{
  height: 225px;
}


#tagButton{
  margin: 3px;
}

#deleteBtn, #saveBtn{
  margin: 3px;
  width: 300px
}


#changeProfileBtn, #addTagBtn, #tagButton, #saveBtn, #deleteBtn{
  background-color: #264653;
}


</style>