<template>
  <header>
    <h3>{{ genero }}</h3>
  </header>
  <div class="sessao">
    <Card v-for="v in 10" :key="v" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  name: "Sessao",
  components: {
    Card,
  },
  data() {
    return {
      genero: "Animation, Action, Adventure",
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
