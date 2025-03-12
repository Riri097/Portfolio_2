let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.classList.add('hide');
    } else {
        navbar.classList.remove('hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

function toggleMenu() {
    const navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const viewWorkButton = document.querySelector('.home-btn .btn-1');
    if (viewWorkButton) {
        viewWorkButton.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#project').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const hireMeButton = document.querySelector('.about-hire-me');
    if (hireMeButton) {
        hireMeButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = "mailto:chaulagain.rija@gmail.com?subject=Hiring Inquiry&body=Hello Rija,";
        });
    }

    const sendMessageButton = document.querySelector('.about-send-message-btn');
    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = "mailto:chaulagain.rija@gmail.com?subject=Message from Portfolio&body=Hello Rija,";
        });
    }

    const viewProjectButtons = document.querySelectorAll('.project-card a');
    if (viewProjectButtons) {
        viewProjectButtons.forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                const projectLink = button.getAttribute('href');
                if (projectLink && projectLink !== '#') {
                    window.open(projectLink, '_blank');
                }
            });
        });
    }
});