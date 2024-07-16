document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
        if (e.key ==="Escape")e.target.value = ""
        document.querySelectorAll(".cancion").forEach(lista =>{
            lista.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?lista.classList.remove("filtro")
              :lista.classList.add("filtro")
        })
  
    }
  });
let sections = document.querySelectorAll('section')
let NavLinks = document.querySelectorAll ('header nav a')
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            NavLinks.forEach (links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            }
            )
        }
    })
};