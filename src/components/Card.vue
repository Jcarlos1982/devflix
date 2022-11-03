<template>
  <div class="card" id="img">
    <h1>{{ filme.title }}</h1>
    <img
      id="poster"
      src="https://m.media-amazon.com/images/M/MV5BNDJjMDI0YzQtOWM2OC00NmJhLTk3YWMtYmY5NDBkZmVlM2NjXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_SX300.jpg"
    />
    <p>{{ filme.sinopse }}</p>
  </div>
</template>

<script lang="ts">

import { filme } from "@/model/filme";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  components: {},
  data() {

    return {
      filme: filme,
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
