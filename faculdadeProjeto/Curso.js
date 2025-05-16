import ModelError from "./ModelError.js";

class Curso {
    #id_curso;
    #nome;
    #descricao;
    #categoria;
    #cargaHoraria;

    constructor(id_curso, nome, descricao, categoria, cargaHoraria) {
        this.setIdCurso(id_curso);
        this.setNome(nome);
        this.setDescricao(descricao);
        this.setCategoria(categoria);
        this.setCargaHoraria(cargaHoraria);
    }

    //==================== Getters ====================//

    getIdCurso() {
        return this.#id_curso;
    }

    getNome() {
        return this.#nome;
    }

    getDescricao() {
        return this.#descricao;
    }

    getCategoria() {
        return this.#categoria;
    }

    getCargaHoraria() {
        return this.#cargaHoraria;
    }

    //==================== Setters ====================//

    setIdCurso(id) {
        if (!Curso.validarId(id))
            throw new ModelError("ID do curso inválido: " + id);
        this.#id_curso = id;
    }

    //-----------------------------------------------------------------------------------------//

    setNome(nome) {
        if (!Curso.validarNome(nome))
            throw new ModelError("Nome do curso inválido: " + nome);
        this.#nome = nome;
    }

    //-----------------------------------------------------------------------------------------//

    setDescricao(descricao) {
        if (!Curso.validarDescricao(descricao))
            throw new ModelError("Descrição inválida: " + descricao);
        this.#descricao = descricao;
    }

    //-----------------------------------------------------------------------------------------//

    setCategoria(categoria) {
        if (!Curso.validarCategoria(categoria))
            throw new ModelError("Categoria inválida: " + categoria);
        this.#categoria = categoria;
    }

    //-----------------------------------------------------------------------------------------//

    setCargaHoraria(cargaHoraria) {
        if (!Curso.validarCargaHoraria(cargaHoraria))
            throw new ModelError("Carga horária inválida: " + cargaHoraria);
        this.#cargaHoraria = cargaHoraria;
    }

    //==================== Validações ====================//

    static validarId(id) {
        return typeof id === 'number' && id > 0;
    }

    //-----------------------------------------------------------------------------------------//

    static validarNome(nome) {
        if(typeof nome != 'string' || nome.trim() == "" || nome.length > 100){
            return false;
        }
        const padraoNome = /[A-Z][a-z] */;
        if (!padraoNome.test(nome))
            return false;

        return true;
    }

    //-----------------------------------------------------------------------------------------//

    static validarDescricao(descricao) {
        if(typeof descricao != 'string' || descricao.trim() == "" || descricao.length > 300)
            return false

        const padraoDescricao = /^[A-Za-zÀ-ÿ\s\-]+$/;
        if (!padraoDescricao.test(descricao.trim()))
            return false;

        return true;
    }

    //-----------------------------------------------------------------------------------------//

    static validarCategoria(categoria) {
        if(typeof categoria != 'string' || categoria.trim() == "" || categoria.length > 50)
            return false

        const padraoCategoria = /[A-Z][a-z] */;
        if (!padraoCategoria.test(categoria))
            return false;
        return true;
    }

    //-----------------------------------------------------------------------------------------//

    static validarCargaHoraria(cargaHoraria) {
        return typeof cargaHoraria === 'number' && cargaHoraria > 0 && cargaHoraria <= 1000;
    }
}
