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
          <p class="display-6">{{ stageName }}</p>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6"><h4>Notes</h4><hr></div>
        <div class="col-md-6">
          <div class="textboxHeader">

            <div class="iconTypes">
              <button title="Bold"><i class="bi bi-type-bold"></i></button>
              <button title="Italic"><i class="bi bi-type-italic"></i></button>
              <button title="Underline"><i class="bi bi-type-underline"></i></button>
              <button title="Title"><i class="bi bi-fonts"></i></button>
              <!-- <i class="bi bi-type"></i> -->
              <button title="Bullet List"><i class="bi bi-list-ul"></i></button>
              <button title="Numbered List"><i class="bi bi-list-ol"></i></button>
              <button title="Indent Left"><i class="bi bi-text-indent-left"></i></button>
              <button title="Indent Right"><i class="bi bi-text-indent-right"></i></button>
              
            </div>
          </div>
          <textarea class="form-control" rows="8" id="note" name="note"></textarea></div>
      </div>
      <div class="row g-1 mt-3">
        <div class="col-sm-4">
          <div class="card h-100" id="cardOne">
            <div class="card-header">
              
              <button title="Add Task">To Do<i class="bi bi-plus"></i></button>
            </div>
            <div class="card-body">
              <!-- <h5 class="card-title">Special title treatment</h5> -->
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card h-100" id="cardTwo">
            <div class="card-header">
              <button title="Add Task">Doing<i class="bi bi-plus"></i></button>
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
              <button title="Add Task">Done<i class="bi bi-plus"></i></button>
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

.textboxHeader{
  background-color: rgb(246, 246, 246);
}
.iconTypes > button{
  border: none;
}
i{
  padding: 5px;
}

.card-header > button{
  border: none;
  background-color: transparent;
}
</style>