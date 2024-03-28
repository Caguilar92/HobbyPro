<script setup>
  import { getAuth } from "firebase/auth";
  import {ref} from "vue";
  
  
  
  // gets user info from auth 
  const auth = getAuth();
  //const user = auth.currentUser() TODO:fix, is breaking navigation within the dashboard
  //const userEmail = user.email; TODO: fix, is breaking navigation within the dashboard
  
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
    <header>
      <h1>Completed Projects</h1>
    </header>
    <div class="dashboardInfo">
      <div class="dashboardItems">
        <label>All </label>
        <label>Favorites </label>
        <button class="btn btn-secondary">Filter</button>
        <button class="btn btn-secondary">Sort</button>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 576px) {
  .completed {
    align-items: center;
  }
}
</style>
