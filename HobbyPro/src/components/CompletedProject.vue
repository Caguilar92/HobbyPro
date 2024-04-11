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
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 ">
          <header>
            <h1>Completed Projects</h1>
          </header>
          <div class="dashInfo">
            <div class="dashItems">
              <label>All </label>
              <button class="btn btn-secondary">Filter</button>
              <button class="btn btn-secondary">Sort</button>
            </div>
          </div>

        </div>

      </div>
      <div class="card text-dark bg-light mb-3">
        <div class="row g-0">
          <div class="col-xs-4 col-md-3">
            <img id="imgIcon" src="/src/assets/jo-szczepanska-unsplash.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-xs-8 col-md-9">
            <div class="card-body">
              <h5 class="card-title">Project Name</h5>
              <p class="card-text">This is where the lesson learned will go</p>
              <p class="card-text"><small class="text-muted">Completed Date: April 2, 2024</small></p>
            </div>
          </div>

        </div>

      </div>

      <div class="card text-dark bg-light mb-3">
        <div class="row g-0">
          <div class="col-xs-4 col-md-3">
            <img id="imgIcon" src="/src/assets/jo-szczepanska-unsplash.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-xs-8 col-md-9">
            <div class="card-body">
              <h5 class="card-title">Project Name</h5>
              <p class="card-text">This is where the lesson learned will go</p>
              <p class="card-text"><small class="text-muted">Completed Date: April 2, 2024</small></p>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style>
@media (min-width: 576px) {
  .completed {
    align-items: center;
  }
  .flex-item-right, .flex-item-left {
    flex: 100%;
  }
}
  
.content-grid{
  display: grid;
  grid-template-rows: auto auto auto;
  grid-row-gap: 20px;
}

h1{
  text-align: left;
  padding: 10px 0 10px 20px;
  border-bottom: 3px solid #31363F;
  margin-bottom: 20px;
}
.dashInfo{
  margin-bottom: 30px;
  margin-top: 20px;
}
.dashItems{
  font-size: 15px;
}
.dashItems label{
  padding: 10px;
}
.dashItems button{
  font-size: 13px;
  font-weight: 500;
  background-color: #264653;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  float: right;
}



</style>
