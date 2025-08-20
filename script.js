let count=0;
const textspace = document.getElementById('inputspace');
const counter = document.getElementById('actualcount');

textspace.addEventListener('input', ()=> {
   
    count = textspace.value.length;
    counter.textContent = count;
    
    
})


window.onload = () => {
    textspace.value = "";
    count = 0;
    counter.value = 0;
    
}