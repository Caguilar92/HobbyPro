<script setup>
import {onMounted, ref} from "vue";
import {getStorage,ref as sRef,uploadBytes,listAll,getDownloadURL} from "firebase/storage";
import {getAuth} from "firebase/auth";


const storage = getStorage();//storage root reference
const auth = getAuth();
let selectedFile = ref(null);
let folderName = ref('');
let fileInput = ref(null);
let imageURLs= ref([]);
let folderNames = ref([]);
let imageNames =ref([]);
let isLoading = ref(true);
let rootPath = auth.currentUser.uid + "/";
let currentDirectoryStack = ref([rootPath])


function uploadFile(e) {
  e.preventDefault();

  if(selectedFile.value != null) {
    console.log(selectedFile.value.name)
    isLoading.value = true;
    let pathURL = currentDirectoryStack.value[currentDirectoryStack.value.length-1] + selectedFile.value.name;
    const storageRef = sRef(storage,pathURL)
    uploadBytes(storageRef,selectedFile.value).then((snapshot)=> {
      location.reload();
      console.log("UPLOADED FILE Successfully")
    }).catch((error)=> {
      console.log("error: something wen wrong")//handle  any errors here
    })
  }

}

 function createNewFolder(e) {
   e.preventDefault();



   if(folderName.value.length === 0 || folderName.value.trim().length === 0) {
     folderName.value = "folder/"
   }

   isLoading.value = true;
   let pathURL = currentDirectoryStack.value[currentDirectoryStack.value.length - 1] + folderName.value + "/folder.ghost";
   const storageRef = sRef(storage, pathURL)

   uploadBytes(storageRef, selectedFile.value).then((snapshot) => {
     location.reload();
     isLoading.value = false;
     console.log("UPLOADED FILE Successfully")
   }).catch((error) => {
     console.log("error: something wen wrong")
   })

}
function getFileType(index) {
  let name = imageNames.value[index];
  if (name.endsWith(".pdf")) {
    return 'pdf';
  } else {
    return 'image';
  }
}

function handleFile(event) {
  const file = event.target.files[0];


  if(file){
    selectedFile.value = file;

  } else {
    fileInput.value = null;
    selectedFile.value = null;
  }

}

async function getFiles() {
  isLoading.value = true;
   const storageRef = sRef(storage,auth.currentUser.uid)
   listAll(storageRef)
      .then((result) => {
        result.prefixes.map((folder) => {
          if(!folder.name.endsWith(".ghost")) {
            folderNames.value.push(folder.name);
          }
        })
        result.items.map((item) => {
          imageNames.value.push(item.name)
          getDownloadURL(item)
              .then((url) => {
                  imageURLs.value.push(url)
          });

        })
        isLoading.value = false;})



}





onMounted(()=> {
  getFiles()
})
</script>

<template>
  <div class="container-fluid">
   <div class="row">
     <div class="col-6 ">
       <div class="library_formatting">
         <div class="dropdown">
           <button class="dropbtn">Library</button>
           <div class="dropdown-content">
             <a href="#">Action One</a>
             <a href="#">Action One</a>
           </div>
         </div>
       </div>
     </div>
     <div class="col-6 align-content-center">
             <div class="libraryInfo">
               <div class="libraryItems">

                 <button class="btn btn-secondary">Filter</button>
                 <button class="btn btn-secondary">Sort</button>
               </div>
             </div>
     </div>
   </div>
  </div>
  <hr class="m-0">








  <div class="modal fade" id="create-folder-modal" tabindex="-1" aria-labelledby="create-folder-modal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">New Folder</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="folder-name" class="col-form-label">Name:</label>
              <input v-model="folderName"   type="text" class="form-control" id="folder-name">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click="createNewFolder" type="button" data-bs-dismiss="modal" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>


  <div class="container-fluid mt-5 ">
    <div class="row ">
      <div class="col-sm-12  col-md-6" >
        <input class="form-control " type="file" accept="image/jpeg,image/png,application/pdf" id="item-file-input" v-bind="fileInput" @change="handleFile">
      </div>
      <div class="mt-2">
        <button @click="uploadFile" type="button" class="btn btn-primary">Upload</button>
        <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#create-folder-modal">New folder +</button>

      </div>
  </div>
  </div>


<div class="d-flex justify-content-center align-items-center">
  <div v-show="isLoading" class="spinner-border " role="status">

  </div>
</div>


  <div class="container mt-5" v-show="!isLoading">
    <div id="folders" class="row d-flex">
      <div class="image-icon col-6 col-sm-6 col-md-4 col-lg-3 text-center mt-5" v-for="(folder_name, index) in folderNames" :key="index">
        <a href="#" class="text-decoration-none text-secondary">
          <div class="btn btn-outline-secondary card-icon">
            <img class="card-img-top"  src="../assets/folder-icon.png" alt="Image icon" width="100" height="100">
            <div class="card-body">
              <div class="badge-container">
                <div class="badge text-black text-wrap text-break" style="width: 6rem;">
                  {{ folder_name }}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

<!--    files ----------------------------------------------------------------------------------------->
    <div id="files" class="row d-flex">
      <div class="image-icon col-6 col-sm-6 col-md-4 col-lg-3 text-center mt-5" v-for="(image_url, index) in imageURLs" :key="index">
        <a :href="image_url" class="text-decoration-none text-secondary">
          <div class="btn btn-outline-secondary card-icon">
            <img class="card-img-top" v-if="getFileType(index) === 'image'" src="../assets/image_icon.png" alt="Image icon" width="100" height="100">
            <img class="card-img-top" v-else-if="getFileType(index) === 'pdf'" src="../assets/pdf-icon.png" alt="PDF icon" width="100" height="100">
            <div class="card-body">
              <div class="badge-container">
                <div class="badge text-black text-wrap text-break" style="width: 6rem;">
                  {{ imageNames[index] }}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>





</template>

<style>
@media (min-width: 576px) {
  .library_formatting {
    align-items: center;
    margin: 5px;
  }
}

.card-icon {
  height: 180px; /* Adjust the height as per your requirement */
}

.badge-container {
  height: 40px; /* Limit the height of the container */
  overflow: hidden; /* Hide any overflow */
}
.form-control {
  display: inline-block !important;
}

.folder a:hover {
  background-color: gray;
}


.dropbtn {
  background-color: white;
  color: black;
  padding: 16px;
  font-size: 2em;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: fixed;
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

.libraryItems button{
  background-color: lightgrey;
  color: black;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  float: right;
}


</style>