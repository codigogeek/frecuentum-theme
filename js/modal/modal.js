const MODAL = document.querySelector('.modal-container');
const BotonModal = document.querySelector(".formulario-link");

BotonModal.addEventListener("click", () => {
    MODAL.classList.add('modal-show');
})

const cerraModal = document.querySelector(".closed-1");
cerraModal.addEventListener("click",()=>{
    MODAL.classList.remove("modal-show")
}) 

// modal 2
const Modal2 = document.querySelector('.modal-2');
const BotonModal2 = document.querySelector(".mod2");

BotonModal2.addEventListener("click", () => {
    Modal2.classList.add('modal-show');
    MODAL.classList.remove('modal-show');
})
const cerraModal2 = document.querySelector(".closed-2");
cerraModal2.addEventListener("click",()=>{
    Modal2.classList.remove("modal-show")
}) 

// modal NO
const ModalNo = document.querySelector('.modalNo');
const BotonModalNo = document.querySelector(".modNo");

BotonModalNo.addEventListener("click", () => {
    ModalNo.classList.add('modal-show');
    Modal2.classList.remove('modal-show');
})

const cerraModalNo = document.querySelector(".closed-no");
cerraModalNo.addEventListener("click",()=>{
    ModalNo.classList.remove("modal-show")
}) 
// modal 3
const Modal3 = document.querySelector('.modal-3');
const BotonModal3 = document.querySelector(".mod3");

BotonModal3.addEventListener("click", () => {
    Modal3.classList.add('modal-show');
    Modal2.classList.remove('modal-show');
})

const cerraModal3 = document.querySelector(".closed-3");
cerraModal3.addEventListener("click",()=>{
    Modal3.classList.remove("modal-show")
}) 

// modal 4 - repetible
const modales = (Modal4,BotonModal4,Modal3,ModalNo,Modal2,cerraModal4)=>{
    BotonModal4.forEach(function(click){
        click.addEventListener("click",function(){
            Modal4.classList.add("modal-show");
            Modal3.classList.remove('modal-show');
            ModalNo.classList.remove('modal-show');
            Modal2.classList.remove('modal-show');
        })
    })
    cerraModal4.addEventListener("click",()=>{
        Modal4.classList.remove("modal-show")
    }) 
}
const Modal4 = document.querySelector('.modal-4');
const BotonModal4 = document.querySelectorAll(".mod4");
const cerraModal4 = document.querySelector(".closed-4");

modales(Modal4,BotonModal4,Modal3,ModalNo,Modal2,cerraModal4)

// metodo para cambiar de modales, dando enter // modal 5
const nombreInput = document.querySelector('.nombre-input');
nombreInput.addEventListener("keydown", (e) =>{
    if(e.key === "Enter" && nombreInput.value !== ''){
        Modal5.classList.add('modal-show');
        Modal4.classList.remove('modal-show');
        const nombre = document.getElementById("nombre").value;
        localStorage.setItem("nombre",nombre)
        nombreInput.value = "";
    }
})

const Modal5 = document.querySelector('.modal-5');
 const cerraModal5 = document.querySelector(".closed-5");
 cerraModal5.addEventListener("click",()=>{
     Modal5.classList.remove("modal-show")
}) 

// modal 6
const empresaInput = document.querySelector('.empresa-input');
empresaInput.addEventListener("keydown", (e) =>{
    if(e.key === "Enter" && empresaInput.value !== ''){
        Modal6.classList.add('modal-show');
        Modal5.classList.remove('modal-show');
        const empresa = document.getElementById("empresa").value;
        localStorage.setItem("empresa",empresa)
        empresaInput.value = "";
        console.log("con esto cambiaremos de modal")
    }
})
const Modal6 = document.querySelector('.modal-6');

const cerraModal6 = document.querySelector(".closed-6");
cerraModal6.addEventListener("click",()=>{
    Modal6.classList.remove("modal-show")
    Modal6.classList.remove('modal-show');
}) 

// modal 7
const numeroInput = document.querySelector('.num-input');
numeroInput.addEventListener("keydown", (e) =>{
    if(e.key === "Enter" && numeroInput.value !== ''){
        Modal7.classList.add('modal-show');
        Modal6.classList.remove('modal-show');
        const contacto = document.getElementById("contacto").value;
        localStorage.setItem("contacto",contacto);
        numeroInput.value = "";
        console.log("con esto cambiaremos de modal")
        let informacion = {
            empresa: localStorage.getItem("empresa"),
            correo: localStorage.getItem("correo"),
            contacto: localStorage.getItem("contacto")
        }
        JSON.stringify(informacion);
        insertData(informacion);
    }
})
const Modal7 = document.querySelector('.modal-7');

const cerraModal7 = document.querySelector(".closed-7");
cerraModal7.addEventListener("click",()=>{
    Modal7.classList.remove("modal-show")
}) 

// modal 8
const correoInput = document.querySelector('.correo-input');
correoInput.addEventListener("keydown", (e) =>{
    if(e.key === "Enter" && correoInput.value !== ''){
        Modal8.classList.add('modal-show');
        Modal7.classList.remove('modal-show');
        const correo = document.getElementById("correo").value;
        localStorage.setItem("correo",correo);
        correoInput.value = "";
        console.log("con esto cambiaremos de modal")
    }
})
const Modal8 = document.querySelector('.modal-8');

const cerraModal8 = document.querySelector(".closed-8");
cerraModal8.addEventListener("click",()=>{
    Modal8.classList.remove("modal-show")
}) 


// Evento para enviar los datos al calendario
const ModalEvent = document.querySelector('.modal-envent-calendar');
const BotonModalEvent= document.querySelector(".event-calendar");

BotonModalEvent.addEventListener("click", () => {
    ModalEvent.classList.add('modal-show');
    Modal8.classList.remove('modal-show');
})

const cerrarEvent = document.querySelector(".closed-event");
cerrarEvent.addEventListener("click",()=>{
    ModalEvent.classList.remove("modal-show")
})


// Modal Final
const ModalFinal = document.querySelector('.modal-final');
const BotonFin= document.querySelector(".mod-fin");

BotonFin.addEventListener("click", () => {
    ModalFinal.classList.add('modal-show');
    ModalEvent.classList.remove('modal-show');
    localStorage.clear();
})

const cerraFin = document.querySelector(".closed-fin");
cerraFin.addEventListener("click",()=>{
    ModalFinal.classList.remove("modal-show")
}) 