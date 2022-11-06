<template>
  <header>
    <input type="search" v-model="filme" @change="buscar(filme)"/>
  </header>

  <div>
  
    <Sessao :listaFilmes="listaFilmes" />
    <!-- <Sessao /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";
import Sessao from "./Sessao.vue";
import teste from '../data/remote/FilmeService';
import { Filme } from '../model/filme';

let lista: Filme[]

export default defineComponent({
  name: "home",
  components: {
    Card,
    Sessao,
  },
  data() {
    return {
      nome: "Zeca",
      filme: "",
      listaFilmes: lista
    };
  },
  methods: {

    buscar(texto: string){
      console.log(texto)

      teste(texto).then((response)=>{
        
        var lista: Filme[] = []
        response.data.Search.forEach((e: Filme)  => {
          const filme: Filme = {
            title: e.title
          }
          lista.push(filme)
        });

       this.listaFilmes = lista
  
        console.log(this.listaFilmes)
      }).catch((error) => { console.log(error)})
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
#buscar {
 margin-top: 30px;
 height: 38px;
 width: 130px;
}

</style>

