<script setup>
import {computed, onMounted, ref} from "vue";
import {getAuth, updateProfile} from "firebase/auth";
import { useStore} from 'vuex';
import {getDownloadURL, getStorage, ref as storageRef, uploadBytes} from "firebase/storage";

const vueStore = useStore();
let auth = getAuth();
  let Email = auth.currentUser.email.toString();
  let displayName = getAuth().currentUser.displayName.toString();
  let selectedFile = ref(null);
  //splits the users name into to values by the " "
  let displayNameArray = displayName.split(" ");

  //places the values inside of "firstName" and "lastName"
  let firstName = displayNameArray[0];
  let lastName = displayNameArray[1];

  //create a store reference for state saving 
  const store = useStore();

  // Allows for reference by Vue in <template> area
  const projects = ref([]);

  const docPath = auth.currentUser.email+'_Projects';

  const fetchProjects = async () => {
  await store.dispatch('fetchProjects', {docPath});
  projects. value = store.state.projects;
  };
  
  onMounted(()=> {
    fetchProjects();
    getProfileImage();
  });

  //get total number
  const totalProjects = computed(() => {
    return projects.value.length; // This will automatically update whenever projects.value changes.
  });

  //get total ongoing
  const totalOngoing = computed(() => {
    return projects.value.length;// this will automatically update whenever projects.value changes.
  })

  //placeholder for completedProjects
  let completedProjects = 2; //this value is going off of the dummy data in the completed projects page.
  let profileImageURI = ref('');

  function getProfileImage() {
    let userProfileURI = auth.currentUser.photoURL;
    if (userProfileURI != null) {
      profileImageURI.value = userProfileURI;
    }
  }



  async function uploadImage(e) {
    selectedFile.value = e.target.files[0];
    if(selectedFile.value != null) {
      let storage = getStorage();
      let ref = storageRef(storage,"/profile_image/" + auth.currentUser.uid);

      try {

        const snapshot = await uploadBytes(ref, selectedFile.value);
        const url = await getDownloadURL(snapshot.ref);
         profileImageURI.value =  url;

       } catch (error) {
        console.log(error); // Handle any errors here
      }

     await updateProfile(auth.currentUser, {
        photoURL: profileImageURI.value

      }).then(() => {
       vueStore.commit('setProfileURL',profileImageURI.value)


      }).catch((error) => {
        // An error occurred
        // ...
      });

    }
  }

</script>



<template>
  <div class="about">
    <div class="container-fluid mt-3">
      <div class="row">
        <div id="gutter" class="col-sm-2 p-3"></div>
        <div id="profileLayout" class="col-sm-8 p-3">
          <p class="h1 text-center pb-4">Profile</p>
          <form class="row">
            <div class="col-md-4">
              <img v-if="profileImageURI === ''" id="imgIconProfile" src="/src/assets/jo-szczepanska-unsplash.jpg" alt="avatar" class="img-fluid">
              <img v-else id="imgIconProfile" :src="profileImageURI" alt="avatar" class="img-fluid">
                <div class="text-center mt-3">
                  <label for="change-image" class="btn btn-secondary" >Change Profile Image</label>
                  <input @change="uploadImage" id="change-image"  type="file" accept="image/jpeg,image/png" class="col-12 mt-3 btn btn-secondary btn-sm invisible">

                </div>
              <div class="row">
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-6">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="firstName" :value="firstName" readonly>
                </div>
                <div class="col-6">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lastName" :value="lastName" readonly>
                </div>
                <div class="col-12">
                  <label for="email" class="form-label">Email</label>
                  <input type="text" class="form-control" id="email" :value="Email" readonly>
                </div>
                <div class="row">
                  <div class="col-12 mt-2">
                  <label class="form-label">Your Statistics</label>
                  <ul class="list-unstyled">
                    <li>Total Ongoing Project: {{ totalOngoing }}</li>
                    <li>Total Completed Projects: {{ completedProjects }}</li>
                    <li>Overal Total: {{ totalProjects + 2 }}</li>
                  </ul>
                  </div>
                </div>
                
              </div>


            </div>


          </form>
        </div>
        <div id="gutter" class="col-sm-2 p-3"></div>
      </div>
    </div>

  </div>
</template>

<style>
@media (min-width: 576px) {
  .about {
    align-items: center;
  }
}

#profileLayout{
  border: 1px solid #E6E6E6;
  border-radius: 10px;
}

#imgIconProfile{
  border-radius: 50%;
  width: max-content;
  height: 200px;
  border: 1px solid lightgray;
}



</style>
