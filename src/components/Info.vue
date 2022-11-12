<template>
    <div class="info"  @click="$emit('fecharDialogo')">
      <img id="poster" :src="filme?.poster !== 'N/A' ? filme?.poster : posterPadrao" />
      
      <div id="ano">
        <h4>{{ filme?.tipo?.toUpperCase() }}</h4>
        <h4>Ano: {{ filme?.year }}</h4>
      </div>
        
      <h1>{{ filme?.title }}</h1>
    </div>
  </template>
  
  <script lang="ts">
  import { Filme } from "@/model/filme";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Info",
    components: {},
  
    props: {
      filme: Filme
    },
    emits:['fecharDialogo'],

    data() {
      return {
        posterPadrao: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Unisinos_symbol_and_logo_%28vertical%29.svg"
      };
    },
  });
  </script>
  
  <style scoped>
  .info {
    margin-left: 30px;
  }
  
  .info h4 {
    text-align: left;
  }
  
  h1 {
    text-align: start;
    color: antiquewhite
  }
  
  #ano {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
  
  }
  
  #poster {
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    height: 80%;
    width: 300px;
  }
  </style>
  