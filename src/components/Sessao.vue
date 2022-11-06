<template>
  <header>
    <h3>{{ listaFilmes }}</h3>
  </header>
  <div class="sessao">
    <!-- <Card :props=filme v-for="filme in listaFilmes" :key="filme.title" /> -->
    <p>{{ listaFilmes }}</p>
  </div>
</template>

<script lang="ts">


import { Filme } from "@/model/filme";
import { defineComponent } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  name: "Sessao",
  components: {
    Card,
  },
  props: {
    listaFilmes: {}
  
  },
  data() {
    return {
      
    };
  },
  methods: {},
  
});
</script>

<style scoped>
header {
  font-size: 30px;
  color: blanchedalmond;
  margin-bottom: -50px;
}

.sessao {
  max-width: 95%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}
</style>
