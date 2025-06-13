// Configuração do Firebase - substitua com suas credenciais
const firebaseConfig = {
    apiKey: "AIzaSyBTxQVAXNSw4bEb0n5yyDiLJ0IYdcJDG4Q",
    authDomain: "faeterj-drfo-faculdade-projeto.firebaseapp.com",
    databaseURL: "https://faeterj-drfo-faculdade-projeto-default-rtdb.firebaseio.com",
    projectId: "faeterj-drfo-faculdade-projeto",
    storageBucket: "faeterj-drfo-faculdade-projeto.firebasestorage.app",
    messagingSenderId: "393664081982",
    appId: "1:393664081982:web:e1be305c9c265795ffe16f",
    measurementId: "G-4TFZCD8J7C"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

// Referências do banco de dados
const usuariosRef = database.ref('usuarios');
const cursosRef = database.ref('cursos');
const instrutoresRef = database.ref('instrutores');
const relacoesRef = database.ref('curso_instrutor');

// Elementos DOM
const authStatus = document.getElementById('authStatus');
const authSection = document.getElementById('authSection');
const dashboard = document.getElementById('dashboard');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const alertsContainer = document.getElementById('alertsContainer');

// Elementos para Usuários
const btnCreateUser = document.getElementById('btnCreateUser');
const usersList = document.getElementById('usersList');

// Elementos para Cursos
const btnCreateCurso = document.getElementById('btnCreateCurso');
const cursosList = document.getElementById('cursosList');

// Elementos para Instrutores
const btnCreateInstrutor = document.getElementById('btnCreateInstrutor');
const instrutoresList = document.getElementById('instrutoresList');

// Elementos para Relações
const btnCreateRelacao = document.getElementById('btnCreateRelacao');

// Tabs
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// Estado da aplicação
let currentUser = null;

// Funções de autenticação
function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            currentUser = userCredential.user;
            showAlert('Login realizado com sucesso!', 'success');
            updateAuthUI();
        })
        .catch((error) => {
            showAlert(`Erro ao fazer login: ${error.message}`, 'error');
        });
}

function logout() {
    auth.signOut().then(() => {
        currentUser = null;
        showAlert('Logout realizado com sucesso!', 'success');
        updateAuthUI();
    }).catch((error) => {
        showAlert(`Erro ao fazer logout: ${error.message}`, 'error');
    });
}

// Atualizar UI com base no estado de autenticação
function updateAuthUI() {
    if (currentUser) {
        authStatus.className = 'status-bar authenticated';
        authStatus.innerHTML = `<i class="fas fa-check-circle"></i> Autenticado como: ${currentUser.email} `;
        authSection.style.display = 'none';
        dashboard.style.display = 'block';
        btnLogout.style.display = 'inline-block';

        // Carregar dados
        loadUsers();
        loadCursos();
        loadInstrutores();
    } else {
        authStatus.className = 'status-bar not-authenticated';
        authStatus.innerHTML = `<i class="fas fa-exclamation-circle"></i> Você não está autenticado. Faça login para acessar o sistema.`;
        authSection.style.display = 'block';
        dashboard.style.display = 'none';
        btnLogout.style.display = 'none';
    }
}

// CRUD para Usuários
function createUser(nome, email, funcao) {
    const newUserRef = usuariosRef.push();
    newUserRef.set({
        nome: nome,
        email: email,
        funcao: funcao
    })
        .then(() => {
            showAlert('Usuário criado com sucesso!', 'success');
            loadUsers();
        })
        .catch((error) => {
            showAlert(`Erro ao criar usuário: ${error.message}`, 'error');
        });
}

function loadUsers() {
    usuariosRef.once('value', (snapshot) => {
        usersList.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const user = childSnapshot.val();
            const userId = childSnapshot.key;

            const userItem = document.createElement('div');
            userItem.className = 'entity-item';
            userItem.innerHTML = `
                        <h3>${user.nome}</h3>
                        <p><strong>ID:</strong> ${userId}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Função:</strong> ${user.funcao}</p>
                    `;
            usersList.appendChild(userItem);
        });
    });
}

// CRUD para Cursos (CORRIGIDO)
function createCurso(sigla, nome, descricao, cargaHoraria, categoria, instrutorId) {
    // Verificar se o usuário é admin
    if (currentUserRole !== 'ADMIN') {
        showAlert('Apenas administradores podem criar cursos!', 'error');
        return;
    }

    const newCursoRef = cursosRef.child(sigla);
    newCursoRef.set({
        sigla: sigla,
        nome: nome,
        descricao: descricao,
        cargaHoraria: cargaHoraria,
        categoria: categoria,
        instrutorId: instrutorId || null
    })
        .then(() => {
            showAlert('Curso criado com sucesso!', 'success');
            loadCursos();
        })
        .catch((error) => {
            showAlert(`Erro ao criar curso: ${error.message}`, 'error');
        });
}


function loadCursos() {
    cursosRef.once('value', (snapshot) => {
        cursosList.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const curso = childSnapshot.val();
            const cursoId = childSnapshot.key;

            const cursoItem = document.createElement('div');
            cursoItem.className = 'entity-item';
            cursoItem.innerHTML = `
                        <h3>${curso.nome} (${curso.sigla})</h3>
                        <p><strong>Sigla:</strong> ${cursoId}</p>
                        <p><strong>Categoria:</strong> ${curso.categoria}</p>
                        <p><strong>Carga Horária:</strong> ${curso.cargaHoraria} horas</p>
                        <p><strong>Instrutor ID:</strong> ${curso.instrutorId || 'Nenhum'}</p>
                    `;
            cursosList.appendChild(cursoItem);
        });
    });
}

// CRUD para Instrutores (CORRIGIDO)
function createInstrutor(nome, email, telefone) {
    // Verificar se o usuário é um instrutor
    if (currentUserRole !== 'ADMIN') {
        showAlert('Apenas instrutores podem criar seu perfil!', 'error');
        return;
    }

    // Criar no nó do próprio usuário
    const newInstrutorRef = instrutoresRef.child(currentUser.uid);
    newInstrutorRef.set({
        nome: nome,
        email: email,
        telefone: telefone
    })
        .then(() => {
            showAlert('Perfil de instrutor criado com sucesso!', 'success');
            loadInstrutores();
        })
        .catch((error) => {
            showAlert(`Erro ao criar perfil de instrutor: ${error.message}`, 'error');
        });
}

function loadInstrutores() {
    instrutoresRef.once('value', (snapshot) => {
        instrutoresList.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const instrutor = childSnapshot.val();
            const instrutorId = childSnapshot.key;

            const instrutorItem = document.createElement('div');
            instrutorItem.className = 'entity-item';
            instrutorItem.innerHTML = `
                        <h3>${instrutor.nome}</h3>
                        <p><strong>UID:</strong> ${instrutorId}</p>
                        <p><strong>Email:</strong> ${instrutor.email}</p>
                        <p><strong>Telefone:</strong> ${instrutor.telefone}</p>
                    `;
            instrutoresList.appendChild(instrutorItem);
        });
    });
}

function createRelacao(siglaCurso, uidInstrutor) {
    // Referência para o caminho 'curso_instrutor/siglaCurso/uidInstrutor'
    const relacaoRef = firebase.database().ref(`curso_instrutor/${siglaCurso}/${uidInstrutor}`);

    relacaoRef.set(true)
        .then(() => {
            showAlert('Relação criada com sucesso!', 'success');

            // Atualiza o campo instrutorId do curso (em 'cursos/siglaCurso')
            const cursoRef = firebase.database().ref(`cursos/${siglaCurso}`);

            cursoRef.update({ instrutorId: uidInstrutor })
                .then(() => {
                    console.log('Curso atualizado com instrutorId');
                })
                .catch(error => {
                    showAlert(`Erro ao atualizar curso: ${error.message}`, 'error');
                });

        })
        .catch(error => {
            showAlert(`Erro ao criar relação: ${error.message}`, 'error');
        });
}

// Funções auxiliares
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = message;
    alertsContainer.appendChild(alert);

    // Remover alerta após 5 segundos
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// Event Listeners
btnLogin.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email && password) {
        login(email, password);
    } else {
        showAlert('Por favor, preencha email e senha.', 'error');
    }
});

btnLogout.addEventListener('click', logout);

btnCreateUser.addEventListener('click', () => {
    const nome = document.getElementById('userNome').value;
    const email = document.getElementById('userEmail').value;
    const funcao = document.getElementById('userFuncao').value;

    if (nome && email && funcao) {
        createUser(nome, email, funcao);
    } else {
        showAlert('Por favor, preencha todos os campos.', 'error');
    }
});

btnCreateCurso.addEventListener('click', () => {
    const sigla = document.getElementById('cursoSigla').value;
    const nome = document.getElementById('cursoNome').value;
    const descricao = document.getElementById('cursoDescricao').value;
    const cargaHoraria = document.getElementById('cursoCargaHoraria').value;
    const categoria = document.getElementById('cursoCategoria').value;
    const instrutorId = document.getElementById('cursoInstrutorId').value;

    if (sigla && nome && descricao && cargaHoraria && categoria) {
        createCurso(sigla, nome, descricao, cargaHoraria, categoria, instrutorId);
    } else {
        showAlert('Por favor, preencha todos os campos obrigatórios.', 'error');
    }
});

btnCreateInstrutor.addEventListener('click', () => {
    const nome = document.getElementById('instrutorNome').value;
    const email = document.getElementById('instrutorEmail').value;
    const telefone = document.getElementById('instrutorTelefone').value;

    if (nome && email && telefone) {
        createInstrutor(nome, email, telefone);
    } else {
        showAlert('Por favor, preencha todos os campos.', 'error');
    }
});

btnCreateRelacao.addEventListener('click', () => {
    const cursoId = document.getElementById('relCursoId').value;
    const instrutorId = document.getElementById('relInstrutorId').value;

    if (cursoId && instrutorId) {
        createRelacao(cursoId, instrutorId);
    } else {
        showAlert('Por favor, preencha os IDs do curso e do instrutor.', 'error');
    }
});

// Tab switching
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remover classe ativa de todas as tabs
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Adicionar classe ativa à tab clicada
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(`${tabId}Tab`).classList.add('active');
    });
});

// Verificar estado de autenticação ao carregar a página
auth.onAuthStateChanged((user) => {
    if (user) {
        currentUser = user;

        // Obter a função do usuário
        usuariosRef.child(user.uid).once('value')
            .then((snapshot) => {
                if (snapshot.exists()) {
                    currentUserRole = snapshot.val().funcao;
                    updateAuthUI();
                } else {
                    showAlert('Perfil de usuário não encontrado.', 'error');
                    logout();
                }
            });
    } else {
        currentUser = null;
        currentUserRole = null;
        updateAuthUI();
    }
});

// Inicializar Font Awesome
const faIcons = 
    `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    `;
document.head.insertAdjacentHTML('beforeend', faIcons);