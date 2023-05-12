export default class VideoJuego {
  #codigo;
  #nombre;
  #precio;
  #desarrollador;
  #categoria;
  #plataforma;
  #resenia;
  #anioLanzamiento;
  #descripcion;
  #imagen;

  constructor(
    codigo = uuidv4(),
    nombre,
    precio,
    desarrollador,
    categoria,
    plataforma,
    resenia,
    anioLanzamiento,
    descripcion,
    imagen
  ) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#precio = precio;
    this.#desarrollador = desarrollador;
    this.#categoria = categoria;
    this.#plataforma = plataforma;
    this.#resenia = resenia;
    this.#anioLanzamiento = anioLanzamiento;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
  }

  // getters
  get codigo() {
    return this.#codigo;
  }

  get nombre() {
    return this.#nombre;
  }

  get precio() {
    return this.#precio;
  }

  get desarrollador() {
    return this.#desarrollador;
  }

  get categoria() {
    return this.#categoria;
  }

  get plataforma() {
    return this.#plataforma;
  }

  get resenia() {
    return this.#resenia;
  }

  get anioLanzamiento() {
    return this.#anioLanzamiento;
  }

  get descripcion() {
    return this.#descripcion;
  }

  get imagen() {
    return this.#imagen;
  }

  // setters
  set codigo(codigo) {
    this.#codigo = codigo;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }

  set precio(precio) {
    this.#precio = precio;
  }

  set desarrollador(desarrollador) {
    this.#desarrollador = desarrollador;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
  }

  set plataforma(plataforma) {
    this.#plataforma = plataforma;
  }

  set resenia(resenia) {
    this.#resenia = resenia;
  }

  set anioLanzamiento(anioLanzamiento) {
    this.#anioLanzamiento = anioLanzamiento;
  }

  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }

  set imagen(imagen) {
    this.#imagen = imagen;
  }

  toJson() {
    return {
      codigo: this.codigo,
      nombre: this.nombre,
      precio: this.precio,
      desarrollador: this.desarrollador,
      categoria: this.categoria,
      plataforma: this.plataforma,
      resenia: this.resenia,
      anioLanzamiento: this.anioLanzamiento,
      descripcion: this.descripcion,
      imagen: this.imagen,
    };
  }
}
