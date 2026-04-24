function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            section.classList.add('active');
        }
    });
});

// Sparkles
const landing = document.getElementById('landing');

for(let i = 0; i < 30; i++){
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.width = `${Math.random()*5 + 3}px`;
    sparkle.style.height = sparkle.style.width;
    sparkle.style.left = `${Math.random()*100}%`;
    sparkle.style.top = `${Math.random()*100}%`;
    landing.appendChild(sparkle);
}