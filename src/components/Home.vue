<template>

  <header>
    <h1>DevFlix</h1>
    <div>
      <div id="filmes">
      <input id="filmes" type="checkbox"  checked >
      <label>Filmes</label>
    </div>
    <div id="series">
      <input id="series" type="checkbox" checked />
      <label>Séries</label>
    </div>
    </div>
    <input id="busca" type="search" v-model="buscaAtual" @change="buscarTitulos" />
  </header>


  <div>
    <Sessao v-if="isReady" :titulo="buscaAtual" />
    <Sessao v-else :titulo="buscaAnterior" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";
import Sessao from "./Sessao.vue";

export default defineComponent({
  name: "home",
  components: {
    Card,
    Sessao,
  },

  data() {
    return {
      buscaAnterior: "",
      buscaAtual: "",
      isReady: false,
      largura: window.screen.width
    };
  },

  updated() {
    this.isReady = false;
  },

  methods: {
    buscarTitulos() {
      if (this.buscaAnterior !== this.buscaAtual) {
        this.buscaAnterior = this.buscaAtual;
        this.isReady = true;
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
}

#filmes , #series {
  margin-left: 10  px;
  margin-right: 10  px;
  text-align: center;
}

@media screen and (max-width: 650px) {
  #busca {
    width: 80%;
  }
}
</style>

