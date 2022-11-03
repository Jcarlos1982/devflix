<template>
  <header>
    <input type="search" :value="nome" @change="teste" />
  </header>

  <div>
    <Sessao />
    <Sessao />
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
      nome: "Zeca",
    };
  },
  methods: {
    teste() {
      console.log(this.nome);
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

</style>

