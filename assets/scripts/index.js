// Menu

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const blurHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50? header.classList.add('blur-header') : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)


// Email

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm('service_j67mtzg', 'template_6gmimri', '#contact-form', 'we8f6gwEkw7DSCt8p')
    .then (() => {
        contactMessage.textContent = 'Message sent successfully'
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Message not sent (service error)'
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
    })
}

contactForm.addEventListener('submit', sendEmail)

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 700 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)


const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)