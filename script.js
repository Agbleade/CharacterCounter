let count=0;
const textspace = document.getElementById('inputspace');
const counter = document.getElementById('actualcount');
const wcounter = document.getElementById('wactualcount')
let spaceCount = 0;

textspace.addEventListener('input', ()=> {
   
    count = textspace.value.length;
    counter.textContent = count;
    let trimmed = textspace.value.trimStart();
    /*console.log(trimmed);*/
 
    
    
})

textspace.addEventListener('keydown', (e)=> {
    if (e.code === 'Space') {
        spaceCount++;
        wcounter.textContent = spaceCount;
    }
})


window.onload = () => {
    textspace.value = "";
    count = 0;
    spaceCount = 0;
    counter.value = 0;
    wcounter.value = 0;
    
}