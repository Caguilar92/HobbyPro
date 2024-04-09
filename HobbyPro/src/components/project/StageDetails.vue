<script>
export default {
    props: {
        id: String,
        stageName: String
    }
}
</script>

<template>
    <nav class="navbarTop">
      <router-link id="firstButton" :to="{ name: 'Overview', params: { uid: uid } }">Overview</router-link>
      <!--Stages done similar to the other links-->
      <ul v-for="stage in stages" :uid="stages.stageID">
      <li><router-link :to="{ name: 'StageDetails', params: { id: stage.stageID, stageName: stage.stageName, uid: uid } }">{{ stage.stageName }}</router-link></li>
      </ul>
    </nav>
    <h1>{{ stageName }}</h1>
    <p>{{ id }}</p>
</template>

<style>
.navbarTop {
  position: fixed;
  top: 65px;
  left: 205px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0;
  background-color: #264653;
  border-bottom: 4px solid #2a9d8f;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

#firstButton {
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.navbarTop ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbarTop ul li {
  display: inline-block;
  margin-left: 10px;
}

.navbarTop ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.navbarTop ul li a:hover {
  color: #ccc;
}
</style>