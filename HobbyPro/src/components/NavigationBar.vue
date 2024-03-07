<script setup>
</script>

<template>
  <header>
    <div class="wrapper">
      <nav id="sidebar">
        <ul>
          <li><RouterLink to="/dashboard/main">Main Dashboard</RouterLink></li>
          <li><RouterLink to="/dashboard/profile">Profile</RouterLink></li>
          <li><RouterLink to="/dashboard/completed_projects">Completed Project</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
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



</style>