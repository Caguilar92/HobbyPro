<script>
export default {
    props: {
        uid: String
    },
}
</script>
<script setup>
import { getAuth } from 'firebase/auth';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { ref, onMounted } from 'vue';


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

//populates projects array when page is loaded. 
onMounted(async () => {
  // Fetch projects and assign them to the reactive reference
  project.value = await getDocFromDatabase();
});

</script>

<template>
    <h1>Project Details Page</h1>
    <p>the job id is {{ uid }}{{ project.description }}</p>
</template>

<style>

</style>