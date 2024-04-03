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

          <div class="content-grid">
            <div class="cardElement">
              <div class="card-grid">
                <div class="cardImage">
                  <img src="" alt="image here">
                </div>
                <div class="tagarea">
                  <button id="tagName" :disabled>Tag Name</button>
                </div>
                <div class="cardInfo">
                  <h3>Test Completed Project</h3>
                  <h5>Completed Date</h5>
                  <p>this some sample text. this is some sample text.</p>
                </div>
              </div>
            </div>

            <div class="cardElement">
              <div class="card-grid">
                <div class="cardImage">
                  <img src="" alt="image here">
                </div>
                <div class="tagarea">
                  <button id="tagName" :disabled>Tag Name</button>
                </div>
                <div class="cardInfo">
                  <h3>Test Completed Project</h3>
                  <h5>Completed Date</h5>
                  <p>this some sample text. this is some sample text.</p>
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
@media (min-width: 576px) {
  .completed {
    align-items: center;
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
  background-color: lightslategray;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  float: right;
}




.content-grid{
  z-index: 1;
  display: grid;
  grid-template-rows: auto auto;
}
.cardElement{
  min-width: 440px;
}
.card-grid{
  background-color: #EEEEEE;
  border-radius: 25px;
  border: 2px solid #E6E6E6;
  display: grid;
  grid-template-columns: minmax(0, 300px) auto 100px ;
  grid-template-rows: 200px;
  grid-template-areas: 
  "image info tagarea"
}

.cardImage{
  grid-area: image;
  background-color: slategrey;
  border-radius: 25px 0 0 25px;
}

.cardInfo{
  grid-area: info;
  padding: 20px;
}

#tagName{
  grid-area: tagarea;
  background-color: lightslategray;
  border: 2px solid #E6E6E6;
  border-radius: 50px;
  text-align: center;
  padding: 3px 10px;
  cursor: default;
  margin: 8px 5px 0 0;
}


}
</style>
