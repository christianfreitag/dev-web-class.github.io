
window.onload =()=>{
    //Pegando elemnto do botão da DOM
    const btAdd = document.querySelector("button")
    const toDoField = document.querySelector("#tarefa")
    
    //caso botão adicionar tenha sido apertado.
    btAdd.addEventListener('click',addTask)
    //Um evento para detectar caso tenha sido apertada a tecla enter
    toDoField.addEventListener('keyup',(e)=>{
        //aqui é verificado se apertou o enter
        if(e.key==='Enter'){
            addTask()
        }
    })
    
}

const addTask = () =>{
    //Pegando campo de texto da DOM para pegar seu valor atribuido e posteriormente adicionar na <ol>
    const toDoField = document.querySelector("#tarefa")
    //verificando se campo não esta vazio
    if(toDoField.value.trim()){
        //Pegando lista de tarefas da DOM
        const listTasks = document.querySelector("ol");
        //Cria novo elemento <li>
        const newTask = document.createElement('li')

        //cria dois novos elementos, o span, para o texto, e um botão para apagar.
        const newSpan = document.createElement('span')
        const newCloseBt = document.createElement('button')

        //atribui o X ao botão, e ao newSpan atribui o valor do toDoField, que é o texto da tarefa
        newCloseBt.textContent = '✖'
        newSpan.textContent = toDoField.value;

        //Adiciona esses elementos ao newTask
        newTask.appendChild(newSpan)
        newTask.appendChild(newCloseBt)
        
        //Adiciona o novo li ao elemento <ol> da DOM
        listTasks.appendChild(newTask)

        //cria um evento de click, então ele cria um elemento ja com um evento que quando ele for criado, pode acontecer de o botão
        //ser clicado e ele auto se apagar
        newCloseBt.onclick = () =>{
            listTasks.removeChild(newTask)
        }

        //reseta valor pra nada da caixa de texto
        toDoField.value = '';
    }
}