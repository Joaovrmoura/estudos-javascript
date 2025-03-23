"use strict";

import Aluno from "./Aluno.js";
import ViewrStudent from "./ViewerStudent.js";
import StudentDTO from "./studentDTO.js";
import DaoAluno from "./DaoAluno.js";
import ModelError from "./ModelError.js";
import Status from "./Status.js"

export default class ControllerStudent{
    #viwer
    #dao
    #position
    #status

    constructor(){
        this.#viwer = new ViewrStudent(this)
        this.#dao = new DaoAluno()
        this.#position = 1
        this.#updatePosition()
    }
    
    async #updatePosition(){
        let conjAlunos = await this.#dao.obterAlunos();

        this.#status = Status.NAVEGATE
        this.#viwer.statusNavegation(this.#status) 
        
        if(conjAlunos.length == 0){
            this.#position = 0
            conjAlunos = null
        }else{
            if(this.#position == 0 || this.#position > conjAlunos.length) this.#position = 1

            console.log(this.#position);
            let student = new StudentDTO(conjAlunos[this.#position - 1])
            let numStudents = conjAlunos.length
            this.#viwer.displayStudents(student, numStudents, this.#position)
        }
    }

    async nextPosition(){
        let conjAlunos = await this.#dao.obterAlunos()
        if(this.#position < conjAlunos.length) this.#position++ 
        this.#updatePosition()  
    }

    async backPosition(){
        if(this.#position > 1) this.#position--     
        this.#updatePosition()  
    }

    cancelAdd(){
        this.#updatePosition()  
    }

    updatePosition(position){
        this.#position = position
    }

    initUpdate(){
        this.#status = Status.EDITING
        this.#viwer.statusNavegation(this.#status)
    }

    initAdd(){
        this.#status = Status.ADD
        this.#viwer.statusNavegation(this.#status) 
    }

    async add(matr, cpf, nome, email, telefone){
        if(this.#status == Status.ADD){
            try{
                this.#status = Status.ADD
                const aluno = new Aluno(matr, cpf, nome, email, telefone)
                console.log(aluno);
                await this.#dao.incluir(aluno)
                this.#updatePosition()
                // const add = await this.#dao.incluir()
            }catch(error){
            alert(error)
            }
        }
    }

    async delete(matr){
        try{
            let stundet = await this.#dao.obterAlunoPelaMatricula(matr)
            if(stundet == null){
                alert("Aluno com a matrícula " + matr + " não encontrado.");
            }else{
                await this.#dao.excluir(stundet)
                this.#updatePosition()
            }
        }catch(error){
            alert(error)
        }
    }



    async edit(matr, cpf, nome, email, telefone){
        if(this.#status == Status.EDITING){
            try{
                let stundet = await this.#dao.obterAlunoPelaMatricula(matr)
                if(stundet == null){
                    alert("Aluno com a matrícula " + matr + " não encontrado.");
                }else{
                    stundet.setCpf(cpf)
                    stundet.setNome(nome)
                    stundet.setEmail(email)
                    stundet.setTelefone(telefone)
                    console.log(stundet);
                    await this.#dao.alterar(stundet)
                    this.#updatePosition()
                }
                
                // const add = await this.#dao.incluir()
            }catch(error){
                alert(error)
            }
       }
    }
}


