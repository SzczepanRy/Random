

function func(){
    let text = document.getElementById("Text").textContent
    if (text == "hey"){
        document.getElementById("Text").textContent="helloo there"
        
    }
    else{
    document.getElementById("Text").textContent="hey"}

}
document.getElementById("Main").addEventListener("click",func)
