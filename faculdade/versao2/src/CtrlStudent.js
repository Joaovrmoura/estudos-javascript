"use strict";

import Aluno from "./Aluno.js";
import ViewrStudent from "./ViewerStudent.js";
import StudentDTO from "./studentDTO.js";
import DaoAluno from "./DaoAluno.js";


export default class ControllerStudent{
    #viwer
    #dao
    #dto
    #position
    constructor(){
        this.#viwer = new ViewrStudent(this)
        this.#dao = new DaoAluno()
        this.#position = 1
        this.#updatePosition()
    }
    
    async #updatePosition(){
        let conjAlunos = await this.#dao.obterAlunos();
        this.#viwer.statusNavegation() 
        if(conjAlunos.length == 0){
            this.#position = 0
            conjAlunos = null
        }else{
            if(this.#position == 0 || this.#position > conjAlunos.length){
                this.#position = 0
            } 
            console.log(this.#position);
            this.#viwer.displayStudents(new StudentDTO(conjAlunos[this.#position - 1]), conjAlunos.length, this.#position)
        }
    }
    see(){
        console.log('controller')
    }
    async nextPage(){
        let conjAlunos = await this.#dao.obterAlunos()
        
        if(this.#position < conjAlunos.length){ this.#position++ } 
        this.#updatePosition()  
       
    }
    async backPage(){
        let conjAlunos = await this.#dao.obterAlunos()
        if(this.#position > 1){this.#position-- }     
        this.#updatePosition()  
    }

    addStudent(){
        this.#viwer.statusNavegation('add')
    }

    cancelAdd(){
        this.#updatePosition()
    }
}


