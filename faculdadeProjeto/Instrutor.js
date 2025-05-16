import ModelError from "./ModelError.js";

class Instrutor {
    #id_instrutor;
    #nome;
    #email;
    #telefone;

    constructor(id_instrutor, nome, email, telefone) {
        this.setIdInstrutor(id_instrutor);
        this.setNome(nome);
        this.setEmail(email);
        this.setTelefone(telefone);
    }

    //==================== Getters ====================//

    getIdInstrutor() {
        return this.#id_instrutor;
    }

    //-----------------------------------------------------------------------------------------//

    getNome() {
        return this.#nome;
    }

    //-----------------------------------------------------------------------------------------//

    getEmail() {
        return this.#email;
    }

    //-----------------------------------------------------------------------------------------//

    getTelefone() {
        return this.#telefone;
    }

    //==================== Setters ====================//

    setIdInstrutor(id) {
        if (!Instrutor.validarId(id)) {
            throw new ModelError("ID do instrutor inválido: " + id);
        } else {
            this.#id_instrutor = id;
        }
    }

    //-----------------------------------------------------------------------------------------//

    setNome(nome) {
        if (!Instrutor.validarNome(nome)) {
            throw new ModelError("Nome do instrutor inválido: " + nome);
        } else {
            this.#nome = nome;
        }
    }

    //-----------------------------------------------------------------------------------------//

    setEmail(email) {
        if (!Instrutor.validarEmail(email)) {
            throw new ModelError("E-mail inválido: " + email);
        } else {
            this.#email = email;
        }
    }

    //-----------------------------------------------------------------------------------------//

    setTelefone(telefone) {
        if (!Instrutor.validarTelefone(telefone)) {
            throw new ModelError("Telefone inválido: " + telefone);
        } else {
            this.#telefone = telefone;
        }
    }

    //==================== Validações ====================//

    static validarId(id) {
        if (typeof id === 'number' && id > 0) {
            return true;
        } else {
            return false;
        }
    }

    //-----------------------------------------------------------------------------------------//

    static validarNome(nome) {
        if (typeof nome != 'string' || nome.trim() == "" || nome.length > 100) {
            return false;
        }

        const padraoNome = /[A-Z][a-z] */;
        if (!padraoNome.test(nome)) {
            return false;
        }

        return true;
    }

    //-----------------------------------------------------------------------------------------//

    static validarEmail(email) {
        if (typeof email != 'string' || email.trim() == "" || email.trim().length > 100) {
            return false;
        }        

        const padraoEmail = /[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}/;
        if (!padraoEmail.test(email)) {
            return false;
        }

        return true;
    }

    //-----------------------------------------------------------------------------------------//

    static validarTelefone(telefone) {
        if (typeof telefone != 'string' || telefone.trim() == "" || telefone.trim().length > 21) {
            return false;
        }

        const padraoTelefone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
        if (!padraoTelefone.test(telefone)) {
            return false;
        }

        return true;
    }
}
