const params = new URLSearchParams(window.location.search);
const projectsId = parseInt(params.get('id'));

var projects = [
    { id: 1, img: 'assets/proj1/projeto1.png', small1: 'assets/proj1/proj1-small1.png', small2: 'assets/proj1/proj1-small2.png', small3: 'assets/proj1/proj1-small3.png', title: "Sticky NotePad", description: "Este projeto é um aplicativo dinâmico de bloco de notas arrastar e soltar, criado usando HTML, CSS e JavaScript. O aplicativo permite que os usuários criem post-its personalizáveis ​​e interajam com eles de maneira flexível e fácil de usar.", url: 'https://aleballa08.github.io/Drag-Drop---sticky-note-system/', urlRepo: 'https://github.com/AleBalla08/Drag-Drop---sticky-note-system' },
    { id: 2, img: 'assets/projeto2.png', small1: '', small2: '', small3: '', title: "Pomodoro Timer", description: "Este temporizador Pomodoro, desenvolvido com HTML, CSS e JavaScript, ajuda os usuários a aumentar a produtividade combinando temporizadores de foco e gerenciamento de tarefas. Possui três temporizadores personalizáveis ​​(Trabalho, Pausa Curta, Pausa Longa), música de fundo calmante e uma lista de tarefas totalmente funcional com recursos de Criar, Ler, Atualizar e Excluir (CRUD). O design intuitivo do aplicativo, as interações suaves e a interface sofisticada demonstram minha capacidade de fornecer soluções práticas e fáceis de usar usando técnicas modernas de desenvolvimento web.", url: 'https://aleballa08.github.io/StudyTimer/', urlRepo: 'https://github.com/AleBalla08/StudyTimer' },
    { id: 3, img: 'assets/projeto3.png', small1: '', small2: '', small3: '', title: "Cara - Ecommerce", description: "Este E-commerce foi construído utilizando design UI/UX, responsividade Mobile, Tablet e Computador. O site conta com a requisição de uma API (FakeStoreAPI), além de outras tecnicas avançadas de JavaScript. Constando com todas as funcionalidades que um E-commerce padrão dev ter, este site representa bem a minha capacidade de desenvolvimento voltado para a experiência do usuário, assim como a resolução de problemas.", url: 'aindaNaoFunciona.com', urlRepo: 'https://github.com/AleBalla08/E-Commerce' }
]

if (!projectsId) {
    console.error('Nenhum ID encontrado na URL');
}

const localprojects = projects.find(item => item.id === projectsId);

if (localprojects) {
    renderprojectsDetails(localprojects);

}

function renderprojectsDetails(project) {
    const projectsDetails = document.getElementById('project-container');

    projectsDetails.innerHTML = `
        <div class="project-img-cont">
            <img class="project-img" src="${project.img}" alt="">
            <div class="small-proj-img-cont">
                <img class="small-proj-img" src="${project.img}">
                <img class="small-proj-img" src="${project.small1}">
                <img class="small-proj-img" src="${project.small2}">
                <img class="small-proj-img" src="${project.small3}">
                
            </div>
        </div>
        <div class="project-text">
            <h1>${project.title}</h1>
            <h2>${project.title}</h2>
            <h3>${project.description}</h3>
            <div style="display: flex; flex-direction: row; gap: 20px;">
                <a href="${project.url}"><button>Acesse o Projeto</button></a>
                <a href="${project.urlRepo}"><button style="padding: 1em 2em !important;">Acesse o Repositório</button></a>
            </div>

        </div>
    `;
}


const smallProjImg = document.querySelectorAll('.small-proj-img')
const mainIMg = document.querySelector('.project-img')

smallProjImg.forEach(element => {
    element.addEventListener('click', () => {
        mainIMg.src = element.src
    })
})

// carrossel aqui








