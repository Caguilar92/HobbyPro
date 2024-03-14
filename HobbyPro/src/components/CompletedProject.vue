<script setup>
  import {ref} from "vue";
  const email = ref('uNITIAL DATA');
  function changeEmail(){
    email.value = "this works!";
  }


  //TODO: setup db "struct" && test WEB modular vs NODE.js calls, node is easier

  
</script>
<template>
    <div class="completed">
        <h1>this is the completed projects page</h1>
        <button @click = "changeEmail">{{email}}</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, laborum qui obcaecati blanditiis cumque sapiente distinctio animi ad neque fuga sit suscipit? Commodi, minus id ullam aperiam similique ad vero!</p>
    </div>
</template>

<style>
@media (min-width: 576px) {
  .completed {
    align-items: center;
  }
}
</style>
