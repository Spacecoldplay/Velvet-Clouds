document.querySelector('.burger').addEventListener('click', function (){
    this.classList.toggle('active');
    document.querySelector('.navbar-menu').classList.toggle('active');
} )