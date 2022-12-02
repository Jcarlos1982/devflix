
import axios from "axios";

const apiKey = '75ec9f5d'


//Recupera uma lista de filmes pelo seu título
export async function buscarFilmesPorNome(nome: string = '', type: string = '') {
  return axios.get('http://www.omdbapi.com', {
    params: {
      s: `${nome}`,
      type: `${type}`,

      apiKey: apiKey
    },

  }).then(
    (response) => {
      return response
    }
  ).catch((error) => { return error })
}

//Recupera um filme pelo seu imdbID
export  async function buscarFilmesPorimdbID(imdbID: string = '') {
  return axios.get('http://www.omdbapi.com', {
    params: {
      i: `${imdbID}`,

      apiKey: apiKey
    },

  }).then(
    (response) => {
      return response
    }
  ).catch((error) => { return error })
}

