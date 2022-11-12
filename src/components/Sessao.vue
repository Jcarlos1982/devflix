<template>
  <header>
    
  </header>
  <div class="sessao">
    <p v-if="isError">Não há títulos</p>
    <Card
      v-else
      :filme="filme"
      v-for="(filme, index) in listaFilmes"
      :key="index"
    />
  </div>
</template>

<script lang="ts">
import { Filme } from "@/model/filme";
import { defineComponent } from "vue";
import Card from "./Card.vue";
import teste from "../data/remote/FilmeService";

export default defineComponent({
  name: "Sessao",
  components: {
    Card,
  },
  mounted() {
    if (this.titulo) this.buscar(this.titulo);
  },

  props: {
    titulo: String,
  },
  data() {
    return {
      listaFilmes: Array<Filme>(),
      isError: false,
    };
  },
  methods: {
    async buscar(texto: string) {
      await teste(texto)
        .then((response) => {
          response.data.Search.forEach((e: any) => {
            const filme: Filme = {
              title: e.Title,
              year: e.Year,
              lancamento: e.Released,
              tempo: e.Runtime,
              genero: e.Genre,
              diretor: e.Director,
              sinopse: e.Plot,
              linguagem: e.Language,
              pais: e.Country,
              notas: e.Ratings,              
              tipo: e.Type,
              poster: e.Poster,
              imdbID: e.imdbID,
            };
            this.listaFilmes.push(filme);
          });
          this.isError = false;
        })
        .catch((error) => {
          console.log(error);
          this.isError = true;
        });
    },
  },
});
</script>

<style scoped>
header {
  font-size: 30px;
  color: blanchedalmond;
  margin-top: 850px;
}

.sessao {
  max-width: 95%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}
</style>
