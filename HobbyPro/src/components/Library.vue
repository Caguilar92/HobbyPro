<script setup>
import {onMounted, ref} from "vue";
import {getStorage, ref as sRef, uploadBytes, listAll, getDownloadURL, deleteObject} from "firebase/storage";
import {getAuth} from "firebase/auth";

const storage = getStorage();
const auth = getAuth();

//holds the values of the respective resources in order to display them.
let folders = ref([]);
let fileNames = ref([]);
let fileURLs = ref([]);

//path the current directory
let currentDirectoryStack = ref([auth.currentUser.uid + "/"]);
const rootPath = auth.currentUser.uid + "/";
//variables that hold the name if folder or bytes if files  to be created, will be reset to empty text or null when upload complete or error occurs
let newFolderName = ref('');
let newFileName = ref('');

let showSpinner = ref(true);

//selected files and folders
let selectedFolderName = ref('');
let selectedFile = ref(null);
let selectedFileIndex = ref()
//if error occurs update this message and display
let displayErrorMessage = ref(false);
let errorMessage = ref('');

//name of folder used to create a directory for a folder
let ghostFolder = '/folder.ghost';


async function uploadFile() {
  if (selectedFile.value != null) {
    console.log(getCurrentDirectory())
    let pathURL = getCurrentDirectory() + selectedFile.value.name;
    showSpinner.value = true;

    const storageRef = sRef(storage, pathURL);

    try {
      const snapshot = await uploadBytes(storageRef, selectedFile.value);
      const url = await getDownloadURL(snapshot.ref);
      fileURLs.value.push(url);
      fileNames.value.push(snapshot.ref.name);
      showSpinner.value = false;
    } catch (error) {
      showSpinner.value = false;
      console.log(error); // Handle any errors here
    }
  }
}


function setFile(e) {
  selectedFile.value = e.target.files[0];
  newFileName.value = selectedFile.value.name;
}

async function createNewFolder() {
  if (isNameBlank(newFolderName.value)) {
    showErrorMessage("name cannot be blank");
    document.getElementById('close-button').click();

    return;
  }

  if (folderExists(newFolderName.value)) {
    showErrorMessage("folder already exists");
    document.getElementById('close-button').click();
    return;
  }

  hideErrorMessage();
  let pathURL = getCurrentDirectory() + newFolderName.value + ghostFolder;
  const storageRef = sRef(storage, pathURL)
  document.getElementById('close-button').click();
  showSpinner.value = true;
  await uploadBytes(storageRef, null).then(() => {

    folders.value[folders.value.length] = newFolderName.value;
    newFolderName.value = '';

    showSpinner.value = false;
  }).catch(() => {
    showSpinner.value = true;
    document.getElementById('close-button').click();
  })

}

function folderExists(folderName) {

  return folders.value.includes(folderName);

}

function setSelectedFolderName(folder_name) {
  selectedFolderName.value = folder_name;
}

async function deleteFolder() {

  let path = getCurrentDirectory() + selectedFolderName.value + "/";
 const modal = document.getElementById('delete-close-button')
  if(modal != null) {
    modal.click();
  }
  showSpinner.value = true;

  await deleteFolderRec(path);
  let fileRef = sRef(storage,path);
  await listAll(fileRef).then((res) => {
    res.items.forEach((itemRef)=> {

      deleteObject(itemRef);
      folders.value = folders.value.filter(file => file !== fileRef.name)
      console.log(fileRef.name)
    })
  })



  errorMessage.value = "";
  showSpinner.value = false;
}

async function deleteFolderRec(path) {
  const ref = sRef(storage,path);

  await listAll(ref).then((result) => {
    let prefix = result.prefixes;
    if(prefix.length === 0) {
      return;
    }

    for(let index in prefix) {
      let nextPath = prefix[index].fullPath

      deleteFolderRec(nextPath);
       let fileRef = sRef(storage,nextPath)
        listAll(fileRef).then((res) => {
          res.items.forEach((itemRef) => {
            deleteObject(itemRef);

          })
        })
    }

  })

}


async function deleteFile() {
  const path = getCurrentDirectory() + selectedFile.value + "/";
  document.getElementById('delete-close-file-button').click();
  showSpinner.value = true;
  const fileRef = sRef(storage, path);
  await deleteObject(fileRef).then(() => {

    fileNames.value.splice(selectedFileIndex.value, 1);
    fileURLs.value.splice(selectedFileIndex.value, 1);
    selectedFile.value = null;
    showSpinner.value = false;


  }).catch((error) => {
    showSpinner.value = false;
    showErrorMessage(error.message);
  })

}

function setFileNameForDeletion(file_name, index) {
  selectedFile.value = file_name;
  selectedFileIndex.value = index;

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



function isImage(filename) {
  const indexOfDot = filename.lastIndexOf('.');
  const extension = filename.substring(indexOfDot + 1).toLowerCase();
  return extension === 'png' || extension === 'jpeg' || extension === 'jpg';

}


async function getFiles() {
  try {

    const storageRef = sRef(storage, getCurrentDirectory());

    const result = await listAll(storageRef);


    for (const item of result.items) {

      if (!item.name.endsWith(".ghost")) {
        fileNames.value.push(item.name);
        const url = await getDownloadURL(item);
        fileURLs.value.push(url);
      }
    }
    for (const folder of result.prefixes) {
      if (!folder.name.endsWith(".ghost")) {
        folders.value.push(folder.name);
      }
    }
    showSpinner.value = false;
  } catch (error) {
    showSpinner.value = false;
  }
}


function getCurrentDirectory() {

  return currentDirectoryStack.value.join("");
}
function showBackButton() {

  return getCurrentDirectory() !== rootPath;
}
async function navigate(folder_name) {
  currentDirectoryStack.value.push(folder_name +"/")
  setSelectedFolderName(folder_name);
  fileNames.value = [];
  fileURLs.value = [];
  folders.value = [];
  await getFiles()
}

async function navigateBack() {
  fileNames.value = [];
  fileURLs.value = [];
  folders.value = [];
 currentDirectoryStack.value.pop();
  await getFiles();
}

onMounted(() => {

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


  <div v-if="showSpinner" class=" vh-100 d-flex text-center justify-content-center mt-5 spinner-container">
    <div class="spinner-border text-primary" role="status">
    </div>

  </div>
  <div v-else>

    <div v-if="showBackButton()" class="d-inline-block text-center">
      <button @click.prevent="navigateBack" type="button" class="btn btn-primary rounded-circle ms-5 mt-3">
        <i class="bi bi-arrow-left"></i>
      </button>
      <p class="ms-5">back</p>
    </div>


    <div class="modal fade" id="create-folder-modal" tabindex="-1" aria-labelledby="create-folder-modal"
         aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">New Folder</h1>
            <button id="close-button" type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="folder-name" class="col-form-label">Name:</label>
                <input @keydown.enter.prevent="createNewFolder" v-model="newFolderName" type="text" class="form-control"
                       id="folder-name">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button @click.prevent="createNewFolder" type="button" data-bs-dismiss="modal" class="btn btn-primary">
              Save
            </button>
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
            <button id="delete-close-button" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close
            </button>
            <button @click.prevent="deleteFolder" type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>


    <!--modal for deleting file-->
    <div id="delete-file-modal" class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Delete</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Are You Sure You Want To Delete This File?</p>
          </div>
          <div class="modal-footer">
            <button id="delete-close-file-button" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button @click.prevent="deleteFile" type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <!--Upload a new File-->
    <div class="container-fluid mt-5 ">
      <div class="row">
        <div class="col-sm-12  col-md-6 mb-2">
          <input class="form-control " type="file" accept="image/jpeg,image/png,application/pdf" id="item-file-input"
                 @change="setFile">
        </div>
        <div class="mt-2">
          <button @click="uploadFile" type="button" class="btn btn-primary">Upload</button>
          <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
                  data-bs-target="#create-folder-modal">New folder +
          </button>
        </div>
      </div>
    </div>

    <h2 v-show="displayErrorMessage" class="text-center text-danger">{{ errorMessage }}</h2>

    <!--get all folders and files and display them-->
    <div class="container mt-5">
      <div id="folders" class="row d-flex">
        <!--begin rendering folders-->
        <div class="image-icon col-6 col-sm-6 col-md-4 col-lg-3 text-center mt-5 "
             v-for="(folder_name, index) in folders" :key="index">
          <a href="#" class="text-decoration-none text-secondary ">
            <div class="btn  card-icon border-0">
              <div class="mb-3">
                <button id="trash-btn-folder" type="button" class="btn trash-can border-0 position-absolute ms-3"
                        @click="setSelectedFolderName(folder_name,index)" data-bs-toggle="modal"
                        data-bs-target="#delete-folder-modal">
                  <i class="bi bi-trash-fill "></i>
                </button>
              </div>
              <button @click.prevent="navigate(folder_name)" id="folder-btn" class="btn">
                <img class="drag0-el card-img-top" src="../assets/folder-icon.png" alt="Image icon" width="100"
                     height="100">
              </button>

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
        <!--begin rendering files-->
        <div class="image-icon col-6 col-sm-6 col-md-4 col-lg-3 text-center mt-5 "
             v-for="(file_name, index) in fileNames" :key="index">
          <a class="text-decoration-none text-secondary ">
            <div class="btn card-icon border-0">
              <div class="mb-4">
                <button id="trash-btn-file" type="button" class="btn trash-can border-0 position-absolute ms-4"
                        data-bs-toggle="modal" data-bs-target="#delete-file-modal"
                        @click="setFileNameForDeletion(file_name,index)">
                  <i class="bi bi-trash-fill "></i>
                </button>
              </div>
              <a :href="fileURLs[index]">
                <img v-if="isImage(file_name)" :src="fileURLs[index]" alt="Image icon" width="100" height="100">
                <img v-else src="../assets/pdf-icon.png" alt="pdf icon" width="100" height="100">

              </a>

              <div class="card-body">

                <div class="badge-container">
                  <div class="badge text-black text-wrap text-break" style="width: 6rem;">
                    {{ file_name }}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>


</template>
<style>
#trash-btn-folder {
  color: firebrick;
  visibility: hidden;
}

.image-icon:hover #trash-btn-folder {
  visibility: visible; /* Show the trash button when the card is hovered */
}

#trash-btn-file {
  color: firebrick;
  visibility: hidden;
}



.image-icon:hover #trash-btn-file {
  visibility: visible; /* Show the trash button when the card is hovered.*/
}

/* Media query for screen size 576px or smaller */
@media (max-width: 576px) {
  #trash-btn-file {
    visibility: visible; /* Show the trash button for screens 576px or smaller */
  }

  #trash-btn-folder {
    visibility: visible; /* Show the trash button for screens 576px or smaller */
  }
}

.spinner-border {
  margin-top: 25%; /* Move the container down by 25% of the viewport height */
}

#folder-btn {
  background: transparent !important;

}
.rounded-circle {
  border-radius: .25rem;
}
</style>