// Menu
let sobreMi = document.getElementById("sobreMi");
let getFormacion = document.getElementById("getFormacion");
let getContacto = document.getElementById("getContacto");

// Sections
let yo = document.getElementById("yo");
let formacion = document.getElementById("formacion");
let contacto = document.getElementById("contacto");

function removeClass() {
    // Pestaña
    sobreMi.classList.remove('selector');
    getFormacion.classList.remove('selector');
    getContacto.classList.remove('selector');
    // Sections
    yo.classList.remove('descripcion');
    formacion.classList.remove('descripcion');
    contacto.classList.remove('descripcion');
}

sobreMi.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        yo.classList.add('descripcion');
        sobreMi.classList.add('selector');
    }

});
getFormacion.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        formacion.classList.add('descripcion');
        getFormacion.classList.add('selector');
    }
})
getContacto.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        contacto.classList.add('descripcion');
        getContacto.classList.add('selector');
    }
})