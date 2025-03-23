import ModelError from "./ModelError.js"
import Status from "./Status.js"

export default class ViewrStudent{
    #controller
    constructor(controller){
        this.#controller = controller
        this.DOMElements()
        this.intializedFunctions()
        this.inputElements()
    }   

    DOMElements(){
        this.btnEdit = this.getElementsById('btnEdit')
        this.btnDelete = this.getElementsById('btnDelete')
        this.btnAdd = this.getElementsById('btnAdd')
        this.pagination = this.getElementsById('pagination')
        this.modal = this.getElementsById('modal')
        
        this.btnCancel = this.getElementsById('btnCancel')
        this.btnConfirmeEdit = this.getElementsById('btnConfirmeEdit')
        this.btnConfirmeAdd = this.getElementsById('btnConfirmeAdd')
        this.btnConfirmeDelete = this.getElementsById('btnConfirmeDelete')
        this.btnCancelDelete = this.getElementsById('btnCancelDelete')

        this.navMenu = this.getElementsById('navMenu')
        this.btnBack = this.getElementsById('btnBack')
        this.btnNext = this.getElementsById('btnNext')
    }
    
    inputElements(){
        this.name = this.getElementsById('name')
        this.cpf = this.getElementsById('cpf')
        this.email = this.getElementsById('email')
        this.matricula = this.getElementsById('register')
        this.phone = this.getElementsById('phone')
    }

    intializedFunctions(){
        this.btnNext.onclick = nextPagination;
        this.btnBack.onclick = backPagination;
        this.btnAdd.onclick = addStudent;

        this.btnConfirmeDelete.onclick = deleteStudent
        this.btnCancel.onclick = cancelAdd;
        this.btnConfirmeAdd.onclick = confirmeAdd;
        
        this.btnEdit.onclick = edit;
        this.btnConfirmeEdit.onclick = confirmeEdit;
    }

    navegationState(qtdStudents, position){
        this.pagination.textContent = ''
        for(let i = 1; i <= qtdStudents; i++){

            const buttonIndex = document.createElement('button')
            buttonIndex.classList.add("text-gray-700", "px-3", "py-2")
            buttonIndex.textContent = i

            if(buttonIndex.textContent == position){                
                buttonIndex.classList.add("border", "dark:border-gray-600")
            }else{
                buttonIndex.classList.remove("border", "dark:border-gray-600")
            }
            this.pagination.appendChild(buttonIndex)
        }
    }
    
    getController(){
        return this.#controller 
    }
    
    getElementsById(id){
        let element = document.getElementById(id)
        if(element == null){
            throw new ModelError('O elemento ' + element + ' não existe')
        }
        element.viewer = this
        return element
    }

    disabledInputs(isDisabled){
        Object.values({name: this.name, cpf: this.cpf, email: this.email, matricula: this.matricula,phone: this.phone  
        }).forEach(element => { element.disabled = isDisabled;});
    }

    statusNavegation(status){
        if(status == Status.NAVEGATE){
            this.disabledInputs(true); 
            this.modal.classList.remove('hidden')
            this.navMenu.style.display = 'flex'
            this.btnAdd.classList.remove('hidden')
            this.btnCancel.classList.add('hidden')
            this.btnConfirmeAdd.classList.add('hidden')
            this.btnConfirmeEdit.classList.add("hidden")
        }

        if(status == Status.EDITING){
            this.disabledInputs(false);
            this.matricula.disabled = true; 

            this.navMenu.style.display = 'none'
            this.btnAdd.classList.add('hidden')
            this.btnConfirmeEdit.classList.remove('hidden')
            this.btnCancel.classList.remove('hidden')
        }


        if(status == Status.ADD){
            this.disabledInputs(false)
            
            this.modal.classList.add('hidden')
            this.navMenu.style.display = 'none'
            this.btnAdd.classList.add('hidden')
            this.btnConfirmeAdd.classList.remove('hidden')
            this.btnCancel.classList.remove('hidden')

            this.name.value = ""
            this.cpf.value = ""     
            this.matricula.value = ""
            this.phone.value = ""
            this.email.value = ""
        }
   
    }

    displayStudents(student, qtd, position){     
        this.navegationState(qtd, position)
        if(student == null){
            console.log('Não existem alunos para listar');
        }else{      
            this.email.value = student.getEmail();
            this.cpf.value = student.getCpf();
            this.phone.value = student.getTelefone();
            this.name.value = student.getNome();
            this.matricula.value = student.getMatricula();
        }
    }
}

function nextPagination(){
    this.viewer.getController().nextPosition()
}
function backPagination(){
    this.viewer.getController().backPosition()
}
function addStudent(){
    this.viewer.getController().initAdd()
}
function cancelAdd(){
    this.viewer.getController().cancelAdd()
}
function edit(){
    this.viewer.getController().initUpdate()
}

function confirmeAdd(){ 
    const matricula = this.viewer.matricula.value
    const cpf = this.viewer.cpf.value
    const nome = this.viewer.name.value
    const email = this.viewer.email.value 
    const telefone = this.viewer.phone.value
    
    this.viewer.getController().add(matricula, cpf, nome, email, telefone)
}

function deleteStudent(){
    const matricula = this.viewer.matricula.value
    const cpf = this.viewer.cpf.value
    const nome = this.viewer.name.value
    const email = this.viewer.email.value 
    const telefone = this.viewer.phone.value

    this.viewer.getController().delete(matricula, cpf, nome, email, telefone)
}

function confirmeEdit(){
    const matricula = this.viewer.matricula.value
    const cpf = this.viewer.cpf.value
    const nome = this.viewer.name.value
    const email = this.viewer.email.value 
    const telefone = this.viewer.phone.value

    this.viewer.getController().edit(matricula, cpf, nome, email, telefone)
}

