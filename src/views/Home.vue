<template>

  <header>
    <h1>DevFlix</h1>
    <div>
      <div id="filmes">
      <input id="filmes" type="checkbox"  v-model="filtroFilmes">
      <label>Filmes</label>
    </div>
    <div id="series">
      <input id="series" type="checkbox" v-model="filtroSeries"/>
      <label>Séries</label>
    </div>

    </div>
   
    <input id="busca" type="search" v-model="titulo" @keyup.enter="buscarTitulos" />
 
  
  </header>


  <div>
    <Sessao v-if="isReady" :titulo="titulo" :tipoFiltro="tipoFiltro" />    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../components/Card.vue";
import Sessao from "../components/Sessao.vue";

export default defineComponent({
  name: "home",
  components: {
    Card,
    Sessao,
  },

  data() {
    return {
      titulo: "",
      isReady: false,
      filtroFilmes: true,
      filtroSeries: true, 
      tipoFiltro: ""
    };
  },

  updated() {
    this.isReady = true;
  },

  methods: {
    buscarTitulos() {
      this.isReady = false;
      
      if(this.filtroFilmes === this.filtroSeries){
        this.tipoFiltro = ""
      }
      else{
        if(this.filtroFilmes) {
          this.tipoFiltro = "movie"
        }else{
          this.tipoFiltro = "series"
        }
      }
    },

  },
});
</script >


<style  scoped>
header {
  position: fixed;
  top: 0%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header h1 {
  font-size: 30px;
  color: red;
}

div {
  display: flex;
  align-items: center;
}

#busca {
  width: 40%;
  height: 40px;
  font-size: 20px;
  border-radius: 8px;
  text-align: center;
  margin: 10px;
  height: 38px;
  background-color: antiquewhite;
}

#filmes , #series {
  margin-left: 20  px;
  margin-right: 20  px;
  text-align: center;
}

@media screen and (max-width: 650px) {
  #busca {
    width: 80%;
  }
}
</style>

