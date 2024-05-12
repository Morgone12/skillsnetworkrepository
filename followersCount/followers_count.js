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

