<script setup>
  import { getAuth } from "firebase/auth";
  import {ref} from "vue";
  const email = ref('uNITIAL DATA');
  
  
  // gets user info from auth 
  const auth = getAuth();
  const user = auth.currentUser()
  const userEmail = user.email;
  
  function loadDocument(file){
    // 'file' comes from the Blob or File API
    // file is saved to a sepperate folder based on user email address
    uploadBytes(storageRef, userEmail+"/"+fileName.value).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }

  
  
  
</script>
<template>
    <div class="completed">
        <h1>this is the completed projects page</h1>
        <input type="file" name="fileName" id="fileName" accept=".png, .jpeg, .gif"> 
        <button @click = "changeEmail">TEST BUTTON</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, laborum qui obcaecati blanditiis cumque sapiente distinctio animi ad neque fuga sit suscipit? Commodi, minus id ullam aperiam similique ad vero!</p>
    </div>
</template>

<style>
@media (min-width: 576px) {
  .completed {
    align-items: center;
  }
}
</style>
