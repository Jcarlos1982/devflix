<template>
  <header>
    <h3>Titulos</h3>

  </header>
  <div class="sessao">
    <p v-if="isError"> Não há títulos </p>
    <Card v-else :props="filme" v-for="filme in listaFilmes" :key="filme.title" />
    
  </div>

</template>

<script lang="ts">


import { Filme } from "@/model/filme";
import { defineComponent } from "vue";
import Card from "./Card.vue";
import teste from '../data/remote/FilmeService';

export default defineComponent({
  name: "Sessao",
  components: {
    Card,
  },
  mounted(){
    if(this.titulo)
      this.buscar(this.titulo)
  },
 
  props: {
    titulo: String
  
  },
  data() {
    return {
      listaFilmes: Array<Filme>(),
      isError: false      
    };
  },
  methods: {
    async buscar(texto: string)  {

     await teste(texto).then((response)=>{
        response.data.Search.forEach((e: any)  => {
          console.log(e)
          const filme: Filme = {
            title: e.Title
          }
          this.listaFilmes.push(filme)
        });
        this.isError = false
      }).catch((error) => { 
        console.log(error)
        this.isError = true
      })
    },
  },
  
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
