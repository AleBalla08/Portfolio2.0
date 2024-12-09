const btnToggle = document.getElementById('btn-toggle-menu');
const menuToggle = document.querySelector('.menu-toggle')
const cabecalho = document.querySelector('.cabecalho')
const scrollBtn = document.getElementById('scroll-btn')




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
