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
      router: useRouter()

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
  },
};
</script>

<template>
  <header>
    <h1 class="title"><router-link to="/dashboard/main">Hobby Pro</router-link></h1>
    <div class="searchBar">
      <input type="text" placeholder="Search...">
    </div>
    
      <button class="hamburger" @click="toggleDropdown(1)">&#9776;</button>

      <div v-if="dropdownOpen[1]" class="dropDownRouterMenu">
        <ul>
          <li><router-link to="/dashboard/main"><div>Main Dashboard</div></router-link></li>
          <li><router-link to="/dashboard/profile"><div>Profile</div></router-link></li>
          <li><router-link to="/dashboard/completed_projects"><div>Completed Project</div></router-link></li>
          <li><router-link to="/dashboard/create_project">Create Project</router-link></li>
        </ul>
      </div>
    <div class="profileIcon" @click="toggleDropdown(2)"></div>

    <div v-if="dropdownOpen[2]" class="dropDownProfileMenu">
      <ul>
        <li><router-link to="/dashboard/profile">Profile</router-link></li>
        <li><button @click="logOut" class="btn btnPrimary">Sign Out</button></li>
      </ul>
    </div>
  </header>

  <nav>
      <ul>
        <li><router-link to="/dashboard/main"><div>Main Dashboard</div></router-link></li>
        <li><router-link to="/dashboard/profile"><div>Profile</div></router-link></li>
        <li><router-link to="/dashboard/completed_projects"><div>Completed Project</div></router-link></li>
      </ul>
      <router-link class="cpButton" to="/dashboard/create_project">Create Project</router-link>
  </nav>
</template>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #fff;
  color: #000;
  border: 1px #000 ;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px;
  height: 60px;
  display: flex;
  padding: 10px 5px 10px 5px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
}

.title {
  font-size: 30px;
  position: absolute;
}

.title a{
  text-decoration: none;
  color: black;
}

.searchBar {
  height: 40px;
  width: 500px;
  margin-left: 200px;
  margin-right: 60px;
}

.searchBar input[type="text"] {
  margin: auto;
  width: 100%;
  padding: 8px 8px 2px 8px;
  border-radius: 5px;
  border: 2px solid #000;
}

.profileIcon {
  position: fixed;
  right: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  background-color: #000;
  border-radius: 50%;
}

nav {
  background-color: #fff;
  position: fixed;
  top: 60px;
  bottom: 0;
  width: 200px; /* Adjust width as needed */
  overflow-y: auto;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
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
  color: #333;
}

nav ul li a:hover {
  color: white;
}

.cpButton {
  text-decoration: none;
  color: #333;
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 10px 85px 10px 5px;
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
  color: #333;
}

.hamburger {
  visibility: hidden;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 2px 7px 2px 7px;
  margin: 5px 5px 5px 8px;
  position: fixed;
  right: 55px;
  top: 10px;
}

.dropDownRouterMenu {
  visibility: visible;
  position: fixed;
  right: 60px;
  top: 47px;
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
  right: 15px;
  top: 47px;
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

  .searchBar {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 42px;
    width: 576px;
  }

  .searchBar input {
    width: 100%;
  }

  nav {
    display: none !important;
  }

  .hamburger {
    visibility: visible;
    background-color: #fff;
    border: 2px solid #000;
    padding: 2px 7px 2px 7px;
     margin: 5px 5px 5px 8px;
  }
}
</style>
