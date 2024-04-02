<script>
import {getAuth,signOut} from "firebase/auth";
import {useRouter} from "vue-router";

export default {
  data() {
    return {
      // State to track if the dropdown is visible
      dropdownOpen: {
        1: false,
        2: false
      },
      auth: getAuth(),
      router: useRouter(),
      displayName: "Welcome, " + getAuth().currentUser.displayName.toString()

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

<template>
  <header>
    <div class="container-fluid">
      <div class="row align-items-start"><!-- Use align-items-start to align items to the top -->
        <div class="titleColumn col-2"><!-- On small screens, the title spans the full width -->
          <h2 class="title text-left"><!-- Adjust alignment to left -->
            <router-link to="/dashboard/main">Hobby Pro</router-link>
          </h2>
        </div>
        <div class="searchBarColumnFull col-3"><!-- this will exist when screens size are above 576 -->
          <div class="searchBarFull">
            <input type="text" placeholder="Search...">
          </div>
        </div>
        <div class="col-3 ms-auto text-align-right"><!--  -->
            <div class="displayName">
              <p class="text-end">{{displayName}}</p>
            </div>
        </div>
        <div class="profileColumn col-1" @mouseover="dropdownOpen[2] = true" @mouseleave="dropdownOpen[2] = false">
          <div class="profileIcon"></div>
          <div v-if="dropdownOpen[2]" class="dropDownProfileMenu" @mouseover="dropdownOpen[2] = true" @mouseleave="dropdownOpen[2] = false">
            <ul>
              <li><router-link to="/dashboard/profile">Profile</router-link></li>
              <li><button @click="log_out" class="btn btnPrimary">Sign Out</button></li>
            </ul>
          </div>
        </div>
        <div class="searchBarColumnShrink col-11"><!-- this will appear when screen size has reached below 576 -->
          <div class="searchBarShrink">
            <input type="text" placeholder="Search...">
          </div>
        </div>
        <div class="hamburgerColumn col-1" @mouseover="dropdownOpen[1] = true" @mouseleave="dropdownOpen[1] = false">
          <button class="hamburger">&#9776;</button>
          <div v-if="dropdownOpen[1]" class="dropDownRouterMenu" @mouseover="dropdownOpen[1] = true" @mouseleave="dropdownOpen[1] = false">
            <ul>
              <li><router-link to="/dashboard/main"><div>Main Dashboard</div></router-link></li>
              <li><router-link to="/dashboard/profile"><div>Profile</div></router-link></li>
              <li><router-link to="/dashboard/completed_projects"><div>Completed Project</div></router-link></li>
              <li><router-link to="/dashboard/library"><div>Library</div></router-link></li>
              <li><router-link to="/dashboard/create_project">Create Project</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>

  <nav>
    <div class="container-fluid text-align-center">
    <div class="row margin-60">
      <div class="NavList col-12">
        <ul class="">
          <li><router-link to="/dashboard/main"><div>Main Dashboard</div></router-link></li>
          <li><router-link to="/dashboard/profile"><div>Profile</div></router-link></li>
          <li><router-link to="/dashboard/library"><div>Library</div></router-link></li>
          <li><router-link to="/dashboard/completed_projects"><div>Completed Project</div></router-link></li>
        </ul>
        <router-link class="cpButton" to="/dashboard/create_project">Create a Project</router-link>
      </div>
    </div>
    </div>
  </nav>
</template>

<style scoped>

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #222831;
  color: #000;
  border: 1px #000 ;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px;
  height: 60px;
  padding-bottom: 10px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  z-index: 2;
}

.titleColumn {
  width: 198px;
  height: 60px;
  padding: 0;
}

.title {
  padding-top: 10px;
  padding-left: 15px
}

.title a{
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
  border: 2px solid #000;
}

.displayName p {
  color: white;
  height: 30px;
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
  background-color: #000;
  border-radius: 50%;
}

.NavList {
  padding: 0;
}

 nav {
  background-color: #31363F;
  position: fixed;
  top: 60px;
  bottom: 0;
  width: 200px;
  overflow-y: auto;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  z-index: 2;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  padding: 10px;
}

nav ul li:hover {
  background-color: #ddd;
}

nav ul li a {
  text-decoration: none;
  color: white;
}

nav ul li a:hover {
  color: black;
}

.cpButton {
  text-decoration: none;
  background-color: lightslategray;
  color: white;
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 10px 74px 10px 5px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.cpButton:hover {
  background-color: #ddd;
}

.cpButton a {
  text-decoration: none;
  color: #333;
}

.cpButton a:hover {
  color: black;
}

.hamburgerColumn {
  display: none;
}

.hamburger {
  background-color: #fff;
  border: 2px solid #000;
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

@media (max-width: 576px) {
  header {
    height: 100px;
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
  padding-top: 12px;
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
  border: 2px solid #000;
}

  nav {
    display: none !important;
  }

  .hamburgerColumn {
    display: block;
    padding-top: 12px;
    padding-left: 18px;
    width: 55px;
  }

  .hamburger {
    display: block;
    width: 40px;
    height: 32px;
    background-color: #fff;
    border: 2px solid #000;
  }
}

@media(max-width: 576px) {
  .displayName {
    display: inline-block;
    position: relative !important;
  }

}
</style>
