<template>
    <div class="card text-center">
        <h1>Welcome!</h1>
        <label> Welcome to sum- Ehem. Welcome to our calculator</label>
    </div>

  <router-link to="/calculator">
    <Button label="Go to Calculator" raised/>
  </router-link>

</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
.card {
    background: beige;
    border-radius: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-family: sans-serif;
    justify-content: center;
}
</style>