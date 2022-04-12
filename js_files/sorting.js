// random number generator 

function randomNumber(){
    // generate a number between 1 and 100 

    return Math.floor(Math.random()*400)+1;
}

// make a function that makes 100 bars 


function makeBars(){

    // generate 100 random numbers of range 0-100
    var a=[];

    var count=0;

    while(count<100){
        var temp = randomNumber();

        a.push(temp);

        count++;

    }

    // create 100 divisions inside the bars division of the html page

    count=0;

    while(count<100){

        const division =document.createElement("div");

        division.style.height=a[count]+'px';
        

        division.classList=["bars"];

        division.classList.add(a[count]);

        division.id=[a[count]];


        document.querySelector(".bars-div").appendChild(division);

        count++;
    }


}

document.querySelector(".new-array").addEventListener('click',makeBars);















