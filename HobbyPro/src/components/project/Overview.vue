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
        <h1>{{ project.projectName }}</h1>
        <p>Start-Date:{{ project.startDate }}</p>
        <p>Dead-Line:{{ project.deadline }}</p>
    </div>
</template>

<style>

</style>