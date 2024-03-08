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
        <div class="cp_button">
          <RouterLink to="/dashboard/create_project">Create Project</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

#sidebar {
  width: 200px;
  position: fixed;
  height: 100%;
  overflow: auto;
  background-color: #f1f1f1; /* Optional: added for clarity */
}

#sidebar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#sidebar ul li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

#sidebar ul li a:hover {
  background-color: #555;
  color: white;
}

#sidebar .cp_button {
  position: absolute;
  bottom: 0;
  left: 0; /* Ensure it aligns to the left */
  width: 100%; /* This should now correctly size to the sidebar's width */
  background-color: #f1f1f1; /* Matches the sidebar's color */
}

#sidebar .cp_button a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

#sidebar .cp_button a:hover {
  background-color: #555;
  color: white;
}
</style>