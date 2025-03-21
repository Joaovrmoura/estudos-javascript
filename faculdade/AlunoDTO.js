import ModelError from "./ModelError.js";
import Aluno from "./Aluno.js";

// DTO --> Data Transfer Object. É um objeto que é repassado para a camada Viewer
// para exibição de seus dados na interface com o usuário. Não passamos para o Viewer
// o objeto 'oficial', pois senão esse teria o poder de usar os métodos 'set' sem que
// o Controlador soubesse. Assim, passamos um objeto sem os métodos 'set' para o 
// Viewer. Outra facilidade (não utilizada neste exemplo) é enviar dados dos objetos 
// associados já prontos para a exibição (ex. Objeto Turma com a lista de nomes de alunos)
//

export default class AlunoDTO {
    
  //-----------------------------------------------------------------------------------------//

  #matricula;
  #cpf;
  #nome;
  #email;
  #telefone;  
  
  constructor(aluno) {
    this.#matricula = aluno.getMatricula();
    this.#cpf = aluno.getCpf();
    this.#nome = aluno.getNome();
    this.#email = aluno.getEmail();
    this.#telefone = aluno.getTelefone();      
  }
  
  //-----------------------------------------------------------------------------------------//

  getMatricula() {
    return this.#matricula;
  }
  
  //-----------------------------------------------------------------------------------------//

  getCpf() {
    return this.#cpf;
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
    
  //-----------------------------------------------------------------------------------------//
   
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