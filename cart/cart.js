document.querySelector("#inc").addEventListener("click",increse);
document.querySelector("#dec").addEventListener("click",decrese);
var counter=0;
function increse()
{
    
    counter++;
    
    document.querySelector("#counter").textContent=counter;
}

function decrese()
{
    if(counter>0)
    {
        counter--;
        document.querySelector("#counter").textContent=counter;
    }
}