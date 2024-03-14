<script setup>
//TODO: import database refeances

//TODO: set up "struct" for db calls


import NavigationBar from "@/components/NavigationBar.vue";

</script>

<template>
  <NavigationBar/>
  <div class="content">
    <router-view></router-view>
  </div>

</template>

<style scoped>
/* Style for the rest of the content */
.content {
  margin-top: 60px;
  margin-left: 200px; /* Same as sidebar width */
  padding: 1px 16px;
  height: 1000px; /* Sample height */
}

@media (min-width: 576px) {
  .content {
    margin-left: 5px;
  }
}
</style>