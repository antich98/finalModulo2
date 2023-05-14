export default class VideoJuego {
  #codigo;
  #nombre;
  #descripcion;
  #imagen;
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
    imagen,
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
    this.#imagen = imagen;
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

  get imagen() {
    return this.#imagen;
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

  set imagen(imagen) {
    this.#imagen = imagen;
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
      imagen: this.imagen,
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
