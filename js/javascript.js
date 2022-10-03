function MenuToggle(){
    var id = document.getElementById("responsivo-nav");

    if(id.classList.contains("active")) //caso tenha a classe "active"
        id.classList.remove("active");
    else 
        id.classList.add("active");
}




//Validação Busca produto
function validaPesquisa(){
    if(pesquisa.value.length < 3){
        alert("Pesquisa inválida!")
        pesquisa.focus()
        return false
    }
    formulario.submit()
}