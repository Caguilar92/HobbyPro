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
    <nav class="navbarTop-small">
      <!--Stages done similar to the other links-->
      <ul>
        <li><router-link :to="{ name: 'ProjectDetails', params: { uid: uid } }">Project</router-link></li>
        <li><router-link :to="{ name: 'Overview', params: { uid: uid } }">Overview</router-link></li>
        <li v-for="stage in stages" :uid="stages.stageID">
          <router-link :to="{ name: 'StageDetails', params: { id: stage.stageID, stageName: stage.stageName } }">{{ stage.stageName }}</router-link>
        </li>
      </ul>
    </nav>
    <nav class="navbarTop-full">
      <!--Stages done similar to the other links-->
      <ul>
        <li><router-link :to="{ name: 'ProjectDetails', params: { uid: uid } }">Project</router-link></li>
        <li><router-link :to="{ name: 'Overview', params: { uid: uid } }">Overview</router-link></li>
        <li v-for="stage in stages" :uid="stages.stageID">
          <router-link :to="{ name: 'StageDetails', params: { id: stage.stageID, stageName: stage.stageName } }">{{ stage.stageName }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="contentInternalWrapper">
    <h1>{{ stageName }}</h1>
    <p>{{ id }}</p>
    </div>
</template>

<style>
.navbarTop-full {
  position: fixed;
  top: 250px;
  left: 5px;
  right: 1085px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0;
  background-color: #264653;
  border-bottom: 4px solid #2a9d8f;
  border-radius: 10px;
  z-index: 2;
}

.navbarTop-full ul {
  list-style-type: none;
  margin: 0;
  padding-top: 5px;
  padding-left: 0px;
  padding-bottom: 5px;
}

.navbarTop-full ul li {
  padding: 5px;
}

.navbarTop-full ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
}

.navbarTop-full ul li a:hover {
  color: #ccc;
}

.navbarTop-small {
  display: none;
}

@media (max-width: 576px) {
  .contentInternalWrapper {
    margin-top: 35px;
}

.navbarTop-full {
  display: none;
}

.navbarTop-small {
  position: fixed;
  top: 105px;
  left: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0;
  background-color: #264653;
  border-bottom: 4px solid #2a9d8f;
  border-radius: 10px;
}

#firstButton {
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 15px;
}

.navbarTop-small ul {
  list-style-type: none;
  margin: 0;
  padding-top: 5px;
  padding-left: 0px;
  padding-bottom: 5px;
}

.navbarTop-small ul li {
  display: inline-block;
  margin-left: 10px;
}

.navbarTop-small ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
}

.navbarTop-small ul li a:hover {
  color: #ccc;
}
}
</style>