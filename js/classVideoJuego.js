export default class VideoJuego {
  #codigo;
  #nombre;
  #descripcion;
  #imagen;
  #categoria;
  #precio;
  #requisitos;
  #desarrollador;
  #anio;
  #resenias;

  constructor(
    nombre,
    descripcion,
    imagen,
    categoria,
    precio,
    requisitos,
    desarrollador,
    anio,
    resenias
  ) {
    this.#codigo = uuidv4();
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
    this.#categoria = categoria;
    this.#precio = precio;
    this.#requisitos = requisitos;
    this.#desarrollador = desarrollador;
    this.#anio = anio;
    this.#resenias = resenias;
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

  get requisitos() {
    return this.#requisitos;
  }

  get desarrollador() {
    return this.#desarrollador;
  }

  get (anio) {
    return this.#anio;
  }

  get resenias() {
    return this.#resenias;
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

  set requisitos(requisitos) {
    this.#requisitos = requisitos;
  }

  set desarrollador(desarrollador) {
    this.#desarrollador = desarrollador;
  }

  set anio(anio) {
    this.#anio = anio;
  }

  set resenias(resenias) {
    this.#resenias = resenias;
  }

  toJSON() {
    return {
      codigo: this.codigo,
      nombre: this.nombre,
      descripcion: this.descripcion,
      imagen: this.imagen,
      categoria: this.categoria,
      precio: this.precio,
      requisitos: this.requisitos,
      desarrollador: this.desarrollador,
      anio: this.anio,
      resenias: this.resenias
    };
  }
}
