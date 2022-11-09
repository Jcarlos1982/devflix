 interface NotaInterface {
  fonte?: string;
  valor?: string;
}

 interface FilmeInterface {
  title?: string;
  year?: string;
  lancamento?: string;
  tempo?: string;
  genero?: string;
  diretor?: string;
  sinopse?: string;
  linguagem?: string;
  pais?: string;
  notas?: NotaInterface[];
  tipo?: string;
  poster?: string;
  imdbID?: string
}

class  Nota implements NotaInterface {
  fonte?: string;
  valor?: string;
}

export class Filme implements FilmeInterface  {
  title?: string;
  year?: string
  lancamento?: string;
  tempo?: string;
  genero?: string;
  diretor?: string;
  sinopse?: string;
  linguagem?: string;
  pais?: string;
  notas?: Nota[];
  tipo?: string;
  poster?: string;
  imdbID?: string
}


// const filme: Filme = {
//   title: e.Title,
//   lancamento: e.Released,
//   tempo: e.Runtime,
//   genero: e.Genre,
//   diretor: e.Director,
//   sinopse: e.Plot,
//   linguagem: e.Language,
//   pais: e.Country,
//   notas: e.Ratings,              
//   tipo: e.Type,
//   poster: e.Poster,
//   imdbID: e.imdbID,
// };