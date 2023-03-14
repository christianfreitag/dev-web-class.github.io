


function trocarfoto(e){
    if(e.src.split("/")[e.src.split("/").length-1]=="Morpheus.png"){
        e.src="./images/Morpheus2.png"
    }
    else if(e.src.split("/")[e.src.split("/").length-1]=="Morpheus2.png"){
        e.src="./images/Morpheus.png"
    }
}


function escondertopico(e){
    var a = e.nextElementSibling
    a.style.display= "none"

}

function mostrartopico(e){
    var a = e.nextElementSibling
    a.style.display= "block"
}
