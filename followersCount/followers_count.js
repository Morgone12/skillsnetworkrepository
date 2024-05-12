let count = 0; //initialize count to 0

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count;
}

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function checkCountValue(){
    if(count === 10){
        alert("Your instagram post gained 10 followers! nice!");
    }
    else if(count === 20){
        alert("Your instagram post gained 20 followers! Congratulations");
    }
}

function resetCount(){
    if(confirm("Los seguidores se resetearan!")){
        count = 0;
        document.getElementById('countDisplay').innerHTML=count;
    }
    else{
        alert("Usted ha cancelado el reseteo de seguidores.")
    }
}