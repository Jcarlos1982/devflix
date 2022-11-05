
import axios from "axios";

const apiKey = '75ec9f5d'

    export default async function buscarFilmes(nome: string='')  { 
     return axios.get('http://www.omdbapi.com', {
       params: {
         s:`${nome}`,

        apiKey: apiKey
    },
       
     }).then(
        (response)=>{
        return response
        }
     ).catch((error)=>{return error})
    }


