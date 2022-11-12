
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
  tipo?: string;
  poster?: string;
  imdbID?: string
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
  tipo?: string;
  poster?: string;
  imdbID?: string
}

