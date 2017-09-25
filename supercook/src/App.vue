<template>
  <div id="app">
    <h1>SuperCook</h1>

    <div class="menu">
      <ul>
        <li>
          <router-link to="recipes">Liste des recettes</router-link>
        </li>
        <li>
          <router-link to="favorites">Mes Favoris</router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    .menu ul {
      display: flex;

      li {
        list-style-type: none;
        padding: 4px;
        border: 1px solid;
        margin: 4px;
      }
    }
  }

</style>
