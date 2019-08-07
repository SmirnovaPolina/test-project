<template>
  <div>
    <div class="шапочка">
      <p>
        Шапочкаcd-2
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .шапочка {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 30px;
    background: #323232;
  }
.шапочка {
  color: white;
  padding: 5px;
}

</style>
