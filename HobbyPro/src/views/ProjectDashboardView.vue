<script setup>
import ProjectNavigationBar from "@/components/ProjectNavigationBar.vue";
</script>

<template>
  <div>
    <ProjectNavigationBar/>
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