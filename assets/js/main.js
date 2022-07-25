class Valida{
    constructor(){
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener("submit", e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("FFFFF");

        const campoValido = this.isValid();
    }

    isValid(){
        let valid = true;

        for(let erroText of this.formulario.querySelectorAll(".erro-text")){
            erroText.remove();
        }

        for(let campo of this.formulario.querySelectorAll(".validar")){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.criaErro(campo, `${label}`);
                valid = false;
            }
        }
    }

    criaErro(campo, msg){
        const div = document.createElement("div");
        div.innerHTML = msg;
        div.classList.add("erro-text");

        campo.insertAdjacentElement("afterend", div);
    }
}

const valida = new Valida(); 