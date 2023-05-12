class VideoJuego {
    #codigo;
    #titulo;
    #precio;
    #desarrollador;
    #categoria;
    #plataforma;
    #lenguaje;
    #anioLanzamiento;
    #descripcion;
    #sistemaOperativo;
    #procesadorAmd;
    #procesadorIntel;
    #memoria;
    #tGraficaAmd;
    #tGraficaNvidia;
    #imagen;
  
    constructor(codigo, titulo, precio, desarrollador, categoria, plataforma, lenguaje, anioLanzamiento, descripcion, sistemaOperativo, procesadorAmd, procesadorIntel, memoria, tGraficaAmd, tGraficaNvidia, imagen = []) {
      this.#codigo = codigo;
      this.#titulo = titulo;
      this.#precio = precio;
      this.#desarrollador = desarrollador;
      this.#categoria = categoria;
      this.#plataforma = plataforma;
      this.#lenguaje = lenguaje;
      this.#anioLanzamiento = anioLanzamiento;
      this.#descripcion = descripcion;
      this.#sistemaOperativo = sistemaOperativo;
      this.#procesadorAmd = procesadorAmd;
      this.#procesadorIntel = procesadorIntel;
      this.#memoria = memoria;
      this.#tGraficaAmd = tGraficaAmd;
      this.#tGraficaNvidia = tGraficaNvidia;
      this.#imagen = imagen;
    }
  
    // getters
    get codigo() {
      return this.#codigo;
    }
  
    get titulo() {
      return this.#titulo;
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
  
    get lenguaje() {
      return this.#lenguaje;
    }
  
    get anioLanzamiento() {
      return this.#anioLanzamiento;
    }
  
    get descripcion() {
      return this.#descripcion;
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
  
    get imagen() {
      return this.#imagen;
    }
  
    // setters
    set codigo(codigo) {
      this.#codigo = codigo;
    }

    set titulo(titulo) {
      this.#titulo = titulo;
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

    set lenguaje(lenguaje) {
      this.#lenguaje = lenguaje;
    }

    set anioLanzamiento(anioLanzamiento) {
      this.#anioLanzamiento = anioLanzamiento;
    }

    set descripcion(descripcion) {
      this.#descripcion = descripcion;
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

    set imagen(imagen) {
      this.#imagen = imagen;
    }

}