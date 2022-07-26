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

        const campoValido = this.isValid();
        const senhaValida = this.isPassword();
        const names = this.isNames();

        if(campoValido && senhaValida && names){
            alert("Formulario enviado!")
            this.formulario.submit();
        }
    }

    isNames(){
        let valid = true;

        const nome = this.formulario.querySelector(".nome");
        const sobrenome = this.formulario.querySelector(".sobrenome");

        if(nome.value.length < 2 ){
            this.criaErro(nome, "nome inválido!");

            valid = false;
        }
        if(sobrenome.value.length < 2 ){
            this.criaErro(sobrenome, "sobrenome inválido!");

            valid = false;
        }
        if(sobrenome.value == nome.value){
            this.criaErro(sobrenome, "sobrenome igual ao nome!");

            valid = false;
        }
        if(nome.value.match(/^[1-9]+$/g)){
            this.criaErro(nome, "Digite somente letras!");

            valid = false;
        }
        if(sobrenome.value.match(/^[1-9]+$/g)){
            this.criaErro(sobrenome, "Digite somente letras!");

            valid = false;
        }

        return valid
    }

    isValid(){
        let valid = true;

        for(let erroText of this.formulario.querySelectorAll(".erro-text")){
            erroText.remove();
        }

        for(let campo of this.formulario.querySelectorAll(".validar")){
            const label = campo.previousElementSibling.innerText;

            if(!campo.value){
                this.criaErro(campo, `${label} vazio!`);
                valid = false;
            }

            if(campo.classList.contains("usuario")) {
                if(!this.validaUsuario(campo)) valid = false;
            }

            
        }

        return valid;
    }

    isPassword() {
        let valid = true;

        const senha = this.formulario.querySelector(".senha");
        const rsenha = this.formulario.querySelector(".rsenha");

        if(senha.value !== rsenha.value) {
            this.criaErro(rsenha, "Senha diferente!");
            valid = false;
        }

        if(senha.value.length < 6){
            this.criaErro(senha, "Senha fraca!");

            valid = false;
        }

        return valid;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 5) {
            this.criaErro(campo, "muito curto!" );
            valid = false;
        }
        if(usuario.length > 12) {
            this.criaErro(campo, `muito longo!` );

            valid = false;
        }
        if(!usuario.match(/^[a-zA-Z1-9]+$/g)) {
            this.criaErro(campo, `Apenas letras e números!` );

            valid = false;
        }

        return valid;
    }

    criaErro(campo, msg){
        const div = document.createElement("div");
        div.innerHTML = msg;
        div.classList.add("erro-text");

        campo.insertAdjacentElement("afterend", div);
    }
}

const valida = new Valida(); 