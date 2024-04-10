<script>
export default {
    props: {
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
    <h1>{{ stageName }}</h1>
    <p>{{ id }}</p>
    </div>
</template>

<style>
</style>