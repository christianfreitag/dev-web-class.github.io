

//Ao carregar
window.onload = ()=>{
    //pega os botões dentro do elemento nav
    bts = document.querySelectorAll('nav button');
    //e define um evento de click para cada um dos botões
    for (let bt of bts){
        //define um listener de click para cada botão
        bt.addEventListener('click',changeTab)
    }
}

//função para alterar as tabelas quando clicado
function changeTab (e){
    //salva o elemento do botão pessionado
    const btPressed = e.target
    //salva o elemento <li> no qual o botão esta contido
    const liBt = btPressed.parentNode;
    //pega todos os elementos li, pegando atraves de um lli, ele pegou o elemento 'pai' e depois todos os seus 'filhos'
    const nodes = Array.from(liBt.parentNode.children)
    //dentre os li, ele pega qual o index daquele li especifico que foi 'pressionado'
    const idxLiBt = nodes.indexOf(liBt)
    //então ele passa esse id para a função opentab, que vai usar o mesmo id para definir qual seção vai ser visivel
    openTab(idxLiBt)
}

function openTab(idxBt){
    //aqui ele pega a tabela visivel
    const tabActive = document.querySelector('.tabActive')
    //verifica se a tabela é diferente de nulo, se for, significa que existe uma tabela ativa, então ele define uma string vazia, assim limpando quaisquer outras ativas
    if(tabActive!==null){
        tabActive.className=""
    }
    //aqui ele faz o mesmo processo mas para o botão ativo.
    const btActive = document.querySelector('.btActive')
    if(btActive!==null){
        btActive.className = ""
    }

    //por fim, utilizando o memso id do botão pressionado ele e define a classe de "ativa" para o elemento assim, destacando ou modificando os elementos afetados.
    document.querySelectorAll('.tabs section')[idxBt].className = 'tabActive'
    document.querySelectorAll('nav button')[idxBt].className="btActive"
}