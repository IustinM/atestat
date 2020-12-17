
const navSlide = () =>{
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const nav = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click' , () =>{
        navLinks.classList.toggle('nav-active');
        //animate links

        burger.classList.toggle('toggle');
    });


}


navSlide()