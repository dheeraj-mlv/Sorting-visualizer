
function swap(el1,el2){
  const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}


const x=document.querySelectorAll(".bars");

var n=x.length;

for(let i=0; i<n-1; i++)
{
    for(j=0; j<n-i-1; j++)
    {
        x[j].style.background='red';
        x[j+1].style.background='red';

        if(parseInt(x[j].style.height) > parseInt(x[j+1].style.height))
        {
            swap(x[j], x[j+1]);
        }

        x[j].style.background='yellow';
        x[j+1].style.background='yellow';
    }

    x[x.length-i-1].style.background='green';
  }