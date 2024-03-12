<script setup>

</script>

<template>
  <div class="CP_formatting">
    <h1>create project page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, laborum qui obcaecati blanditiis cumque sapiente distinctio animi ad neque fuga sit suscipit? Commodi, minus id ullam aperiam similique ad vero!</p>
  </div>
  <form name="createProject">
        <div>
            <div class="inputElement">
                <label for="projectName">Project Name: </label>
                <input type="text" name="projectName" id="projectName">
            </div>
            <div class="inputElement">
                <label for="startDate">Start Date: </label>
                <input type="date" name="startDate" id="startDate">
                
            </div>
        </div>
    </form>
  
</template>

<style scoped>
@media (min-width: 576px) {
  .CP_formatting {
    align-items: center;
  }
}
</style>