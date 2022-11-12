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
  
    let titulo = ""
    let tipo = ""

    if (this.titulo){
      titulo = this.titulo
    }
    if (this.tipoFiltro){
      tipo = this.tipoFiltro
    }

      this.buscar(titulo, tipo);

    
  },

  props: {
    titulo: String,
    tipoFiltro: String,
  },
  data() {
    return {
      listaFilmes: Array<Filme>(),
      isError: false,
    };
  },
  methods: {
    async buscar(texto: string, tipo: string) {      
      await teste(texto, tipo)
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

.sessao {
  margin-top: 150px;
  bottom: 0%;
  max-width: 95%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}
</style>
