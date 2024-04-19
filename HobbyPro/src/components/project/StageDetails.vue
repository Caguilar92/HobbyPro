<script>
export default {
    props: {
        uid: String,
        id: String,
        stageName: String
    }, data(){
      return {
        stages: [
          {stageName: "stage_one", stageID: "2n1hb1h"},
          {stageName: "stage_two", stageID: "9cn93uv"},
          {stageName: "stage_three", stageID: "nnm956b9"}
        ]
      }
    }
}
</script>

<template>
  <div class="contentInternalWrapper">
    <!-- <h1>{{ stageName }}</h1>
    <p>{{ id }}</p> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <p class="display-6">Stage Name</p>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6"><h4>Notes</h4><hr></div>
        <div class="col-md-6"><textarea class="form-control" rows="8" id="note" name="note"></textarea></div>
      </div>
      <div class="row g-1 mt-3">
        <div class="col-sm-4">
          <div class="card h-100" id="cardOne">
            <div class="card-header">
              To Do
            </div>
            <div class="card-body">
              <!-- <h5 class="card-title">Special title treatment</h5> -->
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card h-100" id="cardTwo">
            <div class="card-header">
              Doing
            </div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>

            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card h-100" id="cardThree">
            <div class="card-header">
              Done
            </div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>

            </div>
          </div>
        </div>
      </div>

      <!-- <div class="row mt-3">
        <div class="col-md-6"><h4>Notes</h4><hr></div>
        <div class="col-md-6"><textarea class="form-control" rows="8" id="note" name="note"></textarea></div>
      </div> -->

    </div>
  </div>
</template>

<style>



.card > .card-body{
  height: 300px;
}

</style>