let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top; 
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("HTML5");
        habilidades[2].classList.add("CSS3");
        habilidades[3].classList.add("Python");
        habilidades[4].classList.add("Photoshop");
        habilidades[5].classList.add("Illustrator");
        habilidades[6].classList.add("AdobeXd");
        habilidades[7].classList.add("Figma");
    }
}



//funcion para animar skills con scrolling
window.onscroll = function(){
    efectoHabilidades();
}

