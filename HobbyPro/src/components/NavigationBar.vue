<script>
import {getAuth,signOut} from "firebase/auth";
import {useRouter} from "vue-router";

export default {
  data() {
    return {
      // State to track if the dropdown is visible
      isRouterDropdownVisible: false,
      isProfileDropdownVisible: false,
      auth: getAuth(),
      router: useRouter()

    };
  },
  methods: {
    // Method to toggle the visibility of the dropdown
    toggleRouterDropdown() {
      this.isRouterDropdownVisible = !this.isRouterDropdownVisible;
    },
    toggleProfileDropdown() {
      this.isProfileDropdownVisible = !this.isProfileDropdownVisible;
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
  <div class="wrapper">
  <header>
    <h1 class="title"><RouterLink to="/dashboard/main">Hobby Pro</RouterLink></h1>
    <div class="search-bar">
      <input type="text" placeholder="Search...">
    </div>
    
      <button class="hamburger" @click="toggleRouterDropdown">&#9776;</button>

      <div v-if="isRouterDropdownVisible" class="dropDown-router-menu">
        <ul>
          <li><RouterLink to="/dashboard/main"><div>Main Dashboard</div></RouterLink></li>
          <li><RouterLink to="/dashboard/profile"><div>Profile</div></RouterLink></li>
          <li><RouterLink to="/dashboard/completed_projects"><div>Completed Project</div></RouterLink></li>
          <li><RouterLink to="/dashboard/create_project">Create Project</RouterLink></li>
        </ul>
      </div>
    <div class="profile-icon" @click="toggleProfileDropdown"></div>

    <div v-if="isProfileDropdownVisible" class="dropDown-profile-menu">
      <ul>
        <li><RouterLink to="/dashboard/profile">Profile</RouterLink></li>
        <li><RouterLink to="/dashboard/profile"><div>Profile</div></RouterLink></li>
      </ul>

      <div class="MP_formatting">
        <button @click="log_out" class="btn btn-primary">sign out</button>
      </div>
    </div>
  </header>

  <nav>
      <ul>
        <li><RouterLink to="/dashboard/main"><div>Main Dashboard</div></RouterLink></li>
        <li><RouterLink to="/dashboard/profile"><div>Profile</div></RouterLink></li>
        <li><RouterLink to="/dashboard/completed_projects"><div>Completed Project</div></RouterLink></li>
      </ul>
      <RouterLink class="cp_button" to="/dashboard/create_project">Create Project</RouterLink>
  </nav>
  </div>
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

.search-bar {
  height: 40px;
  width: auto;
  position: fixed;
  left: 200px;
  right: 500px;
}

.search-bar input[type="text"] {
  margin: auto;
  width: auto;
  padding: 8px 8px 2px 8px;
  border-radius: 5px;
  border: 2px solid #000;
}

.profile-icon {
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

.cp_button {
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

.cp_button:hover {
  background-color: #ddd;
}

.cp_button a {
  text-decoration: none;
  color: #333;
}

.cp_button a:hover {
  color: #333;
}

.hamburger {
  visibility: visible;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 2px 7px 2px 7px;
  margin: 5px 5px 5px 8px;
  position: fixed;
  right: 55px;
  top: 10px;
}

.dropDown-router-menu {
  visibility: visible;
  position: fixed;
  right: 60px;
  top: 47px;
  border: 2px solid #000;
  border-radius: 5px;
}

.dropDown-router-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.dropDown-router-menu ul li a {
  display: block;
  padding: 8px;
  text-decoration: none;
  color: black;
}

.dropDown-router-menu ul li a:hover {
  background-color: #ddd;
}

.dropDown-profile-menu {
  visibility: visible;
  position: fixed;
  right: 15px;
  top: 47px;
  border: 2px solid #000;
  border-radius: 5px;
}

.dropDown-profile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.dropDown-profile-menu ul li a {
  display: block;
  padding: 8px;
  text-decoration: none;
  color: black;
}

.dropDown-profile-menu ul li a:hover {
  background-color: #ddd;
}

@media (max-width: 576px) {
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

  .dropDown-menu {
    visibility: visible;
    position: fixed;
    right: 60px;
    top: 47px;
    border: 2px solid #000;
    border-radius: 5px;
  }

  .dropDown-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #f0f0f0;
    border-radius: 5px;
  }

  .dropDown-menu ul li a {
    display: block;
    padding: 8px;
    text-decoration: none;
    color: black;
  }

  .dropDown-menu ul li a:hover {
    background-color: #ddd;
  }
}
</style>