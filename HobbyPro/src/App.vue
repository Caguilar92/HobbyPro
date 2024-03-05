<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav id="sidebar">
        <ul>
          <li><RouterLink to="/">Main Dashboard</RouterLink></li>
          <li><RouterLink to="/profile">Profile</RouterLink></li>
          <li><RouterLink to="/completedProject">Completed Project</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
#sidebar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px; /* Width of the sidebar */
  position: fixed; /* Fixed position on the left */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
}

/* Style the links */
#sidebar ul li a {
  display: block;
  color: #AAA;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change color on hover */
#sidebar ul li a:hover {
  background-color: #555;
  color: white;
}

/* Style for the rest of the content */
.content {
  margin-left: 200px; /* Same as sidebar width */
  padding: 1px 16px;
  height: 1000px; /* Sample height */
}
</style>
