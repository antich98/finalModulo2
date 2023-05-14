export default class VideoJuego {
  #codigo;
  #nombre;
  #descripcion;
  #imagenUno;
  #imagenDos;
  #imagenTres;
  #imagenCuatro;
  #imagenCinco;
  #imagenSeis;
  #categoria;
  #precio;
  #desarrollador;
  #anio;
  #plataforma;
  #sistemaOperativo;
  #procesadorAmd;
  #procesadorIntel;
  #memoria;
  #tGraficaAmd;
  #tGraficaNvidia;

  constructor(
    nombre,
    descripcion,
    imagenUno,
    imagenDos,
    imagenTres,
    imagenCuatro,
    imagenCinco,
    imagenSeis,
    categoria,
    precio,
    desarrollador,
    anio,
    plataforma,
    sistemaOperativo,
    procesadorAmd,
    procesadorIntel,
    memoria,
    tGraficaAmd,
    tGraficaNvidia
  ) {
    this.#codigo = uuidv4();
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#imagenUno = imagenUno;
    this.#imagenDos = imagenDos;
    this.#imagenTres = imagenTres;
    this.#imagenCuatro = imagenCuatro;
    this.#imagenCinco = imagenCinco;
    this.#imagenSeis = imagenSeis;
    this.#categoria = categoria;
    this.#precio = precio;
    this.#desarrollador = desarrollador;
    this.#anio = anio;
    this.#plataforma = plataforma;
    this.#sistemaOperativo = sistemaOperativo;
    this.#procesadorAmd = procesadorAmd;
    this.#procesadorIntel = procesadorIntel;
    this.#memoria = memoria;
    this.#tGraficaAmd = tGraficaAmd;
    this.#tGraficaNvidia = tGraficaNvidia;
  }

  // getters
  get codigo() {
    return this.#codigo;
  }

  get nombre() {
    return this.#nombre;
  }

  get descripcion() {
    return this.#descripcion;
  }

  get imagenUno() {
    return this.#imagenUno;
  }

  get imagenDos() {
    return this.#imagenDos;
  }

  get imagenTres() {
    return this.#imagenTres;
  }

  get imagenCuatro() {
    return this.#imagenCuatro;
  }

  get imagenCinco() {
    return this.#imagenCinco;
  }

  get imagenSeis() {
    return this.#imagenSeis;
  }

  get categoria() {
    return this.#categoria;
  }

  get precio() {
    return this.#precio;
  }

  get desarrollador() {
    return this.#desarrollador;
  }

  get anio() {
    return this.#anio;
  }

  get plataforma() {
    return this.#plataforma;
  }

  get sistemaOperativo() {
    return this.#sistemaOperativo;
  }

  get procesadorAmd() {
    return this.#procesadorAmd;
  }

  get procesadorIntel() {
    return this.#procesadorIntel;
  }

  get memoria() {
    return this.#memoria;
  }

  get tGraficaAmd() {
    return this.#tGraficaAmd;
  }

  get tGraficaNvidia() {
    return this.#tGraficaNvidia;
  }

  // setters
  set codigo(codigo) {
    this.#codigo = codigo;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }

  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }

  set imagenUno(imagenUno) {
    this.#imagenUno = imagenUno;
  }

  set imagenDos(imagenDos) {
    this.#imagenDos = imagenDos;
  }

  set imagenTres(imagenTres) {
    this.#imagenTres = imagenTres;
  }

  set imagenCuatro(imagenCuatro) {
    this.#imagenCuatro = imagenCuatro;
  }

  set imagenCinco(imagenCinco) {
    this.#imagenCinco = imagenCinco;
  }

  set imagenSeis(imagenSeis) {
    this.#imagenSeis = imagenSeis;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
  }

  set precio(precio) {
    this.#precio = precio;
  }

  set desarrollador(desarrollador) {
    this.#desarrollador = desarrollador;
  }

  set anio(anio) {
    this.#anio = anio;
  }

  set plataforma(plataforma) {
    this.#plataforma = plataforma;
  }

  set sistemaOperativo(sistemaOperativo) {
    this.#sistemaOperativo = sistemaOperativo;
  }

  set procesadorAmd(procesadorAmd) {
    this.#procesadorAmd = procesadorAmd;
  }

  set procesadorIntel(procesadorIntel) {
    this.#procesadorIntel = procesadorIntel;
  }

  set memoria(memoria) {
    this.#memoria = memoria;
  }

  set tGraficaAmd(tGraficaAmd) {
    this.#tGraficaAmd = tGraficaAmd;
  }

  set tGraficaNvidia(tGraficaNvidia) {
    this.#tGraficaNvidia = tGraficaNvidia;
  }

  toJSON() {
    return {
      codigo: this.codigo,
      nombre: this.nombre,
      descripcion: this.descripcion,
      imagenUno: this.imagenUno,
      imagenDos: this.imagenDos,
      imagenTres: this.imagenTres,
      imagenCuatro: this.imagenCuatro,
      imagenCinco: this.imagenCinco,
      imagenSeis: this.imagenSeis,
      categoria: this.categoria,
      precio: this.precio,
      desarrollador: this.desarrollador,
      anio: this.anio,
      plataforma: this.plataforma,
      sistemaOperativo: this.sistemaOperativo,
      procesadorAmd: this.procesadorAmd,
      procesadorIntel: this.procesadorIntel,
      memoria: this.memoria,
      tGraficaAmd: this.tGraficaAmd,
      tGraficaNvidia: this.tGraficaNvidia
    };
  }
}
