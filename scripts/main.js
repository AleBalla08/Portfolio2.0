const btnToggle = document.getElementById('btn-toggle-menu');
const menuToggle = document.querySelector('.menu-toggle')
const cabecalho = document.querySelector('.cabecalho')
const scrollBtn = document.getElementById('scroll-btn')
const aboutBtn = document.getElementById('about-btn')
const projBtn = document.getElementById('projects-btn')
const homeBtn = document.getElementById('home-btn')
const projImage = document.querySelectorAll('.project-image')




c=1
btnToggle.addEventListener('click', ()=>{
    if(c===1){
        menuToggle.classList.add('toggle')
        cabecalho.classList.add('toggle-btn')
        c +=1 
    }
    else if(c>1){
        menuToggle.classList.remove('toggle')
        cabecalho.classList.remove('toggle-btn')
        c -=1 

    }
})

document.querySelectorAll('.tooltip-container').forEach(container => {
    const tooltipText = container.getAttribute('data-tooltip')


    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip'
    tooltip.textContent = tooltipText

    container.appendChild(tooltip);

    container.addEventListener('mouseenter', ()=>{
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
    })

    container.addEventListener('mouseleave', ()=>{
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    })
})

scrollBtn.addEventListener('click', ()=>{
    let windowHeight = window.innerHeight;
    let currentPosition = window.scrollY;
    let nextPosition = currentPosition + windowHeight


    window.scrollTo({
        top: nextPosition, 
        behavior: 'smooth'
    });
})

aboutBtn.addEventListener('click', () => {
    const aboutPage = document.getElementById('about-page');
    aboutPage.scrollIntoView({
        behavior: 'smooth'
    });
});

projBtn.addEventListener('click', () => {
    const projectsPage = document.getElementById('projects-page');
    projectsPage.scrollIntoView({
        behavior: 'smooth'
    });
});

homeBtn.addEventListener('click', ()=>{
    const top = document.querySelector('.container')
    top.scrollIntoView({
        behavior: 'smooth'
    });
})



projImage.forEach((element) => {
    element.addEventListener('mouseover', () => {
        if (element.classList.contains('img-left')) {
            const hover = document.querySelector('.text-image-left');
            hover.classList.add('show');
        } else if (element.classList.contains('img-right') ){
            const hover = document.querySelector('.text-image-right');
            hover.classList.add('show');
        }
    });

    element.addEventListener('mouseout', () => {
        if (element.classList.contains('img-left')) {
            const hover = document.querySelector('.text-image-left');
            hover.classList.remove('show')
        } else if (element.classList.contains("img-right")) {
            const hover = document.querySelector('.text-image-right');
            hover.classList.remove('show');
        }
    });
});



