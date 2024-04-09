<script setup>
;
//TODO: set google auth and database referances


</script>

<template>
  <div class="about">
    <div class="container-fluid mt-3">
      <div class="row">
        <div id="gutter" class="col-sm-2 p-3"></div>
        <div id="profileLayout" class="col-sm-8 p-3">
          <p class="h1 text-center pb-4">Profile</p>
          <form class="row">
            <div class="col-md-4">
              <img id="imgIconProfile" src="/src/assets/jo-szczepanska-unsplash.jpg" alt="avatar" class="img-fluid">
              <button type="button" class="col-12 mt-3 btn btn-secondary btn-sm">Change Profile Image</button>
              <div class="row">
              </div>
            </div>
            <div class="col-md-8">
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
                <div class="row">
                  <div class="col-12 mt-2">
                  <label class="form-label">Your Statistics</label>
                  <ul class="list-unstyled">
                    <li>Total Ongoing Project:</li>
                    <li>Total Completed Projects:</li>
                    <li>Overal Total: </li>
                  </ul>
                  </div>
                </div>
                
              </div>


            </div>


          </form>
        </div>
        <div id="gutter" class="col-sm-2 p-3"></div>
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

#profileLayout{
  border: 1px solid #E6E6E6;
  border-radius: 10px;
}

#imgIconProfile{
  border-radius: 50%;
  width: 100%;
  height: 200px;
}



</style>
