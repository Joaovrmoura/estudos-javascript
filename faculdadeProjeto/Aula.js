import ModelError from "./ModelError.js";

class Aula {
    #id_aula;
    #descricao;
    #duracao;
    #conteudo;

    constructor(id_aula, descricao, duracao, conteudo) {
        this.setIdAula(id_aula);
        this.setDescricao(descricao);
        this.setDuracao(duracao);
        this.setConteudo(conteudo);
    }

    //==================== Getters ====================//

    getIdAula() {
        return this.#id_aula;
    }
     //-----------------------------------------------------------------------------------------//

    getDescricao() {
        return this.#descricao;
    }

    //-----------------------------------------------------------------------------------------//

    getDuracao() {
        return this.#duracao;
    }

    //-----------------------------------------------------------------------------------------//

    getConteudo() {
        return this.#conteudo;
    }

    //==================== Setters ====================//

    setIdAula(id) {
        if (!Aula.validarId(id)) {
            throw new ModelError("ID da aula inválido: " + id);
        } else {
            this.#id_aula = id;
        }
    }

   //-----------------------------------------------------------------------------------------//

    setDescricao(descricao) {
        if (!Aula.validarDescricao(descricao)) {
            throw new ModelError("Descrição da aula inválida: " + descricao);
        } else {
            this.#descricao = descricao;
        }
    }

    //-----------------------------------------------------------------------------------------//

    setDuracao(duracao) {
        if (!Aula.validarDuracao(duracao)) {
            throw new ModelError("Duração da aula inválida: " + duracao);
        } else {
            this.#duracao = duracao;
        }
    }

   //-----------------------------------------------------------------------------------------//

    setConteudo(conteudo) {
        if (!Aula.validarConteudo(conteudo)) {
            throw new ModelError("Conteúdo da aula inválido: " + conteudo);
        } else {
            this.#conteudo = conteudo;
        }
    }

    //==================== Validações ====================//

    static validarId(id_aula) {
        if (typeof id_aula === 'number' && id_aula > 0) {
            return true;
        }
        return false
    }

    //-----------------------------------------------------------------------------------------//


    static validarDescricao(descricao) {
        if (typeof descricao != 'string' || descricao.trim() == "" || descricao.length > 300) {
            return false;
        }

        const padraoDescricao = /^[A-Za-zÀ-ÿ0-9\s\-.,!?]+$/;
        if (!padraoDescricao.test(descricao.trim())) {
            return false;
        }

        return true;
    }

    //-----------------------------------------------------------------------------------------//


    static validarDuracao(duracao) {
        if (typeof duracao === 'number' && duracao > 0 && duracao <= 600) {
            return true;
        } else {
            return false;
        }
    }

    //-----------------------------------------------------------------------------------------//

    static validarConteudo(conteudo) {
        if (typeof conteudo != 'string' || conteudo.trim() == "" || conteudo.length > 1000) {
            return false;
        }

        const padraoConteudo = /^[A-Za-zÀ-ÿ0-9\s\-.,!?()]+$/;
        if (!padraoConteudo.test(conteudo.trim())) {
            return false;
        }

        return true;
    }
}
