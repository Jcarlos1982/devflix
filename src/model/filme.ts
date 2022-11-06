 interface NotaInterface {
  fonte?: string;
  valor?: string;
}

 interface FilmeInterface {
  title?: string;
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
}

class  Nota implements NotaInterface {
  fonte?: string;
  valor?: string;
}

export class Filme implements FilmeInterface  {
  title?: string;
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
}

