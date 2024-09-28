document.getElementById("buttonText").addEventListener("click", function(){
    const text = document.getElementById("inputText").value 
     localStorage.setItem("data", text);
     limpiarCampo();
    
})
    function limpiarCampo(){
   
    document.getElementById("inputText").value = "";
}

