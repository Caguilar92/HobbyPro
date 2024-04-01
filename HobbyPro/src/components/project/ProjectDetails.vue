<script>
export default {
    props: {
        projectName: String
    },
}
</script>

<template>
    <h1>Project Details Page</h1>
    <h3>{{ projectName }}</h3>
    <p>the job id is {{ projectName }}</p>
</template>

<style>

</style>