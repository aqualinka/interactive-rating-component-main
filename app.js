
function submit(){
  
    document.querySelector(".card-rating").style.display = "none";
    document.querySelector(".card-thankyou").style.display = "flex";
}

function selectButton(button){
    document.getElementById("rating-sentence").innerHTML = `You selected <span id='rating-text'> ${button}</span> out of 5`;
}
