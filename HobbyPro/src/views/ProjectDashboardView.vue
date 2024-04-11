<script setup>
import ProjectNavigationBar from "@/components/ProjectNavigationBar.vue";
//import ProjectNavigationBar2 from "@/components/ProjectNavigationBar2.vue";
</script>

<template>
  <div>
    <ProjectNavigationBar/>
    <!--
      <projectNavigationBar2/>
    -->
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
  padding: 5px;
}

@media (max-width: 576px){
  .content {
    margin-top: 100px;
    margin-left: 0px;
  }

}


</style>