
export default class StudentDTO{
    #nome
    #matricula
    #cpf
    #telefone
    #email

    constructor(aluno){
        this.#nome = aluno.getNome()
        this.#cpf = aluno.getCpf()
        this.#email = aluno.getEmail()
        this.#matricula = aluno.getMatricula()
        this.#telefone = aluno.getTelefone()
    }

    getCpf() { return this.#cpf; }

    getNome() { return this.#nome; }

    getEmail() { return this.#email }

    getMatricula() { return this.#matricula }

    getTelefone() { return this.#telefone }

    toJSON() {
        return '{ ' +
          '"matricula" : "' + this.#matricula + '",' 
          '"cpf" : "'       + this.#cpf + '",' 
          '"nome" : "'      + this.#nome + '",' 
          '"email" : "'     + this.#email + '",' 
          '"telefone" : "'  + this.#telefone + '"' 
          '}';
      }
}