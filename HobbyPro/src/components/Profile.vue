<script setup>
;
//TODO: set google auth and database referances


</script>

<template>
  <div class="about">
    <h1>This is the profile page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, laborum qui obcaecati blanditiis cumque sapiente distinctio animi ad neque fuga sit suscipit? Commodi, minus id ullam aperiam similique ad vero!</p>
    <div class="content">
      <div class="profile">
        <form name="profile" id="profile">
          <div class="profilePicture">
            <img src="" alt="image here">
            <button>Change profile here</button>
          </div>
          <div class="profileInfo">
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" readonly>
            <label for="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName" readonly>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" readonly>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<style>
@media (min-width: 576px) {
  .about {
    align-items: center;
  }
}
</style>
