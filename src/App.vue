<template>
  <div>
    <Home />
  </div>
 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './views/Home.vue';


export default defineComponent({
  name: 'App',
  components: {
    Home,

  },
  methods: {
    
    
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d5dce3;
}
body {
  background-color: black;

}


</style>
