<script setup>
;
//TODO: set google auth and database referances


</script>

<template>
  <div class="about">
    <h1>This is the profile page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, laborum qui obcaecati blanditiis cumque
      sapiente distinctio animi ad neque fuga sit suscipit? Commodi, minus id ullam aperiam similique ad vero!</p>
    <div class="content">
      <div class="profile-grid">
        <form name="profile" id="profile">
          <h1>Profile</h1>
          <div class="profilePicture">
            <img src="" alt="image here">
            <div>
              <button>Change profile picture</button>
            </div>
            
          </div>
          <div class="profileInfo">
            <div class="inputElement">
              <label for="firstName">First Name:</label>
              <input type="text" name="firstName" id="firstName" readonly>
            </div>

            <div class="inputElement">
              <label for="lastName">Last Name:</label>
              <input type="text" name="lastName" id="lastName" readonly>
            </div>

            <div class="inputElement">
              <label for="email">Email:</label>
              <input type="text" name="email" id="email" readonly>
            </div>

          </div>
          <div class="clear"></div>
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
.profile-grid{
  border: 2px solid #E6E6E6;
  background-color: #EEEEEE;
  border-radius: 25px;
  padding: 20px 40px;
  margin: auto;
  width: 50%;
}
h1{
  text-align: center;
}

.profilePicture{
  float: left;
}

.profileInfo{
  float: right;
}
.inputElement{
  padding: 5px 0;
}
.profileInfo label{
  padding-right: 10px;
}
.clear{
  clear: both;
}
</style>
