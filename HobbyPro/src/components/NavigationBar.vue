<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<template>
  <div class="wrapper">
  <header>
    <h1 class="title"><RouterLink to="/dashboard/main">Hobby Pro</RouterLink></h1>
    <div class="search-bar">
      <input type="text" placeholder="Search...">
    </div>
    <button class="hamburger">&#9776;</button>
    <RouterLink to="/dashboard/profile"><div class="profile-icon"></div></RouterLink>
  </header>



  <nav>
      <ul>
        <li><RouterLink to="/dashboard/main"><div>Main Dashboard</div></RouterLink></li>
        <li><RouterLink to="/dashboard/profile"><div>Profile</div></RouterLink></li>
        <li><RouterLink to="/dashboard/completed_projects"><div>Completed Project</div></RouterLink></li>
      </ul>
    <div class="cp_button">
      <RouterLink to="/dashboard/create_project">Create Project</RouterLink>
    </div>
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  padding: 10px 5px 10px 5px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
}

.title {
  font-size: 30px;
  margin-right: auto;
  position: absolute;
}

.title a{
  text-decoration: none;
  color: black;
}

.search-bar {
  margin: 0 auto;
  width: 100%;
  display: flex;

}

.search-bar input[type="text"] {
  width: 50%;
  padding: 8px;
  margin: 0 200px;
  border: none;
  border-radius: 5px;
  border: 2px solid #000;
}

.profile-icon {
  width: 40px;
  height: 40px;
  background-color: #000;
  border-radius: 50%;
}

nav {
  background-color: #fff;
  position: absolute;
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
  background-color: #ddd; /* Highlight color */
}

nav ul li a {
  text-decoration: none;
  color: #333;
}

nav ul li a:hover {
  color: white;
}

main {
  margin-left: 220px; /* Adjust as per your nav width */
  padding: 20px;
}

.cp_button {
  text-decoration: none;
  color: #333;
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 10px 85px 10px 5px;
  margin: 5px;
  border: none;
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
  visibility: hidden;
}

@media (max-width: 576px) {
    .hamburger {
      visibility: visible;
    }
}
</style>