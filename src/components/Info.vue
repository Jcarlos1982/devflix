<template>
    <div class="dialogo">
        <img id="poster" :src="filme?.poster" />


        <div class="info">
            <h1>{{ filme?.title }}</h1>

            <div id="fichaTecnica">
                <h4>{{ filme?.tipo?.charAt(0).toUpperCase().concat(filme?.tipo?.slice(1)) }}, </h4>
                <h4>{{ filme?.lancamento }}</h4>
                <h4>{{ filme?.tempo }} - </h4>
                <h4>{{ filme?.diretor }}, </h4>
                <h4>{{ filme?.pais }} </h4>
            </div>

            <h4> {{ filme?.genero }} </h4>
            <h4 v-if="filme?.sinopse != 'N/A'"> {{ filme?.sinopse }} </h4>

    
            <a :href="linkYoutube + filme?.title + trailler" target="_blank">
                <input class="button" type="button" value="Buscar trailler" />
            </a><br>

            <input class="button" type="button" value="Fehcar"  @click="$emit('fecharDialogo')"/>
        </div>

    </div>
</template>
  
<script lang="ts">
import { Filme } from "@/model/filme";
import { defineComponent } from "vue";

export default defineComponent({
    name: "Info",
    components: {},
    props: {
        filme: Filme
    },
    emits: ['fecharDialogo'],

    data() {
        return {
            linkYoutube: "https://www.youtube.com/results?search_query=",
            trailler: " trailler"

        };
    },
});
</script>
  
<style scoped>

.dialogo {
    display: flex;
    flex-direction: row;
    margin: 30px;
    width: 100%;
    height: 100%;
}

h4 {
    text-align: left;
}

.info {
    margin-top: -40px;
    text-align: start;
    color: antiquewhite;
    font-size: 25px;
    padding: 2x0px;
    width: 60%;

}

#fichaTecnica {
    color: white;
    display: flex;
    margin-top: -80px;
    flex-direction: row;
    /* max-width: 250px; */
    justify-content: start;
}

#fichaTecnica h4 {
    padding-right: 10px;
}

#poster {
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: aliceblue;
    height: 80%;
    width: 400px;
    margin-right: 20px;
}

.button {
    width: 20%;
    height: 40px;
    border-radius: 8px;
    margin: 10px;
    font-weight: bold;
    padding: 5px;
    font-size: 20px;
    text-align: center;
}

@media screen and (max-width: 650px) {
    #busca {
        /* width: 80%; */
    }
}
</style>
  