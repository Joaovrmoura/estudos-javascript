import ModelError from "./ModelError.js";

class Aluno {
    #id_aluno;
    #matricula;
    #nome;
    #email;
    #telefone;
    #curso;

    constructor(matr, id_aluno, nome, email, telefone, curso = null) {
        this.setMatricula(matr);
        this.setCpf(cpf);
        this.setNome(nome);
        this.setEmail(email);
        this.setTelefone(telefone);
        this.setIdAluno(id_aluno)
        this.setCurso(curso)
    }

    //-----------------------------------------------------------------------------------------//

    getMatricula() {
        return this.#matricula;
    }

    //-----------------------------------------------------------------------------------------//

    setMatricula(matr) {
        if (!Aluno.validarMatricula(matr))
            throw new ModelError("Matrícula Inválida: " + matr);
        this.#matricula = matr;
    }

    getNome() {
        return this.#nome;
    }

    //-----------------------------------------------------------------------------------------//

    setNome(nome) {
        if (!Aluno.validarNome(nome)) throw new ModelError("Nome Inválido: " + nome);
        this.#nome = nome;
    }

    //-----------------------------------------------------------------------------------------//

    getEmail() {
        return this.#email;
    }

    //-----------------------------------------------------------------------------------------//

    setEmail(email) {
        if (!Aluno.validarEmail(email))
            throw new ModelError("Email inválido: " + email);
        this.#email = email;
    }

    //-----------------------------------------------------------------------------------------//

    getTelefone() {
        return this.#telefone;
    }

    //-----------------------------------------------------------------------------------------//

    setTelefone(telefone) {
        if (!Aluno.validarTelefone(telefone))
            throw new ModelError("Telefone inválido: " + telefone);
        this.#telefone = telefone;
    }

    //-----------------------------------------------------------------------------------------//

    getIdAluno() {
        return this.#id_aluno;
    }

    //-----------------------------------------------------------------------------------------//

    setIdAluno(id_aluno) {
        if (!Aluno.validarId(id_aluno))
            throw new ModelError("id_aluno inválido: " + id_aluno);
        this.#id_aluno = id_aluno;
    }


    //-----------------------------------------------------------------------------------------//

    async getIdCurso() {
        if(this.curso.constructor.name === "Promise")
            this.curso = await this.curso;
        return this.#curso = curso
    }

    //-----------------------------------------------------------------------------------------//

    setCurso(curso) {
        if (!Aluno.validarCurso(curso))
            throw new ModelError("id_aluno inválido: " + curso);
        this.curso = curso;
    }

    //-----------------------------------------------------------------------------------------//


    static validarId(id) {
        if (id === null || id === undefined || id.trim() === '') {
           return false
    }
        return true
    }

    //-----------------------------------------------------------------------------------------//

    static validarCurso(curso) {
        if (curso === null || curso === undefined ||curso.trim() == "")
            return false;
        return true;
    }
    //-----------------------------------------------------------------------------------------//

    static validarMatricula(matr) {
        if (matr === null || matr === undefined || matr.trim() == "")
            return false;
        const padraoMatricula = /[0-9]/;
        if (!padraoMatricula.test(matr))
            return false;
        return true;
    }


    //-----------------------------------------------------------------------------------------//

    static validarNome(nome) {
        if (nome === null || nome == "" || nome === undefined)
            return false;
        if (nome.length > 40)
            return false;
        const padraoNome = /[A-Z][a-z] */;
        if (!padraoNome.test(nome))
            return false;
        return true;
    }

    //-----------------------------------------------------------------------------------------//

    static validarEmail(email) {
        if (email === null || email === undefined || email.trim() == "")
            return false;

        const padraoEmail = /[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}/;
        if (!padraoEmail.test(email))
            return false;
        return true;
    }

    //-----------------------------------------------------------------------------------------//

    static validarTelefone(telefone) {
        if (telefone === null || telefone === undefined || telefone.trim() == "") {
            return false;
        }

        const padraoTelefone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
        if (!padraoTelefone.test(telefone)) {
            return false;
        }

        return true;
    }
}