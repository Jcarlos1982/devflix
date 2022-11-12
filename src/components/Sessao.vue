<template>
  
  <div class="sessao">    
    
    <Card
      v-if="!isError"
      :filme="filme"
      v-for="(filme, index) in listaFilmes"
      :key="index" @click="buscarimdbID(filme.imdbID ?? '')"
    />
    <dialog id="dialog" v-if="filmeImdb.imdbID" open>
      <Info  :filme="filmeImdb" @fecharDialogo="fecharDialogo" />
    </dialog>
    
  </div>
  <div id="erro" v-if="isError">Não há títulos</div>
</template>

<script lang="ts">
import { Filme } from "@/model/filme";
import { defineComponent } from "vue";
import Card from "./Card.vue";
import Info from "./Info.vue";
import {buscarFilmesPorNome, buscarFilmesPorimdbID} from "../data/remote/FilmeService";

export default defineComponent({
  name: "Sessao",
  components: {
    Card,
    Info
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
      filmeImdb: new Filme(),
      isError: false,
    };
  },
  methods: {
    async buscar(texto: string, tipo: string) {      
      await buscarFilmesPorNome(texto, tipo)
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

    async buscarimdbID(imdbID: string) {      
      
      await buscarFilmesPorimdbID(imdbID)
        .then((response) => {
          const data = response.data
    
            const filme: Filme = {
              title: data.Title,
              year: data.Year,
              lancamento: data.Released,
              tempo: data.Runtime,
              genero: data.Genre,
              diretor: data.Director,
              sinopse: data.Plot,
              linguagem: data.Language,
              pais: data.Country,            
              tipo: data.Type,
              poster: data.Poster,
              imdbID: data.imdbID,
            };
           
           this.filmeImdb = filme

        })
        .catch((error) => {
          console.log(error);
        });
    },

    fecharDialogo(){
      this.filmeImdb = new Filme()
    }
  },
});
</script>

<style scoped>

.sessao {
  margin-top: 170px;
  bottom: 0%;
  max-width: 95%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}

#erro {
  width: 100%;
  margin-top: 150px;
  display: flex;
  justify-content: center;
}

#dialog {
  width: 100%;
  height: 100%;
  opacity: 0.95;
  background-color: black;
}
</style>
