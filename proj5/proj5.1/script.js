
function trocarfoto(e){
    
    if(e.src.split("/")[e.src.split("/").length-1]=="Morpheus.png"){
        e.src="./images/Morpheus2.png"
    }
    else if(e.src.split("/")[e.src.split("/").length-1]=="Morpheus2.png"){
        e.src="./images/Morpheus.png"
    }
}
