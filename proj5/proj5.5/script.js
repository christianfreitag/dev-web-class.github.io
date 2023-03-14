

//Ao carregar
window.onload = ()=>{
    //pega o formulario
    document.forms.signupForm.onsubmit = validForm;
}

//função para alterar as tabelas quando clicado
function validForm (e){
   let form = e.target
   let formValid = true
   const spanMsgUser = form.user.nextElementSibling;
   const spanMsgEmail = form.email.nextElementSibling;
   const spanMsgPw = form.pw.nextElementSibling;

   spanMsgUser.textContent = ""
   spanMsgEmail.textContent = ""
   spanMsgPw.textContent = ""

   if(form.user.value===""){
    spanMsgUser.textContent = "O usuario deve ser preenchido."
    formValid=false
   }
   if(form.pw.value===""){
    spanMsgPw.textContent = "A senha deve ser preenchida."
    formValid=false
   }
   if(form.email.value===""){
    spanMsgEmail.textContent = "O email deve ser preenchido."
    formValid=false
   }

   return formValid
}