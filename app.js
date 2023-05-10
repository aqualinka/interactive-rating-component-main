function handleSubmit(event){
    event.preventDefault();
    let input = document.querySelector('input[name="ratingBtn"]:checked');
    if (!input) {
        alert("You need to rate us first!");
        return;
      }
        document.querySelector(".card-rating").style.display = `none`;
        document.querySelector(".card-thankyou").style.display = `flex`;
        document.getElementById("rating-message").innerHTML = `You selected ${input.value} out of 5`;
    
}
let form=document.getElementById("form");
form.addEventListener("submit",handleSubmit);
