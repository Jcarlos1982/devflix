<template>
  <div class="card">
    <img id="poster" :src="filme?.poster !== 'N/A' ? filme?.poster : posterPadrao" />
    
    <div id="ano">
      <h4>Ano: {{ filme?.year }}</h4>
      <h4>{{ filme?.tipo?.toUpperCase() }}</h4>
    </div>
    
    
    <h1>{{ filme?.title }}</h1>
  </div>
</template>

<script lang="ts">
import { Filme } from "@/model/filme";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  components: {},

  props: {
    filme: Filme,
  },
  data() {
    return {
      posterPadrao: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Unisinos_symbol_and_logo_%28vertical%29.svg"
    };
  },
});
</script>

<style scoped>
.card {
  margin: 20px;
}

.card h4 {
  text-align: left;
}

h1 {
  text-align: start;
  color: antiquewhite
}

#ano {
  color: white;
}
#poster {
  border-radius: 10px;
}
</style>
