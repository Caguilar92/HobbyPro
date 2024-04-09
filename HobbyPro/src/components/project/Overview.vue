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
import { getAuth } from 'firebase/auth';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { ref, onMounted } from 'vue';

// this is so we can use the info in the top section
const props = defineProps({uid: String});

const auth = getAuth();
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

</script>

<template>
    <nav class="navbarTop">
    <router-link id="firstButton" :to="{ name: 'ProjectDetails', params: { uid: uid } }">Project Details</router-link>
      <router-link id="secondButton" :to="{ name: 'Overview', params: { uid: uid } }">Overview</router-link>
      <!--Stages done similar to the other links-->
      <ul v-for="stage in stages" :uid="stages.stageID">
      <li><router-link :to="{ name: 'StageDetails', params: { id: stage.stageID, stageName: stage.stageName } }">{{ stage.stageName }}</router-link></li>
      </ul>
    </nav>
    <div class="contentWrapper">
        <h1>the overview page's id is:{{ uid }}</h1>
        <p>{{ uid }}</p>
    </div>
</template>

<style>
.navbarTop {
  position: fixed;
  top: 250px;
  left: 5px;
  right: 1085px;
  display: inline;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0;
  background-color: #264653;
  border-bottom: 4px solid #2a9d8f;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  z-index: 2;
}

#firstButton {
  margin: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

#secondButton {
  margin: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.navbarTop ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbarTop ul li {
  display: inline-block;
  margin: 10px;
}

.navbarTop ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.navbarTop ul li a:hover {
  color: #ccc;
}

@media (max-width: 576) {
    .navbarTop {
        top: 105px;
    }
}
</style>