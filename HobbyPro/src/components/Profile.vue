<script setup>
;
//TODO: set google auth and database referances


</script>

<template>
  <div class="about">
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-sm-2 p-3"></div>
        <div class="col-sm-8 p-3">
          <p class="h1 text-center pb-4">Profile</p>
          <form class="row">
            <div class="col-md-3 bg-primary text-white">
              <img src="/src/assets/defaultProjectImage.png" alt="avatar" class="img-fluid">
            </div>
            <div class="col-md-9">
              <div class="row">
                <div class="col-6">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" readonly>
              </div>
              <div class="col-6">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" readonly>
              </div>
              <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input type="text" class="form-control" id="email" readonly>
            </div>
              </div>
              

            </div>


          </form>
        </div>
        <div class="col-sm-2 p-3"></div>
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
