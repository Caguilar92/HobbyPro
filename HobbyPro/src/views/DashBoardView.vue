<script setup>
//TODO: import database refeances

//TODO: set up "struct" for db calls


import NavigationBar from "@/components/NavigationBar.vue";

</script>

<template>
  <div>
    <NavigationBar/>
  <div class="content">
      <router-view></router-view>
  </div>
  </div>
  

</template>

<style scoped>
/* Style for the rest of the content */
.content {
  margin-top: 60px;
  margin-left: 200px;
 /* overflow-y: auto;
 
  top: 60px;
  left: 200px; /* Same as sidebar width 
  right: 0px;
  bottom: 0px;
  padding: 1px 16px;
  height: 1000px; Sample height */
}

@media (max-width: 576px){
  .content {
  margin-left: 0px;
 /* overflow-y: auto;
 
  top: 60px;
  left: 200px; /* Same as sidebar width 
  right: 0px;
  bottom: 0px;
  padding: 1px 16px;
  height: 1000px; Sample height */
}

}


</style>