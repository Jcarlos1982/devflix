export interface nota {
  fonte?: string;
  valor?: string;
}

export interface Filme {
  title?: string;
  lancamento?: string;
  tempo?: string;
  genero?: string;
  diretor?: string;
  sinopse?: string;
  linguagem?: string;
  pais?: string;
  notas?: nota[];
  tipo?: string;
  poster?: string;
}
let filme: Filme = {
  title: "Iron Man",
  lancamento: "24 Sep 1994",
  tempo: "3 min",
  genero: "Animation, Action, Adventure",
  diretor:'N/A',
  sinopse:'Industrialist Tony Stark leads his private team of superheros as Iron Man against the forces of evil.',
  linguagem:'English',
  pais:'United States',
  notas:[
    {
        fonte:'Internet Movie Databas',
        valor:'6.6/10'
    }
  ],
  tipo:'series',
  poster:'https://m.media-amazon.com/images/M/MV5BNDJjMDI0YzQtOWM2OC00NmJhLTk3YWMtYmY5NDBkZmVlM2NjXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_SX300.jpg'

};
export { filme };
