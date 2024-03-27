<script setup>
import {onMounted, ref} from "vue";
import {getStorage,ref as sRef,uploadBytes,listAll,getDownloadURL} from "firebase/storage";
import {findShadowRoot} from "bootstrap/js/src/util/index.js";

let selectedFile = ref(null);
let fileInput = ref(null)
const storage = getStorage();//storage root reference
let imageUrls= ref([])

function uploadFile(e) {

  e.preventDefault();
  if(selectedFile.value != null) {//ensure file is not null
    const storageRef = sRef(storage,"images/" + selectedFile.value.name)//path to where file is to be stored in this case images/spider-man.png
    uploadBytes(storageRef,selectedFile.value).then((snapshot)=> {//actual function to upload files
      console.log("UPLOADED FILE Successfully")
    }).catch((error)=> {
      console.log("error: something wen wrong")//handle  any errors here
    })
  }

}
function handleFile(event) {
  const file = event.target.files[0];
  const name = event.target.files[0].name;


  if(file){
    selectedFile.value = file;//get file selected
    const fileFormat = name.split('.')[1];//gets extension
    if(fileFormat !== 'jpeg' && fileFormat !== 'jpg' && fileFormat !== 'png'){//check extension to ensure it meets requirements
                                                                              //if wrong file extension clear input and null out file
      console.log("ERROR: MUST BE AN IMAGE type")
      fileInput.value = null;
      selectedFile.value = null;
    }

  }

}

async function getImages() {
   const storageRef = sRef(storage,"images/")
   listAll(storageRef)
      .then((result) => {
        result.items.map((item) => {
          getDownloadURL(item)
              .then((url) => {
                  imageUrls.value.push(url)
          });

        })
      })



}

onMounted(()=> {
  getImages()
})
</script>

<template>
  <div class="library_formatting">
      <h1>Library</h1>
      <div class="dropdown">
        <button class="dropbtn">Library</button>
        <div class="dropdown-content">
          <a href="#">Action One</a>
          <a href="#">Action One</a>
        </div>
      </div>

      <hr>

      <div class="libraryInfo">
        <div class="libraryItems">
          <label>All </label>
          <label>Favorites </label>
          <button class="btn btn-secondary">Filter</button>
          <button class="btn btn-secondary">Sort</button>
        </div>

      </div>

    <div>
      <div v-for="(url, index) in imageUrls" :key="index">
        <div class="card" style="width: 18rem;">
          <img :src="url" alt="Image" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </div>
    </div>

  </div>
  <label for="item-image-input">File</label>
  <input type="file" id="item-file-input" v-bind="fileInput" @change="handleFile">

  <div class="mt-4">
    <button @click="uploadFile" type="button" class="btn btn-primary">Upload</button>
  </div>
</template>

<style>
@media (min-width: 576px) {
  .library_formatting {
    align-items: center;
    margin: 5px;
  }
}

.dropbtn {
  background-color: white;
  color: black;
  padding: 16px;
  font-size: 30px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: white;}

.libraryItems{
  font-size: 20px;
}
.libraryItems label{
  padding: 10px;
}
.libraryItems button{
  background-color: lightgrey;
  color: black;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  float: right;
}
main{
  margin: 25px;
}

</style>