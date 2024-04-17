<script>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
        isOpen: false, //offcanvas-----
      // State to track if the dropdown is visible
      dropdownOpen: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
      },
      auth: getAuth(),
      router: useRouter(),
      displayName: "Welcome, " + getAuth().currentUser.displayName.toString(),
            

    };
  },
  methods: {
    // Method to toggle the visibility of the dropdown
    toggleDropdown(dropdownId) {
      // Close all dropdowns
      for (let id in this.dropdownOpen) {
        if (id != dropdownId) {
          this.dropdownOpen[id] = false;
        }
      }
        // Toggle the clicked dropdown
        this.dropdownOpen[dropdownId] = !this.dropdownOpen[dropdownId];
    },
    toggle() { //offcanvas----
      this.isOpen = !this.isOpen;
    },
    log_out(event) {
      event.preventDefault();

      signOut(this.auth).then(() => {
        this.router.replace('/login');
      }).catch((error) => {
        console.log("something went wrong")
      });
    }
  }
};
//TODO: Title and display name do not fit on mobile view
</script>
<script setup>
  import { useStore } from 'vuex';
  import { onMounted, ref } from 'vue';

  const store = useStore();
  const stages = ref([]);

  onMounted(() => {
    const project = store.getters.getSelectedProject;
    stages.value = store.getters.getStages;
    console.log(stages);   //data checking to make sure data was loading in
    console.log(project);  //data checking to make sure data was loading in 
  });

</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row align-items-start"><!-- Use align-items-start to align items to the top -->
        <div class="logoColumn col-1"><!-- On small screens, the title spans the full width -->
          <picture>
            <img id="logo" src="/src/assets/HobbyProLogo_only_logo.png" alt="Hobby Pro Logo">
          </picture>
        </div>
        <div class="titleColumn col-1">
          <h3 class="title text-left"><!-- Adjust alignment to left -->
            <router-link to="/dashboard/main">Hobby Pro</router-link>
          </h3>
        </div>
        <div class="searchBarColumnFull col-3"><!-- this will exist when screens size are above 576 -->
          <div class="searchBarFull">
            <input type="text" placeholder="Search...">
          </div>
        </div>
        <div class="displayNameFull col-3 ms-auto text-align-right"><!--  -->
          <div class="displayNameFull">
            <p class="text-end">{{ displayName }}</p>
          </div>
        </div>
        <div class="displayNameColumnSmall col-5 ms-auto text-align-right">
          <div class="displayNameSmall">
            <!--<p class="text-end">{{ displayName }}</p>-->
          </div>
        </div>
        <div class="profileColumn col-1" @mouseover="dropdownOpen[2] = true"
            @mouseleave="dropdownOpen[2] = false">
          <div class="profileIcon"></div>
          <div v-if="dropdownOpen[2]" class="dropDownProfileMenu" @mouseover="dropdownOpen[2] = true"
              @mouseleave="dropdownOpen[2] = false">
            <ul>
              <li><router-link to="/dashboard/profile">Profile</router-link></li>
              <li><button @click="log_out" class="btn btnPrimary">Sign Out</button></li>
            </ul>
          </div>
        </div>
        <div class="searchBarColumnShrink col-11">
          <!-- this will appear when screen size has reached below 576 -->
          <div class="searchBarShrink">
            <input type="text" placeholder="Search...">
          </div>
        </div>
        <div class="hamburgerColumn col-1" @click="toggle">
          <button class="hamburger">&#9776;</button>
        </div>
      </div>
    </div>
  </header>

  <nav class="normalNav">
    <!-- Use @click to call toggleDropdown with the appropriate ID -->
    <div class="mainDropdownButton" @click="toggleDropdown(3)"><i class="bi bi-grid-fill"></i> Menu</div>
    <!-- Use v-if to conditionally render the dropdown based on its state -->
    <div class="mainDropdownMenu" v-if="dropdownOpen[3]">
      <ul id="mainList">
        <li><router-link to="/dashboard/main">Main Dashboard</router-link></li>
        <li><router-link to="/dashboard/library">Library</router-link></li>
        <li><router-link to="/dashboard/completed_projects">Completed Project</router-link></li>
      </ul>
    </div>
    <ul>
      <li class="navButtons row ">
        <router-link class="navItem col-8" to="/projectDashboard/overview"> <i class="bi bi-folder2-open"></i> Overview</router-link>
        <div class="OverviewDropdownButton col-4" @click="toggleDropdown(4)"><i class="bi bi-caret-down-fill"></i></div>
      </li>
        <div class="OverviewDropdownMenu" v-if="dropdownOpen[4]">
          <ul id="overviewList">
            <li>Add Image</li>
          </ul>
        </div>
        <!-- Correct the use of v-for and binding of key -->
        <div v-for= "stage in stages" :key= "stage.uid">
          <li class="navButtons row">
            <router-link class="navItem col-8" to="/projectDashboard/stageDetails">{{ stage.stageName }}</router-link>
            <div class="StageDropdownButton col-4" @click="toggleDropdown(stage.uid)"><i class="bi bi-caret-down-fill"></i></div>
          </li>
          <div class="StageDropDownMenu" v-if="dropdownOpen[stage.uid]">
            <ul id="stageList">
              <li>Add Stage</li>
              <li>Rename Stage</li>
              <li>Delete Stage</li>
            </ul>
          </div>
        </div>
      </ul>
    <router-link class="SettingsButton" to="/projectDashboard/editOverview"> <i class="bi bi-gear"></i> Settings</router-link>
  </nav>
  <div>
    <!-- offcanvas -->
    <div :class="['offcanvas', { 'open': isOpen }]">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title text-white" id="offcanvasLabel">HobbyPro</h5>
        <button type="button" class="btn-close btn-close-white closeButton" @click="toggle"></button>
      </div>

      <nav><!-- Use @click to call toggleDropdown with the appropriate ID -->
    <div class="mainDropdownButton" @click="toggleDropdown(3)"><i class="bi bi-grid-fill"></i> Menu</div>
    <!-- Use v-if to conditionally render the dropdown based on its state -->
    <div class="mainDropdownMenu" v-if="dropdownOpen[3]">
      <ul id="mainList">
        <li><router-link to="/dashboard/main">Main Dashboard</router-link></li>
        <li><router-link to="/dashboard/library">Library</router-link></li>
        <li><router-link to="/dashboard/completed_projects">Completed Project</router-link></li>
      </ul>
    </div>
    <ul>
      <li class="navButtons row ">
        <router-link class="navItem col-8" to="/projectDashboard/overview"> <i class="bi bi-folder2-open"></i> Overview</router-link>
        <div class="OverviewDropdownButton col-4" @click="toggleDropdown(4)"><i class="bi bi-caret-down-fill"></i></div>
      </li>
        <div class="OverviewDropdownMenu" v-if="dropdownOpen[4]">
          <ul id="overviewList">
            <li>Add Image</li>
          </ul>
        </div>
        <!-- Correct the use of v-for and binding of key -->
        <div v-for="stage in stages" :key="stage.uid">
          <li class="navButtons row">
            <router-link class="navItem col-8" to="/projectDashboard/stageDetails">{{ stage.stageName }}</router-link>
            <div class="StageDropdownButton col-4" @click="toggleDropdown(stage.uid)"><i class="bi bi-caret-down-fill"></i></div>
          </li>
          <div class="StageDropDownMenu" v-if="dropdownOpen[stage.uid]">
            <ul id="stageList">
              <li>Add Stage</li>
              <li>Rename Stage</li>
              <li>Delete Stage</li>
            </ul>
          </div>
        </div>
      </ul>
    <router-link class="SettingsButton" to="/projectDashboard/editOverview"> <i class="bi bi-gear"></i> Settings</router-link>
  </nav>
    </div>
    <div :class="{ 'backdrop': isOpen }" @click="toggle"></div>
  </div>
</template>

<style scoped>
.offcanvas {
  display: none;
}
/** ------ */

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

header {
    background-color: #264653;
    color: #000;
    border: 1px #000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 60px;
    height: 60px;
    padding-bottom: 10px;
    /* border-top: 2px solid #000;
  border-left: 2px solid #000;*/
    border-bottom: 4px solid #2a9d8f;
    z-index: 2;
}

.logoColumn {
    width: 60px;
    height: 44px;
    padding: 0;
}

#logo {
    background-color: rgba(0, 0, 0, 0);
    height: 60px;
}

.titleColumn {
    width: 150px;
    height: 44px;
    padding: 0;
}

.title {
    padding-top: 15px;
}

.title a {
    text-decoration: none;
    color: white;
}

.searchBarColumnFull {
    padding-left: 0;
    padding-right: 0;
}

.searchBarColumnShrink {
    display: none;
}

.searchBarFull {
    padding-top: 12px;
    padding-left: 12px;
}

.searchBarFull input[type="text"] {
    margin: auto;
    width: 100%;
    padding-left: 2px;
    padding-right: 2px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 5px;
    border: 2px solid whitesmoke;

}

.displayNameFull p {
    color: white;
    height: 30px;
    margin-top: 10px;
}

.displayNameColumnSmall {
    display: none;
}

.displayNameSmall {
    display: none;
}

.profileColumn {
    width: 62px;
    height: 40px;
    padding-right: 10px;
    padding-top: 8px;
}

.profileIcon {
    width: 40px;
    height: 40px;
    background-color: whitesmoke;
    border-radius: 50%;
    border: 2px solid white;
}

.mainDropdownButton {
    padding: 10px;
    color: white;
}

.mainDropdownButton:hover {
    background-color: #d5e5ec;
    color: black;
}

#mainList {
    border-bottom: 4px solid #2a9d8f;
    padding-left: 10px;
}

.OverviewDropdownButton {
    color: white;
    text-align: center;
    width: 40px;
    height: 30px;
    margin-left: auto;
    margin-right: 5px;
    border-radius: 10px;
}

.OverviewDropdownButton:hover {
    background-color: #d5e5ec;
    color: black;
}

#overviewList {
    border-bottom: 4px solid #2a9d8f;
    padding-left: 10px;
}

.StageDropdownButton {
    color: white;
    text-align:center;
    width: 40px;
    height: 30px;
    margin-left: auto;
    margin-right: 5px;
    border-radius: 10px;
}

.StageDropdownButton:hover {
    background-color: #d5e5ec;
    color: black;
}

#stageList {
    border-bottom: 4px solid #2a9d8f;
    padding-left: 10px;
}

#stageList li {
    padding-left: 10px;
}

.navButtons {
    display: flex;
    align-content: center;
}

.navItem {
    border-radius: 10px;
}

.navItem:hover {
    background-color: #d5e5ec;
}

.NavList {
    padding: 0;
}

nav {
    background-color: #264653;
    position: fixed;
    top: 60px;
    bottom: 0;
    width: 200px;
    overflow-y: auto;
    /* border-left: 2px solid #000;*/
    /* border-right: 2px solid #000;  */
    z-index: 2;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    padding: 10px;
    text-decoration: none;
    color: white;
}

nav ul li a {
    text-decoration: none;
    color: white;
}

nav ul li a:hover {
    color: black;
}

.hamburgerColumn {
    display: none;
}

.hamburger {
    background-color: #e76f51;
    border: none;
    border-radius: 5px;
}

.dropDownRouterMenu {
    visibility: visible;
    position: fixed;
    right: 48px;
    top: 62px;
    border: 2px solid #000;
    border-radius: 5px;
}

.dropDownRouterMenu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #f0f0f0;
    border-radius: 5px;
}

.dropDownRouterMenu ul li a {
    display: block;
    padding: 8px;
    text-decoration: none;
    color: black;
}

.dropDownRouterMenu ul li a:hover {
    background-color: #ddd;
}

.dropDownProfileMenu {
    visibility: visible;
    position: fixed;
    right: 48px;
    top: 12px;
    border: 2px solid #000;
    border-radius: 5px;
}

.dropDownProfileMenu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #f0f0f0;
    border-radius: 5px;
}

.dropDownProfileMenu ul li a {
    display: block;
    padding: 8px;
    text-decoration: none;
    color: black;
}

.dropDownProfileMenu ul li a:hover {
    background-color: #ddd;
}

.SettingsButton {
    text-decoration: none;
    background-color: #e76f51;
    color: white;
    position: fixed;
    bottom: 0px;
    left: 0px;
    padding: 10px 74px 10px 5px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.SettingsButton:hover {
    background-color: #ddd;
}

.SettingsButton a {
  text-decoration: none;
  color: #333;
}

.SettingsButton a:hover {
  color: black;
}

@media (max-width: 576px) {
    header {
        height: 105px;
    }

    .titleColumn {
        width: auto;
        height: auto;
        padding: 0;
    }

    .searchBarColumnFull {
        display: none;
        padding-left: 0;
        padding-right: 0;
    }

    .searchBarFull {
        display: none;
    }

    .searchBarColumnShrink {
        display: block;
        width: 85%;
        padding-left: 0;
        padding-right: 0;
    }

    .searchBarShrink {
        padding-top: 10px;
        padding-left: 12px;
        padding-right: 0;
    }

    .searchBarShrink input[type="text"] {
        margin: auto;
        width: 100%;
        padding-left: 2px;
        padding-right: 2px;
        padding-top: 2px;
        padding-bottom: 2px;
        border-radius: 5px;
        border: none;
    }

    .normalNav {
        display: none !important;
    }

    .hamburgerColumn {
        display: block;
        padding-top: 8px;
        padding-left: 18px;
        width: 55px;
    }

    .hamburger {
        display: block;
        width: 40px;
        height: 32px;
        background-color: #e76f51;
        color: white;
        border: none;
    }

    /* .closeButton {
    color: black;
    padding: 5px 75px 5px 75px;
    margin: 2px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  } */
}

@media(max-width: 576px) {
  .offcanvas {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: -300px;
    width: 206px;
    background-color: #264653;
    border-right: 4px solid #2a9d8f; 
    transition: left 0.3s;
    padding: 2px;
    z-index: 3;
    visibility: hidden;
 }

  .offcanvas.open {
    left: 0;
    visibility: visible;
  }

  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }

  .backdrop.open {
    display: block;
  }
  /** -- offcanvas -- */

  .displayNameFull {
    display: none;
    position: relative !important;
  }

  .displayNameColumnFull {
    display: none;
  }

  .displayNameColumnSmall {
    display: block;
  }

  .displayNameSmall {
    display: block;
    color: white;
  }
}
</style>