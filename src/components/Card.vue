<template>
  <div class="card" id="img">
    <h1> {{filme}} </h1>
    fasfa
    <!-- <img
      id="poster"
      src={{filme}}
    /> -->
    <p>{{ filme }}</p>
  </div>
</template>

<script lang="ts">
import { Filme } from "@/model/filme";
import { defineComponent } from "vue";


export default defineComponent({
  name: "Card",
  mounted(){
    if(this.filme){
      console.log(this.filme)
    }
   
    console.log(this.filme)
  },
 
  props:{
    filme: Filme
  },
  data() {

    return {
      
    };
    
  },
  components: {},
 
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
