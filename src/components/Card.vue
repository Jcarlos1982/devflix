<template>
  <div class="card" id="img">
    <h1> {{filme}} </h1>
    <!-- <img
      id="poster"
      src={{filme}}
    /> -->
    <p>{{ filme }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "Card",
  mounted:()=>{
    console.log('Criado ')
    // console.log(filme)
  },
 
  components: {},
  props:{
    filme: {}
  },
  data() {

    return {
      
    };
    
  },
 
});
</script>

<style scoped>
.card {
  margin: 10px;
}

#poster {
  border-radius: 10px;
}
</style>
