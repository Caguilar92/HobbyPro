<script setup>
import {onMounted, ref} from "vue";
import {getStorage,ref as sRef,uploadBytes,listAll,getDownloadURL,deleteObject} from "firebase/storage";
import {getAuth} from "firebase/auth";
import {hide} from "@popperjs/core";
//get references to firebase database and authentication
const storage = getStorage();
const auth = getAuth();

//holds the values of the respective resources in order to display them.
let folders = ref([]);
let fileNames = ref([]);
let fileURLs = ref([]);

//path the current directory
let currentDirectoryStack = ref([auth.currentUser.uid + "/"]);

//variables that hold the name if folder or bytes if files  to be created, will be reset to empty text or null when upload complete or error occurs
let newFolderName = ref('');
let newFileName = ref(null);


//selected files and folders
let selectedFolderName = ref('');
//if error occurs update this message and display
let displayErrorMessage = ref(false);
let errorMessage = ref('');

//name of folder used to create a directory for a folder
let ghostFolder = '/folder.ghost';


// function uploadFile() {
//   if(selectedFile.value != null) {
//     let pathURL = currentDirectoryStack.value[currentDirectoryStack.value.length-1] + selectedFile.value.name;
//
//     const storageRef = sRef(storage,pathURL);
//     uploadBytes(storageRef,selectedFile.value).then((snapshot)=> {
//       location.reload();
//       console.log("UPLOADED FILE Successfully")
//     }).catch((error)=> {
//       console.log("error: something wen wrong")//handle  any errors here
//     })
//   }
// }

 async function createNewFolder() {

    if(isNameBlank(newFolderName.value)) {
      showErrorMessage("name cannot be blank");
      document.getElementById('close-button').click();
      return;
    }

    if(await folderExists(newFolderName.value)) {
      showErrorMessage("folder already exists");
      document.getElementById('close-button').click();
      return;
    }

   hideErrorMessage();
   let pathURL = getCurrentDirectoryPath() + newFolderName.value + ghostFolder;
   const storageRef = sRef(storage, pathURL)
   uploadBytes(storageRef, null).then((snapshot) => {
     document.getElementById('close-button').click();
     window.location.reload();
   }).catch((error) => {
     document.getElementById('close-button').click();
   })

}

async function folderExists(folderName) {
   const path = getCurrentDirectoryPath() + folderName + ghostFolder;

   const pathReference = sRef(storage,path);
  try {
    const url = await getDownloadURL(pathReference);
    return true;
  } catch (error) {
    return false;
  }

}

function setSelectedFolderName(folder_name) {
  selectedFolderName.value = folder_name;
}

async function deleteFolder() {
   const path = getCurrentDirectoryPath() + selectedFolderName.value + "/";

   const listRef = sRef(storage,path);
  await listAll(listRef)
       .then((res) => {
         res.items.forEach((itemRef) => {
           let fileDirectory = path + itemRef.name;
           let fileRef = sRef(storage,fileDirectory);
           deleteObject(fileRef);

         })
       })
  document.getElementById('delete-close-button').click();
  window.location.reload();
}

function showErrorMessage(message) {
   displayErrorMessage.value = true;
   errorMessage.value = "Error: " + message;
   newFolderName.value = '';

}

function hideErrorMessage() {
   displayErrorMessage.value = false;
   errorMessage.value = '';
}

function isNameBlank(name) {
   return name.trim().length === 0;
}

function getCurrentDirectoryPath() {
   return currentDirectoryStack.value[currentDirectoryStack.value.length-1];
}

function isImage(e) {
  const fileName = e.target.files[0].name;
  const indexOfForwardSlash = fileName.lastIndexOf('.');
  const extension = fileName.substring(indexOfForwardSlash+1);
  console.log("is an image: " + extension === 'png' || extension === 'jpeg' || extension === 'jpg');
  return extension === 'png' || extension === 'jpeg' || extension === '.jpg';

}

 function getFiles() {
   const storageRef = sRef(storage,auth.currentUser.uid)
   listAll(storageRef)
      .then((result) => {
        result.prefixes.map((folder) => {
          if(!folder.name.endsWith(".ghost")) {
            folders.value.push(folder.name);
          }
        })
        result.items.map((item) => {

          if(!item.name.endsWith(".ghost")) {
            fileNames.value.push(item.name);
          }
          getDownloadURL(item)
              .then((url) => {
                  fileURLs.value.push(url)

          });

        })
      })
}




onMounted(()=> {
  getFiles()

})
</script>

<template>
  <h2 class="mt-3">Library</h2>
  <div class="container-fluid">
   <div class="row">
     <div class="col-6 ">
       <div class="library_formatting">
         <div class="dropdown">
         </div>
       </div>
     </div>
     </div>
   </div>
  <hr class="m-0">




  <!--modal for creating folders-->
  <div class="modal fade" id="create-folder-modal" tabindex="-1" aria-labelledby="create-folder-modal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">New Folder</h1>
          <button id="close-button" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="folder-name" class="col-form-label">Name:</label>
              <input @keydown.enter.prevent="createNewFolder" v-model="newFolderName"  type="text" class="form-control" id="folder-name">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click.prevent="createNewFolder"  type="button" data-bs-dismiss="modal" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>

  <!--modal for deleting folder-->
  <div id="delete-folder-modal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirm Delete</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Are You Sure You Want To Delete This Folder?</p>
        </div>
        <div class="modal-footer">
          <button id="delete-close-button" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click.prevent="deleteFolder" type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
<!--Upload a new File-->
  <div class="container-fluid mt-5 ">
    <div class="row">
      <div class="col-sm-12  col-md-6 mb-2" >
        <input class="form-control " type="file" accept="image/jpeg,image/png,application/pdf" id="item-file-input" @change="isImage" >
      </div>
      <div class="mt-2">
        <button @click.prevent="uploadFile" type="button" class="btn btn-primary">Upload</button>
        <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#create-folder-modal">New folder +</button>
      </div>
  </div>
  </div>

<h2 v-show="displayErrorMessage" class="text-center text-danger">{{errorMessage}}</h2>

<!--get all folders and files and display them-->
  <div class="container mt-5">
    <div id="folders" class="row d-flex">
<!--begin rendering folders-->
      <div class="image-icon col-6 col-sm-6 col-md-4 col-lg-3 text-center mt-5 " v-for="(folder_name, index) in folders" :key="index">
        <a  href="#" class="text-decoration-none text-secondary ">
          <div class="btn  card-icon border-0">
            <div  class="mb-3">
              <button  id="trash-btn" type="button" class="btn trash-can border-0 position-absolute ms-3" @click="setSelectedFolderName(folder_name)" data-bs-toggle="modal" data-bs-target="#delete-folder-modal">
                <i class="bi bi-trash-fill "></i>
              </button>
            </div>
            <img  class="drag0-el card-img-top"  src="../assets/folder-icon.png" alt="Image icon" width="100" height="100">
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
  </div>




</template>
<style>
#trash-btn {
  color:firebrick;
  visibility: hidden;
}

.image-icon:hover #trash-btn {
  visibility: visible; /* Show the trash button when the card is hovered */
}

</style>