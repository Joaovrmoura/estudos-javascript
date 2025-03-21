import ModelError from "./ModelError.js"

export default class ViewrStudent{
    #controller
    constructor(controller){
        this.#controller = controller
        this.DOMElements()
        this.intializedFunctions()
    }   

    DOMElements(){
        this.name = this.getElementsById('name')
        this.cpf = this.getElementsById('cpf')
        this.email = this.getElementsById('email')
        this.register = this.getElementsById('register')
        this.phone = this.getElementsById('phone')
        this.pagination = this.getElementsById('pagination')
        
        this.edit = this.getElementsById('edit')
        this.delete = this.getElementsById('delete')
        this.btnAdd = this.getElementsById('btnAdd')
        this.btnCancel = this.getElementsById('btnCancel')
        this.btnConfirme = this.getElementsById('btnConfirme')
       
        this.navMenu = this.getElementsById('navMenu')
        this.btnBack = this.getElementsById('btnBack')
        this.btnNext = this.getElementsById('btnNext')
    }
    
    intializedFunctions(){
        this.btnNext.onclick = nextPagination;
        this.btnBack.onclick = backPagination;
        this.btnAdd.onclick = addStudent;
        this.btnCancel.onclick = cancelAdd;
        this.btnConfirme.onclick = confirm;
    }

    navegationState(qtdStudents, position){
        for(let i = 1; i <= qtdStudents; i++){
            this.elementsOfpaganation = document.createElement('button')
            this.elementsOfpaganation.classList.add("position", "text-gray-700", "px-3", "py-2")

            if(i == position){
                this.elementsOfpaganation.classList.add("border", "dark:border-gray-600")
            }else{
                this.elementsOfpaganation.classList.remove("border", "dark:border-gray-600")
            }
            
            this.elementsOfpaganation.innerHTML = i
            this.elementsOfpaganation.classList.add("text-gray-700", "px-3", "py-2")

            if(this.pagination.getElementsByTagName('button').length < qtdStudents){   
                this.pagination.appendChild(this.elementsOfpaganation)       
            }else{
                document.querySelectorAll('.position').forEach(button => {
                    let positionPage = Number(button.textContent)
                    if(positionPage == position){
                        button.classList.add("border", "dark:border-gray-600")
                    }else{
                        button.classList.remove("border", "dark:border-gray-600")
                    }
                })
            }
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

    statusNavegation(status){
        if('navegate'){
            this.name.disabled = true
            this.cpf.disabled = true     
            this.register.disabled = true
            this.phone.disabled = true
            this.email.disabled = true   
            this.navMenu.style.display = 'flex'
            this.btnAdd.classList.remove('hidden')
            this.btnCancel.classList.add('hidden')
            this.btnConfirme.classList.add('hidden')
        } 

        if(status == 'changing'){
            this.name.disabled = false
            this.cpf.disabled = false     
            this.register.disabled = false
            this.phone.disabled = false
            this.email.disabled = false 
        }
        else if(status == 'add'){
            this.name.disabled = false
            this.cpf.disabled = false     
            this.register.disabled = false
            this.phone.disabled = false
            this.email.disabled = false 

            this.navMenu.style.display = 'none'
            this.btnAdd.classList.add("hidden")
            this.btnConfirme.classList.remove("hidden")
            this.btnCancel.classList.remove('hidden')
            this.name.value = ""
            this.cpf.value = ""     
            this.register.value = ""
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
            this.register.value = student.getMatricula();
        }
    }
}

function nextPagination(){
    console.log('next');
    this.viewer.getController().nextPage()
}
function backPagination(){
    console.log('back');
    this.viewer.getController().backPage()
}
function addStudent(){
    this.viewer.getController().addStudent()
}
function cancelAdd(){
    this.viewer.getController().cancelAdd()
}