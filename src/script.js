let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
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


        function openMenu() {
            document.getElementById("mobileMenu").classList.add("active");
        }
        
        function closeMenu() {
            document.getElementById("mobileMenu").classList.remove("active");
        }
        
        
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".btn2").addEventListener("click", function () {
                window.open("resume/Sharmila_Resume.pdf", "_blank");
            });
        
            document.querySelectorAll(".btn1").forEach(button => {
                button.addEventListener("click", function () {
                    window.location.href = "mailto:sarupoudel921@gmail.com?subject=Hiring Inquiry&body=Hello Sharmila,";
                });
            });
            
        });
        document.querySelector(".contact").addEventListener("click", function () {
            document.querySelector("#contact-page").scrollIntoView({ behavior: "smooth" });
        });