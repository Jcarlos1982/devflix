<template>
  <header>
    <h1>DevFlix</h1>
    <input type="search" v-model="buscaAtual" @change="buscarTitulos" />
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
  top: 3%;
  width: 100%;
}

header h1 {
  font-size: 30px;
  top: 1%;
  color: red;
  /* margin-bottom: -50px; */
}

div {
  display: flex;
  align-items: center;
  flex-direction: column;
}
input {
  width: 500px;
  height: 40px;
  font-size: 20px;
  border-radius: 8px;
  text-align: center;
  margin: 10px;
}
#buscar {
  margin-top: 30px;
  height: 38px;
  width: 130px;
}
</style>

